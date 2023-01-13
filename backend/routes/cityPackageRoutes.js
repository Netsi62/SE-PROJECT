import express from "express";

// import controllers

import { getAllCity } from "../controllers/cityController.js";

const router  = express.Router();

router.get("/", getAllCity);

export default router;
