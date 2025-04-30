import { getNoteById } from '@/actions/getNoteById';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function NotePage(props: any) {
  const { id } = props.params as { id: string };

  const note = await getNoteById(id);

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
