import { useState } from "react";
import { db } from "../database/setupDatabase";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (contactId) => {
    const dbTasks = await db.collections.get("tasks").query().fetch();
    setTasks(dbTasks.filter((task) => task.contact.id === contactId));
  };

  const createTask = async (contactId, title, dueDate) => {
    await db.write(async () => {
      await db.collections.get("tasks").create((task) => {
        task.title = title;
        task.dueDate = dueDate;
        task.contact.id = contactId;
      });
    });
    await fetchTasks(contactId);
  };

  const updateTask = async (taskId, updatedData) => {
    const task = await db.collections.get("tasks").find(taskId);
    await db.write(async () => {
      await task.update((record) => {
        record.title = updatedData.title;
        record.dueDate = updatedData.dueDate;
      });
    });
    await fetchTasks(task.contact.id);
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
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
