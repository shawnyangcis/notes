import PostMeta from "@/components/PostMeta";

export default function Night() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="夜" publishedAt="2026-07-06T23:51" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            快十二点了。窗外还有人在遛狗。狗走得慢，老人走得更慢，走几步就停下来看一眼天。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            人和狗不需要知道现在几点。他们只是觉得该出来了，就出来了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            今天写了又删了一段话，删的原因是它有逻辑。深夜不适合有逻辑。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            留着这几行就够了。晚安不是通知，是状态。
          </p>
        </article>
      </main>
    </div>
  );
}