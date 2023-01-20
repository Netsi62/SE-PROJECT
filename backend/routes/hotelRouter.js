
import express from "express";

// import controllers
// import {getAllHotels, getHotel, addHotel, updateHotel, deleteHotel} from "../controllers/hotelController.js";

/** 
 * - getAllHotels: for fetching all the agents
 * - getHotel: for fetching a specific agent
 * - addHotel: for adding a new agent
 * - updateHotel: for updating an existing agent
 * - deleteHotel: for deleting an existing agent
 */
const hotelRouter  = express.Router();


// hotelRouter.get("/", getAllHotels);
// hotelRouter.post("/signup", getHotel);
// hotelRouter.post("/login", addHotel);
// hotelRouter.post("/:id", updateHotel);
// hotelRouter.post("/:id", deleteHotel);

export default hotelRouter;
