export function NoteCard({ title, summary }: { title: string; summary: string }) {
    return (
      <div className="border p-4 rounded-xl shadow">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-gray-600">{summary}</p>
      </div>
    );
  }