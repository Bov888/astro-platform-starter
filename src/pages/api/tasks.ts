import { db, Task, eq } from 'astro:db';

const defaultTasks = [
  {
    id: 1,
    title: 'Купити продукти на тиждень',
    assignee: 'Олександр',
    priority: 'Високий',
    status: 'В процесі',
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'Записати дитину на секцію',
    assignee: 'Людмила',
    priority: 'Середній',
    status: 'Виконано',
    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'Зробити домашнє завдання з математики',
    assignee: 'Максим',
    priority: 'Високий',
    status: 'План',
    createdAt: new Date(),
  },
  {
    id: 4,
    title: 'Полити квіти та подбати про сад',
    assignee: 'Антоніна',
    priority: 'Низький',
    status: 'План',
    createdAt: new Date(),
  },
];

export async function GET() {
  const tasks = await db.select().from(Task);

  if (!tasks.length) {
    await db.insert(Task).values(defaultTasks);
    return Response.json(defaultTasks);
  }

  return Response.json(tasks);
}

export async function POST({ request }) {
  const data = await request.json();
  const title = String(data.title ?? '').trim();
  const assignee = String(data.assignee ?? '').trim();
  const priority = String(data.priority ?? 'Середній');
  const status = String(data.status ?? 'План');

  if (!title || !assignee) {
    return Response.json({ error: 'Title and assignee are required' }, { status: 400 });
  }

  const task = {
    id: Date.now(),
    title,
    assignee,
    priority,
    status,
    createdAt: new Date(),
  };

  await db.insert(Task).values(task);
  return Response.json(task);
}

export async function DELETE({ request }) {
  const data = await request.json();
  const id = Number(data.id);

  if (!Number.isFinite(id)) {
    return Response.json({ error: 'Invalid task id' }, { status: 400 });
  }

  await db.delete(Task).where(eq(Task.id, id));
  return Response.json({ success: true });
}