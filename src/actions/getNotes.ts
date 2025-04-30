// src/actions/getNotes.ts
'use server';

import clientPromise from '@/lib/mongodb';

export async function getNotes() {
  const client = await clientPromise;
  const db = client.db('ai-notes');
  const notes = await db.collection('notes').find().sort({ createdAt: -1 }).toArray();

  // Convert MongoDB ObjectId to string and strip prototype objects
  return notes.map((note) => ({
    _id: note._id.toString(),
    title: note.title,
    summary: note.summary,
  }));
}
