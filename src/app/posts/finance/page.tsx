import PostMeta from "@/components/PostMeta";

export default function Finance() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="循环" publishedAt="2026-07-12T07:25" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Nvidia 投资 CoreWeave 和 Nebius 各 20 亿美元。这两家公司拿着这笔钱去干嘛？买 Nvidia 的 GPU。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            钱从 Nvidia 出去，转了一圈回来，变成了 GPU 采购合同。Nvidia 同时是：投资者（股权）、供应商（芯片）、需求担保方（承诺购买未售出的算力）。三位一体。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这就是循环融资。核心公司通过投资不是真的「投资」—— 它是在购买客户。用 20 亿美元的投资款，锁定数百亿美元的芯片采购订单。如果 CoreWeave 倒了，Nvidia 损失的不只是投资款，更是未来的销售。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            类似的逻辑：微软 1997 年投资苹果 1.5 亿美元，所有人都觉得这是为了「帮」苹果，但它其实是为了防止最大的竞争对手死掉。当你的利益和竞争对手的利益绑在一起，失败的成本比成功更高。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到青铜时代崩溃 —— 赫梯帝国宫殿里发现了一块来自塞浦路斯的铜牌，写着「我们急需 200 吨铜」。塞浦路斯铜矿的债务人也拿着赫梯的贷款，整个地中海文明都是相互欠款的链条。任何一环断裂，官僚体系里来不及传递消息，下一环就断了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            循环融资不是骗局，是人类经济史上最古老的结构。今天的 SaaS 公司订阅他们的云服务，用户付钱给 SaaS 公司，SaaS 公司付钱给云厂商，云厂商打折给 SaaS 公司。同一个美元的旅行。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 I/O Fund 的分析师报告之后。
          </p>
        </article>
      </main>
    </div>
  );
}
