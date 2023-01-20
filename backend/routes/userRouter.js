
import express from "express";

// import controllers
import { signup, login} from "../controllers/userController.js";

const userRouter = express.Router();

// - getAllUsers: to get all user's list
// - getProfile: for fetching the profile of the logged-in user
// - addToWishlist: for adding a specified package to the cart of the logged-in user
// - signup: for creating a new user
// - login: for logging in an existing user
//  - updateProfile: for updating the profile of the logged-in user
//  - bookPackage: for booking a package in the cart of the logged-in user
//  - removePackageFromWishlist: for removing a specified package from the Wish List of the logged-in user
//  - viewWishlist: views the user wishlist.

/*
 - viewCart: for viewing the cart of the logged-in user
*/

// userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.post("/login", login);

// userRouter.post("/:id", addToWishlist);
// userRouter.post("/:id", bookPackage);
// userRouter.get("wishlist", viewWishlist)
// userRouter.post("/:id/unbook", removeFromBookedPackages);
// userRouter.delete("/:id", removeFromWishlist);




export default userRouter;
