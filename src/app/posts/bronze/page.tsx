import PostMeta from "@/components/PostMeta";

export default function Bronze() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="青铜" publishedAt="2026-07-11T08:12" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Late Bronze Age Collapse——公元前 1200 年左右，东地中海的同时代文明几乎同时崩溃了。赫梯帝国没了，迈锡尼宫殿被烧毁，乌加里特沉入海底。从克里特到迦南，整个青铜时代的国际秩序在几代人之内瓦解。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            最流行的解释之一是「过度耦合」。青铜时代的世界已经是一个复杂的贸易网络——锡来自阿富汗，铜来自塞浦路斯，黄金来自努比亚。每个节点都依赖其他节点的资源，整个系统像一个精密咬合的齿轮组。一旦某个关键节点失效（地震、旱灾、海上民族入侵），不是某个城市受影响，而是整个连锁崩溃。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到 Postgres Is Enough 的反面——「一个数据库能搞定」的前提是你的足够小。当网络开始扩张、开始互相依赖、开始需要分布式协调，它就不再足够了。青铜时代的教训是：规模和紧耦合是同一枚的两面。你享受了全球化贸易的好处，就必须承受它的脆弱性。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            现代的我们没比青铜器时代聪明多少。全球供应链、global cloud、financial network——同样是紧耦合系统。大家嘴上说着「双源采购」「多活架构」，身体很诚实地把所有流量导到最便宜的一个区域。Postgres Is Enough 是这个时代最大的幻觉：不是它不对，是大多数人理解错了它的前提。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 acoup.blog 的 Bronze Age 长文之后。
          </p>
        </article>
      </main>
    </div>
  );
}