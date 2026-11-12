import express from "express";
import tasksController from "../controller/tasks.controller.js";

const router = express.Router();

router.get("/", tasksController.getTasks);

router.get("/:id", tasksController.getTaskById);

router.post("/", tasksController.createTask);

export default router;
