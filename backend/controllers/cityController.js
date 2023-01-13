

import City from "../Models/cityModel.js";

export const getAllCity = async (req, res, next) => {
    let cities;
    try {
        cities = await City.find();
    } catch (error) {
        return console.log(error);
    }

    if (!cities) {
        return res.status(404).json({message: "No cities Found"});
    }

    return res.status(200).json({cities});
}