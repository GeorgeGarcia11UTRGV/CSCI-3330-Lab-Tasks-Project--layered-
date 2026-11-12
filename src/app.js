import express from "express";
import tasksRoutes from "./routes/tasks.routes.js";
import tasksMiddleware from "./middleware/tasks.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/tasks", tasksRoutes);

app.use(tasksMiddleware.errorHandler);

export default app;
