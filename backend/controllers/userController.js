

import mongoose from "mongoose";

import User from "../Models/userModel";
import Package from "../Models/packageModel";
import Wishlist from "../Models/wishList";

import bcrypt from 'bcryptjs';



export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }

    if (!users) {
        return res.status(404).json({ message: "no users found!" });
    }
    return res.status(200).json({ users });
}

export const getProfile = async (req, res, next) => {
}

export const updateProfile = async (req, res, next) => {}


// authentication must be made here
// signup
export const signup = async (req, res, next) => {
    try {
        const { name, email, password} = req.body;
        let existingUser;

        try {
            existingUser = await User.findOne({ email });
        } catch (error) {
            return console.log(error);
        }

        if (existingUser) {
            return res.status(400).json({ message: "User account already exists, Login instead." })
        }

        const hashedpassword = bcrypt.hashSync(password);
        // if user is really new
        const user = new User({ name, email, password: hashedpassword, bookedPackages:[], wishList:[], Comment:[]});

        try {
            user.save();
        } catch (error) {
            return console.log(error);
        }

        return res.status(201).json({ user })
    } catch (error) {
        console.log(error);
        return res.json({ message: error.message });
    }
}


// login
export const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        return res.status(400).json({ message: "User Doesn't exist by that email." })
    }

    if (!existingUser) {
        return res.status(400).json({ message: "User Doesn't exist by that email." })
    }

    // if that email exists compare the password, returns a boolean
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        // 400: unauthorized
        return res.status(400).json({ message: "Incorrect Password" });
    }

    return res.status(200).json({ message: "login successfull" });
}


// add a package to the user's wish list
export const addToWishlist = async (req, res, next) => {
    try {
        // Find the user by id
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find the package by id
        const _package = await Package.findById(req.params.packageId);
        if (!_package) {
            return res.status(404).json({ message: 'Package not found' });
        }

        // Add the package to the user's cart
        user.wishList.push(_package);

        // Save the user
        await user.save();

        res.status(200).json({ message: 'Package added to cart successfully' });
    } catch (err) {
        next(err);
    }
};


// book a package
export const bookPackage = async (req, res, next) => {

    try {
        // Find the user by id
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find the package by id
        const _package = await Package.findById(req.params.packageId);
        if (!_package) {
            return res.status(404).json({ message: 'Package not found' });
        }

        // Add the package to the user's cart
        user.bookedPackages.pop(_package);

        // Save the user
        await user.save();

        res.status(200).json({ message: 'Package booked !' });
    } catch (err) {
        next(err);
    }
};

export const viewWishlist = async (req, res, next) => {}



// remove a package from wish list
export const removeFromWishlist = async (req, res, next) => {
    try {
        // Find the user by id
        const existingUser = await User.findById(req.params.userId);
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find the package by id
        const _package = await Package.findById(req.params.packageId);
        if (!_package) {
            return res.status(404).json({ message: 'Package not found' });
        }

        // Add the package to the existingUser's cart
        let newWishList = [];

        for (let i = 0; i < existingUser.wishList.length; i ++){
            if (existingUser.wishList[i] !== _package){
                newWishList.push(existingUser.wishList[i] );
            }
        }

        existingUser.wishList = newWishList;

        // Save the existingUser
        await existingUser.save();

        res.status(200).json({ message: 'Package removed from wishlist successfully' });
    } catch (err) {
        next(err);
    }
};



// cancel a booked package
export const removeFromBookedPackages = async (req, res, next) => {
    try {
        // Find the user by id
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find the package by id
        const _package = await Package.findById(req.params.packageId);
        if (!_package) {
            return res.status(404).json({ message: 'Package not found' });
        }

        // Add the package to the user's cart
        let newWishList = [];

        for (let i = 0; i < user.wishList.length; i ++){
            if (user.bookedPackages[i] !== _package){
                newWishList.push(user.bookedPackages[i] );
            }
        }

        user.bookedPackages = newWishList;

        // Save the user
        await user.save();

        res.status(200).json({ message: 'Package unbooked Successfully' });
    } catch (err) {
        next(err);
    }
};

