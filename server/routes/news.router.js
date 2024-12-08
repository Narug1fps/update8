import express from "express";
import * as newsController from "../controller/news.controller.js";


const router = express.Router();

router.route("/")
    .post( newsController.create)
    .get( newsController.fetch)
    .put( newsController.update)
    .delete( newsController.deleteNew )


export default router;
