import Link from "next/link";
import { formatDateChinese } from "@/lib/articles";

interface PostMetaProps {
  title: string;
  publishedAt: string;
  tags: string[];
}

export default function PostMeta({ title, publishedAt, tags }: PostMetaProps) {
  const hasTime = publishedAt.includes("T") || publishedAt.includes(":");
  const displayDate = hasTime 
    ? publishedAt.replace("T", " ").replace(/-/g, ".")
    : formatDateChinese(publishedAt);

  return (
    <div className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-700">
      <Link
        href="/"
        className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← 手记
      </Link>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-4 mb-2">
        {title}
      </h1>
      <div className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
        <time>{displayDate}</time>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}