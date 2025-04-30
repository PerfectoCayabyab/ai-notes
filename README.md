# 🧠 AI Notes App

An intelligent note-taking app powered by **Next.js 15**, **Gemini AI (Google)**, and **MongoDB Atlas**. Write, summarize, tag, search, and manage your notes — all with a beautiful UI and serverless deployment on **Vercel**.

---

## 🚀 Features

- ✍️ Create and edit notes with AI-generated summaries (Gemini)
- 🧠 Server Actions + React Server Components (Next.js 15)
- 🏷️ Tagging and filtering support
- 🔍 Real-time search
- 🗑️ Delete notes instantly
- 💾 MongoDB Atlas database
- 🌐 Deployed on Vercel

---

## 📦 Tech Stack

- **Next.js 15 App Router**
- **React Server Components**
- **Tailwind CSS**
- **Google Gemini API (LLM)**
- **MongoDB Atlas (via Node driver)**
- **Vercel Hosting**

---

## 📄 Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/ai-notes
GEMINI_API_KEY=your_google_gemini_api_key
