---
import WeatherWidget from '../components/WeatherWidget.astro';
import TaskList from '../components/TaskList.jsx';
import { db, Task, Note } from 'astro:db';

if (Astro.request.method === 'POST') {
  const formData = await Astro.request.formData();
  
  if (formData.has('newTask')) {
    await db.insert(Task).values({ title: formData.get('newTask') as string });
  }
  if (formData.has('newNote')) {
    await db.insert(Note).values({ content: formData.get('newNote') as string, date: new Date() });
  }
}

const tasks = await db.select().from(Task);
const notes = await db.select().from(Note);
---
<html lang="uk">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Домашній Дашборд</title>
  </head>
  <body class="bg-gray-100 p-6 min-h-screen">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      
      <!-- Погода -->
      <div class="col-span-1 md:col-span-2">
        <WeatherWidget />
      </div>

      <!-- Задачі -->
      <div class="bg-white p-5 rounded-lg shadow-sm">
        <h2 class="font-bold text-xl mb-4">Задачі</h2>
        <form method="POST" class="flex gap-2 mb-4">
          <input type="text" name="newTask" placeholder="Нова задача..." class="border p-2 rounded flex-1" required />
          <button type="submit" class="bg-black text-white px-4 py-2 rounded">Додати</button>
        </form>
        <TaskList client:load initialTasks={tasks} />
      </div>

      <!-- Нотатки -->
      <div class="bg-white p-5 rounded-lg shadow-sm">
        <h2 class="font-bold text-xl mb-4">Нотатки</h2>
        <form method="POST" class="flex flex-col gap-2 mb-4">
          <textarea name="newNote" rows="3" placeholder="Записати..." class="border p-2 rounded w-full" required></textarea>
          <button type="submit" class="bg-black text-white px-4 py-2 rounded self-start">Зберегти</button>
        </form>
        <div class="space-y-3">
          {notes.reverse().map(note => (
            <div class="p-3 bg-yellow-50 border-l-4 border-yellow-400 text-sm">
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </body>
</html>
