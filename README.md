# 🧠 AI Notes App

An intelligent, AI-powered note-taking web app built with **Next.js 15**, **Google Gemini API**, and **MongoDB** — fully deployed at:

🔗 [https://ai-notes-three-red.vercel.app/dashboard](https://ai-notes-three-red.vercel.app/dashboard)

---

## ✨ Features

- ✍️ Create notes with title, content, and optional tags
- 🤖 Generate AI-powered summaries using **Google Gemini**
- 🔍 Real-time search across notes
- 🏷️ Add and filter by tags (clickable)
- 🗑️ Delete notes and ✏️ edit them with automatic re-summarization
- 🔔 Clean toast notifications using `react-hot-toast`
- 💾 Data stored in **MongoDB Atlas**
- ⚡ Deployed serverlessly on **Vercel**

---

## 🚀 Live Demo

▶️ **Try it here:** [https://ai-notes-three-red.vercel.app/dashboard](https://ai-notes-three-red.vercel.app/dashboard)

---

## 🛠 Tech Stack

- [Next.js 15 App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Gemini API](https://ai.google.dev/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [react-hot-toast](https://react-hot-toast.com/)
- [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```
src/
  app/
    dashboard/           → Main UI (create/search/view notes)
    note/[id]/           → View and edit individual notes
    api/notes/           → API endpoints for MongoDB actions
  actions/               → Server Actions (createNote, updateNote, etc.)
  lib/                   → MongoDB connection logic
  styles/                → Tailwind setup (optional)
```

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-notes-app.git
cd ai-notes-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file at the root of your project:

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_gemini_api_key
```

### 4. Run the development server

```bash
npm run dev
```

Then visit: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

---

## 🔧 Environment Variables

| Variable         | Description                         |
|------------------|-------------------------------------|
| `MONGODB_URI`    | Your MongoDB Atlas connection URI   |
| `GEMINI_API_KEY` | Your Google Gemini API key          |

---

## ✅ Deployment on Vercel

Already deployed at:  
🔗 [https://ai-notes-three-red.vercel.app/dashboard](https://ai-notes-three-red.vercel.app/dashboard)

To deploy your own:

1. Push the project to GitHub
2. Import the repo into [Vercel](https://vercel.com/)
3. Add the same environment variables (`.env.local`) to your Vercel project settings
4. Click "Deploy"

---

## ⚙️ Current Limitations

- No user authentication (single-user mode)
- No markdown or rich text editing (yet)
- Notes are visible only to the app owner (no sharing)

---

## 🧪 Roadmap / TODO

- [ ] Add login/signup (NextAuth, Clerk, etc.)
- [ ] Rich text or markdown editor
- [ ] Export notes to PDF / Markdown
- [ ] Dark mode toggle
- [ ] Public sharing of notes

---

## 🧑‍💻 Author

Built with ❤️ by **Perfecto Cayabyab**  
🔗 [https://ai-notes-three-red.vercel.app/dashboard](https://ai-notes-three-red.vercel.app/dashboard)

---

## 📄 License

MIT License — free to use, modify, and share.
