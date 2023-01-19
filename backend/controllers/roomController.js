const Room = require('path/to/roomModel');

class RoomController {

    async createRoom(req, res, next) {
        try {
            const newRoom = new Room(req.body);
            await newRoom.save();
            return res.status(201).json({ message: 'Room created successfully', room: newRoom });
        } catch (error) {
            return next(error);
        }
    }
    
    async getAllRooms(req, res, next) {
        try {
            const rooms = await Room.find({});
            return res.status(200).json({ rooms });
        } catch (error) {
            return next(error);
        }
    }

    async getRoomById(req, res, next) {
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

    async updateRoom(req, res, next) {
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

    async deleteRoom(req, res, next) {
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
}

module.exports = new RoomController();
