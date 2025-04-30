// src/app/api/notes/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  const client = await clientPromise;
  const db = client.db('ai-notes');
  const notes = await db.collection('notes').find().sort({ createdAt: -1 }).toArray();

  const sanitizedNotes = notes.map((note) => ({
    _id: note._id.toString(),
    title: note.title,
    summary: note.summary,
  }));

  return NextResponse.json(sanitizedNotes);
}
