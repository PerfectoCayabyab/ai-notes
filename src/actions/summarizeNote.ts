// src/actions/summarizeNote.ts
'use server';

export async function summarizeNote(content: string) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: `Summarize this note: ${content}` }],
          },
        ],
      }),
    }
  );

  const data = await res.json();
  const summary = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return summary;
}