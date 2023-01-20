
import express from "express";

// import controllers
import { getComment, addComment, updateComment, deleteComment } from "../controllers/commentController";

const commentRouter = express.Router();


/** 
 * getComment: to get comment on a specific package
 * addComment: for adding a comment on a package
 * updateComment: for updating an existing comment
 * deleteComment: for deleting an existing comment
 */
commentRouter.get("/:id", getComment);
commentRouter.post("/add", addComment);
commentRouter.put("/update/:id", updateComment);
commentRouter.delete("/:id", deleteComment);


export default commentRouter;
