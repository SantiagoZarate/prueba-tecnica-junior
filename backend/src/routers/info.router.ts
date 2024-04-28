import { Router } from "express";
import { getAllInfo } from "../controllers/info.controller";

const router = Router();

// GET
router.get("/", getAllInfo);

// POST
router.get("/");

// UPDATE

// PATH

export default router;
