// src/app/note/[id]/page.tsx
import { getNoteById } from '@/actions/getNoteById';

export default async function NotePage({ params }: { params: { id: string } }) {
  const note = await getNoteById(params.id);

  if (!note) {
    return <div className="p-4 text-red-600">Note not found.</div>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{note.title}</h1>
      <p className="text-gray-700 whitespace-pre-wrap mb-4">{note.content}</p>
      <div className="bg-gray-100 p-3 rounded">
        <h2 className="font-semibold">AI Summary:</h2>
        <p>{note.summary}</p>
      </div>
    </div>
  );
}
