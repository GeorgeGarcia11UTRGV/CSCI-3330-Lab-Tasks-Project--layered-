import tasksServices from "../services/tasks.services.js";

const getTasks = (req, res, next) => {
    try {
        const allTasks = tasksServices.getAllTasks();
        res.status(200).json({
            success: true,
            data: allTasks
        });
    } catch (error) {
        next(error);
    }
};

const getTaskById = (req, res, next) => {
    try {
        const task = tasksServices.getTaskById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found!"
            });
        }

        res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        next(error);
    }
};

const createTask = (req, res, next) => {
    try {
        const { title } = req.body;
        const newTask = tasksServices.createTask(title);

        res.status(201).json({
            success: true,
            data: newTask
        });
    } catch (error) {
        next(error);
    }
};

export default {
    getTasks,
    getTaskById,
    createTask
};
