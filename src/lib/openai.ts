import { summarizeNote } from "@/actions/summarizeNote";

export const getSummary = async (content: string) => {
    const summary = await summarizeNote(content);
    return summary;
  };