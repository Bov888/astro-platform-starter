import { defineDb, defineTable, column } from 'astro:db';

const Task = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    assignee: column.text(),
    priority: column.text(),
    status: column.text(),
    createdAt: column.date({ default: new Date() }),
  },
});

const Note = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    content: column.text(),
    createdAt: column.date({ default: new Date() }),
  },
});

export default defineDb({ tables: { Task, Note } }); 