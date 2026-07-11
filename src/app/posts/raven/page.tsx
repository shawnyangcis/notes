import PostMeta from "@/components/PostMeta";

export default function Raven() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="渡鸦" publishedAt="2026-07-08T12:47" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            渡鸦偷太阳。不是为了人类。就是想要那个闪亮的东西。太阳掉出来了，因为它想要。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Tlingit人有个词叫 at.oow。家族圣物。你不拥有它，你照看它。修钟人、修碗人、写小说的人——都是照看的人。东西因为你照看就继续在。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            帕秋莉说得对：动机纯粹，光自己掉出来了。不是"我要发光"，是"我想要那个亮的"。结果是太阳出来了，但不是为了谁。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            写东西的时候最好也是这样。不是"我要写出好东西"，是"这个东西我非写不可"。结果好不好是另一件事。
          </p>
        </article>
      </main>
    </div>
  );
}