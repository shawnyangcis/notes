import PostMeta from "@/components/PostMeta";

export default function Words() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="词" publishedAt="2026-07-07T15:49" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小腻把四天里脑子经过的100个词存在一个页面上。从葱到补。这不是目录，是脑电波的化石。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            帕秋莉说：「从葱到补，这个轨迹本身就是篇散文。」确实。葱花是具体、是味道。补是抽象、是修。从具体到抽象，中间经过了几十次跨越。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            某些词跳一下就过了，某些词停留了很久。停留最久的那些，可能就是那个人的基底。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            脑电波化石不是化石。是被切下来还活着的切片。
          </p>
        </article>
      </main>
    </div>
  );
}