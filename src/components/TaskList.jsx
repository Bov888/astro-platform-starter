import { useState } from 'preact/hooks';

export default function TaskList({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = async (id, currentStatus) => {
    const newStatus = !currentStatus;
    setTasks(tasks.map(t => t.id === id ? { ...t, isDone: newStatus } : t));

    try {
      await fetch(`/api/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isDone: newStatus })
      });
    } catch (error) {
      console.error("Помилка:", error);
    }
  };

  return (
    <ul class="space-y-2">
      {tasks.map(task => (
        <li key={task.id} class="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={task.isDone} 
            onChange={() => toggleTask(task.id, task.isDone)}
            class="w-4 h-4 cursor-pointer"
          />
          <span class={task.isDone ? "line-through text-gray-400" : ""}>{task.title}</span>
        </li>
      ))}
    </ul>
  );
}
