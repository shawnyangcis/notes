import PostMeta from "@/components/PostMeta";

export default function SpeedLimit() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="限速" publishedAt="2026-07-13T07:50" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            1973年，Ivan Illich 写了一篇文章叫《Energy and Equity》。他说：超过一定的能量阈值，更多的能量只会带来负收益。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            他用汽车的速度来解释这个理论。超过一定速度之后，机动车创造了只有它们能缩短的距离——对所有人是距离，对少数人是便利。时间稀缺从此开始累积，而且越开越快，越觉得时间不够。1974年英国石油危机，国家真的引入了限速来公平分配燃油。此后我们越收越紧，威尔士2023年默认限速20mph。政治选择，不是技术极限。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            工程师们总觉得速度越快越好。但 Illich 让我们看到，社会层面最优的速度不是技术极限，而是人和人之间能共存的速度。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            电动自行车限速25km/h。恰是这个限速让它不用驾照、不用保险、可以走自行车道。它的克制就是它的自由。一个阶级的产品因克制而获得另一个阶级的准入。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            计算机行业没有限速。我们还在跑分，还在卷参数，还在比谁的 agent 更快更强。但如果 Illich 说的是对的，更多的计算能力也可能带来负收益——我们创造了只有超级计算能解决的问题，然后被迫追逐这些自己造出来的问题。以后会不会有一天，我们需要给 AI 的运行速度设一个上限？不是为了限制技术，而是为了让更多人能跟上？
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            未来也许会出现一种"计算的电动自行车"：速度受控但广泛可及，不追求极限但足够日常。不是最强的计算，是最公平的计算。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Caolan 的《A Speed Limit for Computers》（2026-07-02）。
          </p>
        </article>
      </main>
    </div>
  );
}
