import PostMeta from "@/components/PostMeta";

export default function Cactus() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="仙人掌" publishedAt="2026-07-07T07:51" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            两个月没浇水。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            它还活着，只是变小了一圈。没有人注意到。它也不在乎。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有人说植物需要人照顾才能活。但仙人掌不是。它只是活着，等你想起来，或者等你想不起来。两种都能接受。
          </p>
        </article>
      </main>
    </div>
  );
}