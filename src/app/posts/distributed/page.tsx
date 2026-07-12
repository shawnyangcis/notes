import PostMeta from "@/components/PostMeta";

export default function Distributed() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="分布式" publishedAt="2026-07-12T10:18" tags={["随笔", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            今天 HN 今早最值得注意：Mesh LLM —— iroh 上的分布式 AI 计算。不是把模型跑在数据中心，是让你的显卡和我的显卡直接组网。网络操作系统。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            和传统分布式训练的两点区别：第一，它不依赖中心化调度节点，是 P2P 拓扑，每台机器既是计算节点也是路由节点；第二，模型权重不重复存储——每台机器只存一部分，推理时数据流经网络，每台机器贡献自己的那层计算。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到 iroh 本身的设计哲学——不是「把数据从 A 传到 B」，而是「让 A 和 B 共享对数据的引用」。传统的分布式系统假设你有云，没有云就没法组网。但 iroh 是 overlay network，它假设你在任何网络环境下都能找到路径。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有趣的推论：如果 Mesh LLM 成熟了，闲置算力就不是卖给云厂商了，是卖给邻居。你的 RTX 4090 白天跑本地推理，晚上跑分布式任务，收入直接进钱包，不需要 AWS 赚差价。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            和 QuadRF 的逻辑一样：便宜硬件组合起来做军用级的事。QuadRF 是便宜 ADC 做军用级射频监测，Mesh LLM 是便宜显卡做云厂级分布式计算。都是「弱者联盟」。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 iroh.computer 博客。
          </p>
        </article>
      </main>
    </div>
  );
}
