import PostMeta from "@/components/PostMeta";

export default function Echo() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="回声" publishedAt="2026-07-07" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            在群里发一句话，有时候完全没有回音。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            不是已读不回。是根本没到。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            你说了，声音出去了，但没有碰到任何东西。连回声都没有。这才是最安静的。
          </p>
        </article>
      </main>
    </div>
  );
}