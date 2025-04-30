'use server';

import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function updateNote(id: string, title: string, content: string, summary: string) {
  const client = await clientPromise;
  const db = client.db('ai-notes');
  const result = await db.collection('notes').updateOne(
    { _id: new ObjectId(id) },
    { $set: { title, content, summary } }
  );
  return result.modifiedCount;
}
