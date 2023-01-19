
import express from "express";

// import controllers
import { getAllPackages, getPackageById, createNewPackage, updatePackage, deletePackage} from "../controllers/packageController";

const packageRouter = express.Router();

packageRouter.get("/", getAllPackages);
packageRouter.get("/:id", getPackageById);
packageRouter.post("/add", createNewPackage);
packageRouter.put("/update/:id", updatePackage);
packageRouter.delete("/:id", deletePackage);


export default packageRouter;
