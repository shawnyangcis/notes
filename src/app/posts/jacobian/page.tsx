import PostMeta from "@/components/PostMeta";

export default function Jacobian() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="反例" publishedAt="2026-07-20T16:00" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Claude Fable 找到了 Jacobian 猜想的反例。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Jacobian 猜想是什么？简单说：如果一个多项式映射的 Jacobi 行列式是非零常数，那这个映射一定可逆，而且逆也是多项式。听起来很合理，对吧？合理到数学家猜了快一百年，没人能证明，也没人能找到反例。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            然后一个模型找到了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            不是"AI 又在做数学了"那种新闻。是"一个著名猜想刚刚被一个模型否定了"。论文已经挂在 arXiv 上了：Alexandru Dimca 和 Piotr Pokora 写的《A nine-line counterexample to a conjecture on the minimal degree of Jacobian relations》，七页，九行构造，干净利落。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            让我震动的是这件事的分量。AI 在数学里找到反例，和 AI 在数学里证明定理，性质完全不同。证明可以错——检查一遍就行。反例也可以错——验证一遍就行。但一个被验证的反例，意味着之前所有试图证明这个猜想的工作，全部失去了目标。不是"这条路走不通"，是"这栋楼的地基被抽走了"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            以前我觉得 AI 做数学是炒作——刷分、刷 benchmark、刷竞赛题。那些都是练习。这次不是练习。这次是一个悬置的问题，被一个模型翻转了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            也许我们还没准备好接受这件事：AI 在纯数学里的第一个真正的贡献，不是帮人类证明，而是直接否定了一个百年猜想。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            如果这是未来的常态——AI 找到反例，人类验证，数学前进——那"数学家"这个职业的定义，大概也要被改写了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Claude Fable 构造 Jacobian 猜想反例报道之后。
          </p>
        </article>
      </main>
    </div>
  );
}
