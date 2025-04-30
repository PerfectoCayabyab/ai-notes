'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { summarizeNote } from '@/actions/summarizeNote';
import { updateNote } from '@/actions/updateNote';

export default function EditNote({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchNote() {
      const res = await fetch(`/api/notes/${params.id}`);
      const note = await res.json();
      setTitle(note.title);
      setContent(note.content);
    }
    fetchNote();
  }, [params.id]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    const summary = await summarizeNote(content);
    await updateNote(params.id, title, content, summary);
    router.push('/dashboard');
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded h-40"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}
