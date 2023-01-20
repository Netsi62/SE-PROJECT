
import express from "express";

// import controllers
import { getAllBookings, getBooking, addBooking, updateBooking, deleteBooking} from "../controllers/bookingController";
/**
 * getAllBookings: for fetching all the bookings
 * getBooking: for fetching a specific booking
 * addBooking: for adding a new booking
 * updateBooking: for updating an existing booking
 * deleteBooking: for deleting an existing booking
*/

const bookingRouter = express.Router();

bookingRouter.get("/", getAllBookings);
bookingRouter.get("/:id", getBooking);
bookingRouter.post("/add", addBooking);
bookingRouter.put("/update/:id", updateBooking);
bookingRouter.delete("/delete/:id", deleteBooking);


export default bookingRouter;
