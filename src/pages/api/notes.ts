import { db, Note, eq } from 'astro:db';

const defaultNote = `📌 План на тиждень:
- Перевірити стан ділянки та компостну яму
- Організувати закупівлю продуктів
- Підтвердити час на секції для дитини
- Підготувати список покупок для вихідних`;

export async function GET() {
  const notes = await db.select().from(Note);

  if (!notes.length) {
    const newNote = {
      id: 1,
      content: defaultNote,
      createdAt: new Date(),
    };

    await db.insert(Note).values(newNote);
    return Response.json(newNote);
  }

  return Response.json(notes[0]);
}

export async function PUT({ request }) {
  const data = await request.json();
  const content = String(data.content ?? '').trim();

  const notes = await db.select().from(Note);

  if (!notes.length) {
    const newNote = {
      id: 1,
      content,
      createdAt: new Date(),
    };

    await db.insert(Note).values(newNote);
    return Response.json(newNote);
  }

  const updated = {
    ...notes[0],
    content,
    createdAt: new Date(),
  };

  await db.update(Note)
    .set({
      content,
      createdAt: new Date(),
    })
    .where(eq(Note.id, notes[0].id));

  return Response.json(updated);
}