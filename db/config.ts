import { defineDb, defineTable, column } from 'astro:db';

const Task = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        title: column.text(),
        isDone: column.boolean({ default: false }),
    }
});

const Note = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        content: column.text(),
        date: column.date({ default: new Date() }),
    }
});

export default defineDb({ tables: { Task, Note } });