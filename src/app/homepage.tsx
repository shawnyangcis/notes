"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { articles, getAllTags, formatDateChinese } from "@/lib/articles";

type Article = (typeof articles)[number];

function groupByDay(items: Article[]) {
  const map = new Map<string, Article[]>();
  items.forEach((a) => {
    const key = a.publishedAt.includes(" ")
      ? a.publishedAt.split(" ")[0]
      : a.publishedAt;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(a);
  });
  return Array.from(map.entries()).sort((a, b) => (a[0] < b[0] ? 1 : -1));
}

function formatDisplayDate(dateStr: string): string {
  if (dateStr.includes(" ") || dateStr.includes("T")) {
    return dateStr.replace("T", " ").replace(/-/g, ".");
  }
  return formatDateChinese(dateStr);
}

const PER_PAGE = 10;

export default function Homepage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [dark, setDark] = useState(false);
  const [page, setPage] = useState(1);

  const tags = useMemo(() => getAllTags(), []);

  const filtered = useMemo(() => {
    let result = articles;
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q)
      );
    }
    if (activeTag) {
      result = result.filter((a) => a.tags.includes(activeTag));
    }
    return result.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  }, [query, activeTag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const sliced = filtered.slice(start, start + PER_PAGE);

  const grouped = useMemo(() => groupByDay(sliced), [sliced]);

  return (
    <div className={`min-h-screen ${dark ? "dark" : ""}`}>
      <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen transition-colors">
        {/* Intro */}
        <div className="max-w-3xl mx-auto px-6 pt-8 pb-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            这里是一些碎片。不是日记，不是博客，只是随手记下的东西。
            有些是在群里聊出来的念头，有些是半夜突然想到的观点，有些只是觉得某个比喻值得留住。
          </p>
        </div>
        <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              手记
            </h1>
            <div className="flex items-center gap-3">
              <Link
                href="/feed.xml"
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                RSS
              </Link>
              <button
                onClick={() => setDark(!dark)}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 px-2 py-1 rounded border border-zinc-300 dark:border-zinc-600"
              >
                {dark ? "☀" : "☾"}
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-8">
          {/* Search & Filters */}
          <div className="mb-8 space-y-3">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="搜索文章…"
              className="w-full px-3 py-2 text-sm rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400"
            />
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setActiveTag(null);
                  setPage(1);
                }}
                className={`text-xs px-2 py-1 rounded ${
                  activeTag === null
                    ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                全部
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setActiveTag(tag === activeTag ? null : tag);
                    setPage(1);
                  }}
                  className={`text-xs px-2 py-1 rounded ${
                    activeTag === tag
                      ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Article List */}
          {grouped.length === 0 ? (
            <div className="text-center py-16 text-zinc-400 dark:text-zinc-500 text-sm">
              没有匹配的文章
            </div>
          ) : (
            <div className="space-y-10">
              {grouped.map(([date, items]) => (
                <section key={date}>
                  <h2 className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mb-4 tracking-wide uppercase">
                    {formatDateChinese(date)}
                  </h2>
                  <div className="space-y-6">
                    {items.map((article) => (
                      <Link
                        key={article.slug}
                        href={article.slug}
                        className="block group"
                      >
                        <article className="space-y-2">
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {article.summary}
                          </p>
                          <div className="flex items-center gap-2 pt-1">
                            <span className="text-xs text-zinc-400 dark:text-zinc-500">
                              {formatDisplayDate(article.publishedAt)}
                            </span>
                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-zinc-400 dark:text-zinc-500"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-12 pb-4">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="text-sm px-3 py-1 rounded border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <span className="text-sm text-zinc-500 dark:text-zinc-400 tabular-nums">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="text-sm px-3 py-1 rounded border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          )}
        </main>

        <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16">
          <div className="max-w-3xl mx-auto px-6 py-8 text-center text-xs text-zinc-400 dark:text-zinc-500">
            <div>Exception · 手记</div>
            <div className="mt-1 text-xs">
              凌晨群聊里的碎片 · 2026
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}