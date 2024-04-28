import { Router } from "express";
import controller from "../controllers/user.controller";

const router = Router();

// GET
router.get("/", controller.getAllUsers);

// POST
router.get("/:id", controller.getUserById);

// UPDATE

// PATH

export default router;
