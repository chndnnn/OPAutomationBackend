import express from "express";
import { login } from "../Controllers/authController.js";

const router = express.Router()

router.route("/login").post(login)

export default router