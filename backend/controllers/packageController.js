

import mongoose from "mongoose";


/* importing all the models needed inthis */
import Package from "../Models/packageModel.js";
import Agent from "../Models/agentModel.js";



export const getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        if (!packages) {
            return res.status(404).json({ message: "no packages for today!" });
        }
        return res.status(200).json({ packages });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get a single city package by id
export const getPackage = async (req, res) => {
    const pkg_id = req.params.id
    try {
        const pkg = await Package.findById(pkg_id);
        if (!pkg) {
            return res.status(404).json({ message: "no such package exists sorry " });
        }
        return res.status(200).json({ pkg });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// // create a new package || allowed for agents only
// export const addPackage = async (req, res, next) => {
//     try {
//         let existingAgent;
//         try {
//             agent = await Agent.findById(req.params.agentId);
//         } catch (error) {
//             res.status(401).json({ message: "unauthorized access" });
//         }

//         const { name, location, duration, pricePerAdult, description, departureDates, image, type } = req.body;

//         let newPackage;
//         try {
//             newPackage = await new Package({ name, location, duration, pricePerAdult, description, departureDates, image, type })
//         } catch (error) {
//             return res.status(400).json({ message: error.message });
//         }

//         try {
//             await newPackage.save();
//             existingAgent.packageOffers.push(newPackage);
//             await existingAgent.save();

//         } catch (error) {
//             return res.status(400).json({ message: error.message });
//         }
//         return res.status(201).json({ newPackage });
//     } catch (error) {
//         next(err);
//     }
// }


// update a package || allowed for agent only
export const ratePackage = async (req, res) => {

    try {
        const pkg_id = req.params.id
        const pkg_rate = await Package.findById(pkg_id).select("rating  totalRatings");
        if (!pkg_rate) {
            return res.status(404).json({ message: "no such package exists sorry" })
        }
        const new_rating = Math.round((req.body.user_rate + (pkg_rate.totalRatings * pkg_rate.rating) / (pkg_rate.totalRatings + 1)))
        const updated_one = { totalRatings: pkg_rate.totalRatings + 1, rating: new_rating }
        await Package.findOneAndUpdate({ _id: pkg_id }, updated_one)

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};


    // let existingPackage;

    // Find the package by id
    // try {
    //     existingPackage = await Package.findById(req.params.id);
    // } catch (error) {
    //     return res.status(404).json({ message: 'City package not found' });
    // }

    // // Update the package
    // let updated;
    // try {
    //     updated = await existingPackage.updateOne({ _id: req.params.id }, { $set: req.body });
    // } catch (error) {
    //     return res.status(400).json({ message: 'Update failed' });
    // }

    // existingPackage.save();
    // return res.status(200).json({ message: 'City package updated successfully' });




// Delete a package
// export const deletePackage = async (req, res, next) => {
//     try {
//         let existingAgent;
//         try {
//             existingAgent = await Agent.findById(req.params.agentId);
//         } catch (error) {
//             res.status(401).json({ message: "unauthorized access" });
//         }

//         let existingPackage;

//         // Find the package by id
//         try {
//             existingPackage = await Package.findById(req.params.id);
//         } catch (error) {
//             return res.status(404).json({ message: 'package not found' });
//         }

//         if (!existingPackage) {
//             return res.status(404).json({ message: "package not found!" });
//         }

//         // Delete the package
//         try {
//             // remove it from the agent packages
//             // remove the package
//             let newPackageOffers = [];

//             for (let i = 0; i < existingAgent.packageOffers.length; i++) {
//                 if (existingAgent.packageOffers[i] !== existingPackage) {
//                     newPackageOffers.push(existingAgent.packageOffers[i]);
//                 }
//             }
//             existingAgent.packageOffers = newPackageOffers;
//             await existingAgent.save();
//             await existingPackage.remove();

//         } catch (error) {
//             return res.status(500).json({ message: 'Failed to delete package' });
//         }
//         return res.status(204).json({ message: 'Package deleted Successfully' });


//     } catch (error) {
//         next(error);
//     }
// }


