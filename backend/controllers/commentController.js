
import User from "../Models/userModel.js";
import Comment from "../Models/commentModel.js";
import { authorizationChecker } from "../middleware/auth.js";
import { Types } from "mongoose";

export const getComment = async (req, res) => {
    try {
        const pkg_id = req.query.pkg

        const id = Types.ObjectId(pkg_id)
        console.log(id)
        const comments = await Comment.find({ pkg: id });
        return res.status(200).json({ comments });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const addComment = async (req, res) => {
    try {
        const authorized = await authorizationChecker(req)
        if (authorized === "A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if (authorized === "C") {
            return res.status(401).json({ message: "not authorized" })

        }
        const { pkg, text } = req.body

        const newcomment = { user: authorized.name, pkg, text }

        const comment = await Comment.create(newcomment);
        return res.status(201).json({ comment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateComment = async (req, res) => {
    try {
        const comments = await Comment.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!comments) {
            res.status(404).json({ message: "no such commet" });
        }
        return res.status(201).json({ comments });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
