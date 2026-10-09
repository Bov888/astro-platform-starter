import { db, Task, eq } from 'astro:db';
import type { APIRoute } from 'astro';

export const PATCH: APIRoute = async ({ params, request }) => {
  const id = Number(params.id);
  const body = await request.json();

  await db.update(Task)
    .set({ isDone: body.isDone })
    .where(eq(Task.id, id));

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
