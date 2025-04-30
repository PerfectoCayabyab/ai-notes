'use server';

import clientPromise from '@/lib/mongodb';

export async function createNote(
  title: string,
  content: string,
  summary: string,
  tags: string[]
) {
  const client = await clientPromise;
  const db = client.db('ai-notes');
  const note = await db.collection('notes').insertOne({
    title,
    content,
    summary,
    tags,
    createdAt: new Date(),
  });
  return note.insertedId.toString();
}
