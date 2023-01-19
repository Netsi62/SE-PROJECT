

import mongoose from "mongoose";


import Package from "../Models/packageModel";
import Agent from "../Models/agentModel";
import { json } from "express";


// login
// signup
// add new package
// update Package
// delete package


// login
export const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingAgent;
    try {
        existingAgent = await Agent.findOne({ email });
    } catch (error) {
        return res.status(400).json({ message: "User Doesn't exist by that email." })
    }

    if (!existingAgent) {
        return res.status(400).json({ message: "User Doesn't exist by that email." })
    }

    // if that email exists compare the password, returns a boolean
    const isPasswordCorrect = bcrypt.compareSync(password, existingAgent.password);
    if (!isPasswordCorrect) {
        // 400: unauthorized
        return res.status(400).json({ message: "Incorrect Password" });
    }

    return res.status(200).json({ message: "login successfull" });
}


// signup
export const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        let existingAgent;

        try {
            existingAgent = await Agent.findOne({ email });
        } catch (error) {
            return console.log(error);
        }

        if (existingAgent) {
            return res.status(400).json({ message: "User account already exists, Login instead." })
        }

        const hashedpassword = bcrypt.hashSync(password);
        // if user is really new
        const agent = new Agent({ name, email, password: hashedpassword, packageOffers: [] });

        try {
            agent.save();
        } catch (error) {
            return console.log(error);
        }

        return res.status(201).json({ user })
    } catch (error) {
        console.log(error);
        return res.json({ message: error.message });
    }
}

