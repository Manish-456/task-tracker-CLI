## TASK TRACKER CLI
A command-line interface for managing tasks.

### Getting Started
Clone the repository and navigate to the project directory.

### Commands
**Add a new task:**

```bash
node index.js add <task_name>
```
OR
```bash
npm start add <task_name>
```

- `<task_name>`: The name of the new task.

Example: `node src/main.js add "Buy milk"` or `npm start add "Buy milk"`

**Update a task:**

```bash
node src/main.js update <task_id> <new_task>
```

OR 

```bash
npm start update <task_id> <new_task>
```
- `<task_id>`: The ID of the task to update.
- `<new_task_name>`: The new name of the task.

Example: `node src/main.js update 1 "Buy Laptop"` or `npm start update 1 "Buy Laptop"`

**Delete a task:**

```bash
node src/main.js delete <task_id> 
```

OR 

```bash
npm start delete <task_id> 
```
- `<task_id>`: The ID of the task to delete.

Example: `node src/main.js delete 1` or `npm start delete 1`

**Mark a task as in progress:**

```bash
node src/main.js mark-in-progress <task_id > 
```

OR 

```bash
npm start mark-in-progress <task_id > 
```
- `<task_id>`: The ID of the task to mark as in progress.

Example: `node src/main.js mark-in-progress 1` or `npm start mark-in-progress 1`


**Mark a task as done:**

```bash
node src/main.js mark-done <task_id> 
```

OR 

```bash
npm start mark-done <task_id> 
```
- `<task_id>`: The ID of the task to mark as done.

Example: `node src/main.js mark-done 1` or `npm start mark-done 1`

**List tasks**
```bash
node src/main.js list
```
OR
```bash
npm start list
```

List all tasks.

**List tasks by status**
```bash
node src/main.js list <status>
```
OR
```bash
npm start list <status>
```
- `<status>`: The status of the tasks to list (todo, in-progress, or done)

Example: `node src/main.js list "todo"` or `npm start list "todo"`

#### Note
This task tracker stores tasks in a JSON file named `tasks.json` in the project directory.





