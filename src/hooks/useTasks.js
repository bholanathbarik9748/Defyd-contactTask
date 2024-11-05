import { useState } from "react";
import { database as db } from "../database";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState([]);

  const fetchTasks = async (contactId) => {
    const dbTasks = await db.collections.get("tasks").query().fetch();
    setTasks(dbTasks.filter((task) => task.contact_id === contactId.replace(/-/g, "")));
  };

  const fetchTaskById = async (taskId) => {
    const fetchedTask = await db.collections.get("tasks").find(taskId);
    setSingleTask(fetchedTask);
  };

  const createTask = async (contactId, title, dueDate) => {
    await db.write(async () => {
      await db.collections.get("tasks").create((task) => {
        task.title = title;
        task.due_date = dueDate;
        task.contact_id = contactId.replace(/-/g, "");
      });
    });
    await fetchTasks(contactId);
  };

  const updateTask = async (taskId, updatedData) => {
    const task = await db.collections.get("tasks").find(taskId);
    await db.write(async () => {
      await task.update((record) => {
        record.title = updatedData.title;
        record.due_date = updatedData.dueData;
        record.contact_id = task.contact_id;
      });
    });
    await fetchTasks(task.contact_id);
  };

  const deleteTask = async (taskId) => {
    const task = await db.collections.get("tasks").find(taskId);
    const contactId = task.contact.id;
    await db.write(async () => {
      await task.markAsDeleted();
    });
    await fetchTasks(contactId);
  };

  return {
    tasks,
    singleTask,
    fetchTasks,
    fetchTaskById,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
