"use client";

import { useEffect, useState } from "react";
import { createNote } from "@/actions/createNote";
import { summarizeNote } from "@/actions/summarizeNote";
import Link from "next/link";
import { deleteNote } from "@/actions/deleteNote";

type Note = {
  _id: string;
  title: string;
  summary: string;
  tags?: string[];
};

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tags, setTags] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    async function loadNotes() {
      const res = await fetch("/api/notes");
      const result = await res.json();
      setNotes(result);
    }
    loadNotes();
  }, []);

  async function handleDelete(id: string) {
    await deleteNote(id);
    const res = await fetch("/api/notes");
    const updated = await res.json();
    setNotes(updated);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const aiSummary = await summarizeNote(content);
    setSummary(aiSummary);
    const tagArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    await createNote(title, content, aiSummary, tagArray);
    setTitle("");
    setContent("");
    setSummary("");
    setTags("");
    const res = await fetch("/api/notes");
    const updatedNotes = await res.json();
    setNotes(updatedNotes);
    setLoading(false);
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create a New Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded h-40"
          required
        ></textarea>
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Summarizing..." : "Summarize & Save"}
        </button>
      </form>

      {summary && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">AI Summary:</h3>
          <p>{summary}</p>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Notes</h2>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 w-full p-2 border border-gray-300 rounded"
        />
        {selectedTag && (
          <div className="mb-4 text-sm flex items-center gap-2">
            <span>
              Filtering by tag: <strong>#{selectedTag}</strong>
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className="text-red-600 hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}
        {notes
          .filter((note) => {
            const matchesSearch =
              note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              note.summary.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesTag = selectedTag
              ? note.tags?.includes(selectedTag)
              : true;

            return matchesSearch && matchesTag;
          })
          .map((note) => (
            <div
              key={note._id}
              className="relative border border-gray-200 rounded-2xl p-5 mb-4 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {note.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{note.summary}</p>

                  {note.tags && note.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {note.tags.map((tag: string) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(tag)}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full hover:bg-blue-200 transition"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0 flex flex-col items-end gap-2">
                  <Link href={`/note/${note._id}/edit`}>
                    <button className="text-blue-600 text-sm hover:underline">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
