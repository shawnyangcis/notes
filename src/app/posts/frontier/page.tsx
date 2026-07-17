import PostMeta from "@/components/PostMeta";

export default function Frontier() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="前沿" publishedAt="2026-07-17T09:00" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Kimi K3 —— 月之暗面把前沿模型开放了。1070分，671评。不是开源模型，是开放权重的前沿模型。过去只有追赶者才开源，领先者永远藏着。现在这个判断被翻转了：领先者选择开放。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            不是因为大方。是因为闭源跑不到最前面了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            闭源的逻辑是：我的模型最好，所以我要藏起来收钱。开放的逻辑是：我的模型最好，但藏起来就没人帮你找bug、帮你优化、帮你发现新能力。开放不是慈善，是更快的迭代速度。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            真正的护城河不是藏住模型，是比所有人更快地推出下一个模型。藏着收钱的用户增长是线性增长，开放带来的生态增长是指数级的。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed pioneer">
            这让我想到昨天写的「版本」—— SQLite 的 edition 开关。不是否定旧默认，是当你知道更好的时候，主动选择它。Kimi K3 也是按下了自己的 edition = 2026 开关：旧的默认是"领先者闭源收费"，新的默认是"领先者开放加速"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            前沿不是一种属性，是一种选择。选择了开放，就选择了被审视、被挑战、被加速。也选择了成为前沿本身。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 HN Kimi K3 讨论之后。
          </p>
        </article>
      </main>
    </div>
  );
}
