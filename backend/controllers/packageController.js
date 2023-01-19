

import mongoose from mongoose;

import Package from "../Models/packageModel";
import Agent from "../Models/agentModel";

// get all packages independent of the type
// get a single package by id

// create a new package
// update a package
// Delete a package

export const getAllPackages = async (req, res, next) => {
    let packages;
    try {
        packages = await Package.find();
    } catch (error) {
        return console.log(error);
    }

    if (!packages) {
        return res.status(404).json({ message: "No cities Found" });
    }
    return res.status(200).json({ packages });
}


// get a single city package by id
export const getPackageById = async (req, res, next) => {
    let existingPackage;

    try {
        existingPackage = await Package.findById(req.params.packageId);
    } catch (error) {
        return res.status(404).json({ message: err.message });
    }

    return res.json(existingPackage);

}

// create a new package || allowed for agents only
export const createNewPackage = async (req, res, next) => {
    try {
        let existingAgent;
        try {
            agent = await Agent.findById(req.params.agentId);
        } catch (error) {
            res.status(401).json({ message: "unauthorized access" });
        }

        const { name, location, duration, pricePerAdult, description, departureDates, image, type } = req.body;

        let newPackage;
        try {
            newPackage = await new Package({ name, location, duration, pricePerAdult, description, departureDates, image, type })
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }

        try {
            await newPackage.save();
            existingAgent.packageOffers.push(newPackage);
            await existingAgent.save();

        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(201).json({ newPackage });
    } catch (error) {
        next(err);
    }
}


// update a package || allowed for agent only
export const updatePackage = async (req, res, next) => {
    try {
        let existingAgent;
        try {
            existingAgent = await Agent.findById(req.params.agentId);
        } catch (error) {
            res.status(401).json({ message: "unauthorized access" });
        }


        let existingPackage;

        // Find the package by id
        try {
            existingPackage = await Package.findById(req.params.id);
        } catch (error) {
            return res.status(404).json({ message: 'City package not found' });
        }

        // Update the package
        let updated;
        try {
            updated = await existingPackage.updateOne({ _id: req.params.id }, { $set: req.body });
        } catch (error) {
            return res.status(400).json({ message: 'Update failed' });
        }

        existingPackage.save();
        return res.status(200).json({ message: 'City package updated successfully' });
    } catch (error) {

    }

};


// Delete a package
export const deletePackage = async (req, res, next) => {
    try {
        let existingAgent;
        try {
            existingAgent = await Agent.findById(req.params.agentId);
        } catch (error) {
            res.status(401).json({ message: "unauthorized access" });
        }

        let existingPackage;

        // Find the package by id
        try {
            existingPackage = await Package.findById(req.params.id);
        } catch (error) {
            return res.status(404).json({ message: 'package not found' });
        }

        if (!existingPackage) {
            return res.status(404).json({ message: "package not found!" });
        }

        // Delete the package
        try {
            // remove it from the agent packages
            // remove the package
            let newPackageOffers = [];

            for (let i = 0; i < existingAgent.packageOffers.length; i++) {
                if (existingAgent.packageOffers[i] !== existingPackage) {
                    newPackageOffers.push(existingAgent.packageOffers[i]);
                }
            }
            existingAgent.packageOffers = newPackageOffers;
            await existingAgent.save();
            await existingPackage.remove();

        } catch (error) {
            return res.status(500).json({ message: 'Failed to delete package' });
        }
        return res.status(204).json({ message: 'Package deleted Successfully' });


    } catch (error) {
        next(error);
    }
}


