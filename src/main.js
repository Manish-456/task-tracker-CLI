import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  parseString,
  readJSONFile,
  stringify,
  writeToJSONFile,
} from "./lib/utils.js";

const filename = "tasks.json";

const argv = yargs(hideBin(process.argv))
  .command("add <task>", "add a new task", (yargs) => {
    yargs.positional("task", {
      type: "string",
      description: "New task",
    });
  })
  .command("update <taskId> <task>", "update a task", (yargs) => {
    yargs.positional("taskId", {
      type: "number",
      description: "Taks ID",
    });
    yargs.positional("task", {
      type: "string",
      description: "Task description",
    });
  })
  .command("delete <taskId>", "delete a task", (yargs) => {
    yargs.positional("taskId", {
      type: "number",
      description: "Task ID",
    });
  })
  .command("mark-in-progress <taskId>", "mark a task as progress", (yargs) => {
    yargs.positional("taskId", {
      type: "number",
      description: "Task ID",
    });
  })
  .command("mark-done <taskId>", "mark a task as done", (yargs) => {
    yargs.positional("taskId", {
      type: "number",
      description: "Task ID",
    });
  })
  .command("list", "list tasks")
  .command("list [status]", "list tasks by status", (yargs) => {
    yargs.positional("status", {
      type: "string",
      description: "Task status",
      choices: ["todo", "in-progress", "done"],
    });
  })
  .help().argv;

function addTask(task) {
  if (!fs.existsSync(filename)) {
    writeToJSONFile(stringify([]));
  }
  const tasks = parseString(readJSONFile());
  const newTask = {
    id: tasks.length + 1,
    name: task,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  tasks.push(newTask);
  writeToJSONFile(stringify(tasks));
  return newTask;
}

function updateTask(taskId, task) {
  const tasks = parseString(readJSONFile());
  const taskToUpdate = tasks.find((t) => t.id === taskId);

  if (!taskToUpdate) {
    throw new Error("Task not found");
  }

  taskToUpdate.name = task;
  taskToUpdate.updatedAt = new Date();
  writeToJSONFile(stringify(tasks));
  return taskToUpdate;
}

function deleteTask(taskId) {
  const tasks = parseString(readJSONFile());
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) throw new Error("Task not found");

  tasks.splice(taskIndex, 1);
  writeToJSONFile(stringify(tasks));
  return tasks[taskIndex];
}

function markTaskInProgress(taskId) {
  const tasks = parseString(readJSONFile());
  const task = tasks.find((t) => t.id === taskId);

  if (!task) throw new Error("Task not found");

  task.status = "in-progress";
  task.updatedAt = new Date();
  writeToJSONFile(stringify(tasks));
  return task;
}
function markTaskDone(taskId) {
  const tasks = parseString(readJSONFile());
  const task = tasks.find((t) => t.id === taskId);

  if (!task) throw new Error("Task not found");

  task.status = "done";
  task.updatedAt = new Date();
  writeToJSONFile(stringify(tasks));
  return task;
}

function listTasks(status = "") {
  const tasks = parseString(readJSONFile());
  if (status) {
    const relatedTask = tasks.filter((t) => t.status === status);
    console.log(relatedTask);
    return;
  }
  console.log(tasks);
}

switch (argv._[0]) {
  case "add":
    addTask(argv.task);
    break;
  case "update":
    updateTask(argv.taskId, argv.task);
    break;
  case "delete":
    deleteTask(argv.taskId);
    break;
  case "mark-in-progress":
    markTaskInProgress(argv.taskId);
    break;
  case "mark-done":
    markTaskDone(argv.taskId);
    break;
  case "list":
    listTasks(argv.status || "");
    break;
}
