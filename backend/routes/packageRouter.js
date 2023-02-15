
import express from "express";

// import controllers
import { getAllPackages, getPackage, ratePackage,updatePackage ,deletePackage} from "../controllers/packageController.js";

const packageRouter = express.Router();

/**
 * - getAllPackages: for fetching all the packages
 * - getPackage: for fetching a specific package
 * - searchPackages: for searching packages based on certain criteria
 * - addPackage: for adding a new package
 * - updatePackage: for updating an existing package
 * - deletePackage: for deleting an existing package
 */
packageRouter.get("/", getAllPackages);
packageRouter.get("/:id", getPackage);
packageRouter.patch("/:id", ratePackage);
packageRouter.patch("/:id/admin", updatePackage);
packageRouter.delete("/:id", deletePackage);



export default packageRouter;
