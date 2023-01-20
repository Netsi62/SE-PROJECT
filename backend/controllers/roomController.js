
import mongoose from "mongoose";


import Room from "../Models/roomsModel.js";


export const getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find({});
        return res.status(200).json({ rooms });
    } catch (error) {
        return next(error);
    }
}

export const addRoom = async (req, res, next) => {
    try {
        const newRoom = new Room(req.body);
        await newRoom.save();
        return res.status(201).json({ message: 'Room created successfully', room: newRoom });
    } catch (error) {
        return next(error);
    }
}


export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        return res.status(200).json({ room });
    } catch (error) {
        return next(error);
    }
}

export const updateRoom = async (req, res, next) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        return res.status(200).json({ message: 'Room updated successfully', room });
    } catch (error) {
        return next(error);
    }
}

export const deleteRoom = async (req, res, next) => {
    try {
        const room = await Room.findByIdAndRemove(req.params.id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        return res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
        return next(error);
    }
}