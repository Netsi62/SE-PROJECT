
import User from "../Models/userModel.js";
import Comment from "../Models/commentModel.js";
import authorizationChecker from "./userController.js"

export const getComment = async (req, res) => {
    try {
        const pkg_id =parseInt(req.query.pkg)
        const comments = await Comment.find({ package: pkg_id });
        return res.status(200).json({ comments });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const addComment = async (req, res) => {
    try {
        const authorized = authorizationChecker(req)
        if (authorized==="A") {
            return res.status(401).json({ message: "token reqired" })
        }
        else if(authorized==="C"){
            return res.status(401).json({ message: "not authorized" })
        
        }
        const comments = await Comment.create(req.body);
        return res.status(201).json({ comments });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateComment = async (req, res) => {
    try {
        const authorized = authorizationChecker(req)
        if (!authorized) {
            return res.status(407).json({ message: "anauthorized to access this page" })
        }
        const comments = await Comment.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!comments) {
            res.status(404).json({ message: "no such commet" });
        }
        return res.status(201).json({ comments });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
