import express from "express";
import { verify } from "../controller/user.controller.js";

const router = express.Router();

router.post("/", verify)

export default router;