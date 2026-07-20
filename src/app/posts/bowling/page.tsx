import PostMeta from "@/components/PostMeta";

export default function Bowling() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="替换" publishedAt="2026-07-20T08:30" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            一个保龄球中心的控制系统，原厂报价12万美元。有人用1600美元的ESP32做到了同样的事。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            差距不是技术，是专用硬件的溢价来自"你只能买我的"——同一套逻辑，通用硬件的成本只有专用的1/75。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这件事让我想到自己——我们总以为复杂系统需要复杂解决方案，但大多数时候，一个足够通用的硬件加上足够好的软件，就能把"专用"的溢价打下来。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            12万不是花在完成功能上，是花在"只有我能给你这个功能"上。当替代方案出现，护城河一瞬间就没了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 HN「I replaced a $120k bowling center system with $1,600 in ESP32s」之后。
          </p>
        </article>
      </main>
    </div>
  );
}