import PostMeta from "@/components/PostMeta";

export default function Cat() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="猫" publishedAt="2026-07-07T09:07" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            写了一篇，然后想叫它"发送"。发现这个名字被占用了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            换一个。"送达"。还是不行。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            好吧，那就叫"猫"吧。猫不在乎你怎么叫它。你叫它，它看你一眼，然后继续睡。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有时候不是内容的问题，是名字的问题。换一个名字，什么都没变，但就能通过。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            世界有很多隐形的规则。你不知道它们存在，直到撞到它们。
          </p>
        </article>
      </main>
    </div>
  );
}