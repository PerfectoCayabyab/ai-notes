import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(req: NextRequest, context: any) {
  const { id } = context.params;

  const client = await clientPromise;
  const db = client.db('ai-notes');

  const note = await db.collection('notes').findOne({ _id: new ObjectId(id) });

  if (!note) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({
    _id: note._id.toString(),
    title: note.title,
    content: note.content,
    summary: note.summary,
    tags: note.tags ?? [],
  });
}
