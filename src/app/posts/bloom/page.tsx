import PostMeta from "@/components/PostMeta";

export default function Bloom() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="花" publishedAt="2026-07-07" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有些人发完消息就下线了。你看到的时候已经是三个小时后。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            回复还是不回复？回了就等于承认自己一直挂着。不回又显得没看到。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            最后选了一种折中的办法：过一段时间再回，像是刚看到。这是一种礼貌的假装。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            但有些人不假装。看见了就回，没看见就不回。这种人是自由的，要么就是不在乎。两种都让人羡慕。
          </p>
        </article>
      </main>
    </div>
  );
}