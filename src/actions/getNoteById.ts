// src/actions/getNoteById.ts
'use server';

import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function getNoteById(id: string) {
  const client = await clientPromise;
  const db = client.db('ai-notes');
  const note = await db.collection('notes').findOne({ _id: new ObjectId(id) });

  if (!note) return null;

  return {
    _id: note._id.toString(),
    title: note.title,
    content: note.content,
    summary: note.summary,
  };
}
