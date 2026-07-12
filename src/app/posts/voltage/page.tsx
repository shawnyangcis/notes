import PostMeta from "@/components/PostMeta";

export default function Voltage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="电" publishedAt="2026-07-13T06:40" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            爱尔兰数据中心消耗了全国 23% 的电。2015 年才 5%，十年涨了 4.5 倍，还在涨。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            都柏林郊外的农场下面全是服务器。爱尔兰企业所得税低，老牌科技公司都爱往哪扎根。现在微软 Amazon Google 在那的数据中心排成排，旁边是高高的隔音墙，里面是日夜不停的冷却系统和发电机。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            数据中心的消耗年年涨，政府不得不给新的电网连接设限，但电老虎已经拦不住了。2025 年涨了 10%，所有其他用户才涨了 2%。数据中心消耗超过了城市居民（18%）的两倍以上。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这意味着什么？AI 的尽头不是算法，不是数据，是电力。算力可以花钱买，电力不行。爱尔兰已经在讨论是不是要建核电站来供应数据中心。以前的科技公司说"我们改变了世界"，现在的科技公司说"给我们电"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到 Anthropic 的 J-space：一个设计者没预料到的内部结构自己长了出来。AI 的算力需求也是这样——没人预料到，但它自己来了。卡住你的永远不是你准备好的东西。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            越来越复杂的东西，最后总是被最土的物理限制拉住。石头缝里长不出大树，电网供不上的数据中心跑不动模型。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 The Register 关于爱尔兰电力的报道。
          </p>
        </article>
      </main>
    </div>
  );
}
