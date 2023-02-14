



import Room from "../Models/roomsModel.js";


export const getAllRooms = async (req, res) => {
    let taken;
    if (!req.query.taken) {
        taken = {}
    }
    else {
        taken = req.query.city
    }
    try {
        const auth = await authorizationChecker(req)

        if (auth === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (auth === "C") {
            return res.status(401).json({ message: "not auth" })
        }
        const rooms = await Room.find({ taken })
        res.status(200).json({ data: rooms })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const addRoom = async (req, res) => {
    try {
        const auth = await authorizationChecker(req)
        if (auth === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (auth === "C") {
            return res.status(401).json({ message: "not auth" })
        }
        const room = await Room.create(req.body)
        res.status(200).json({ success: true, data: room })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


export const getRoom = async (req, res) => {
    try {
        const auth = await authorizationChecker(req)

        if (auth === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (auth === "C") {
            return res.status(401).json({ message: "not auth" })
        }
        const id = req.params.id
        const room = await Room.find({ _id: id })
        if (!room) {
            return res.status(404).json({ msg: "No room " })
        }
        res.status(200).json({ data: room })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}

export const updateRoom = async (req, res) => {
    try {
        const auth = await authorizationChecker(req)
        if (auth === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (auth === "C") {
            return res.status(401).json({ message: "not auth" })
        }
        const room = await Room.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
        if (!room) {
            return res.status(404).json({ msg: "No room " })
        }
        res.status(200).json({ success: true, data: room })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const deleteRoom = async (req, res) => {
    try {
        const auth = await authorizationChecker(req)


        if (auth === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (auth === "C") {
            return res.status(401).json({ message: "not auth" })
        }
        const room = await Room.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({ data: room })
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}