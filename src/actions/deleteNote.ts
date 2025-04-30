'use server';

import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function deleteNote(id: string) {
  const client = await clientPromise;
  const db = client.db('ai-notes');
  const result = await db.collection('notes').deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}
