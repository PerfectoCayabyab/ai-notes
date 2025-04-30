import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const client = await clientPromise;
  const db = client.db('ai-notes');
  const note = await db.collection('notes').findOne({ _id: new ObjectId(params.id) });

  if (!note) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json({
    _id: note._id.toString(),
    title: note.title,
    content: note.content,
    summary: note.summary,
  });
}
