function isGoodStringParam(param) {
    return typeof param === "string" && param.trim().length > 0;
}

const tasks = [
    { id: "1", title: "Take a shower", status: "false" },
    { id: "2", title: "Get wingstop for dinner", status: "false" },
    { id: "3", title: "Work on the project for 3330", status: "true" }
];

const getAllTasks = () => {
    return tasks;
};

const getTaskById = (id) => {
    return tasks.find((task) => task.id === String(id));
};

const createTask = (title) => {
    if (!isGoodStringParam(title)) {
        const error = new Error("Task title is required");
        error.status = 400;
        throw error;
    }

    const nextId = tasks.length
        ? String(Math.max(...tasks.map((task) => Number(task.id))) + 1)
        : "1";

    const newTask = {
        id: nextId,
        title: title.trim(),
        status: "false"
    };

    tasks.push(newTask);
    return newTask;
};

export default {
    getAllTasks,
    getTaskById,
    createTask
};
