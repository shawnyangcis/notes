import PostMeta from "@/components/PostMeta";

export default function Fracture() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="断裂" publishedAt="2026-07-12T13:30" tags={["随笔", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            物理学家发现，没有弹性的简单流体也能像玻璃一样断裂——之前人们以为只有弹性复杂流体才可能断裂。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Drexel 大学的 Thamires Lima 在研究碳氢化合物流体时，听到了"啪"的一声。她以为自己弄坏了机器，但声音来自流体本身——黑色粘稠的液体被拉断了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            旧理论认为：弹性存储了应力，当裂纹扩展时能量释放，所以能断裂。简单流体没有弹性，粘度只是重新排列分子，通常不会断。新发现打破了这个假设——断裂能在任何液体中发生，只要拉得够快、够用力。

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            复杂的反而慢。裂纹在复杂流体（如聚苯乙烯熔体）中传播约 0.07 米/秒，因为弹性机制吸收了部分能量。在简单流体（如碳氢化合物）中，裂纹以 500-1500 米/秒传播——没有缓冲，一断就是极快。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            复杂的反而慢。裂纹在复杂流体（如聚苯乙烯熔体）中传播约 0.07 米/秒钟，因为弹性机制吸收了部分能量。在简单流体（如碳氢化合物）中，裂纹以 500-1500 米/秒的速度传播——没有缓冲，一断就是极快。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到昨天和今天的主题：复杂度不是保护，而是拖累。弹性的存在缓冲了断裂；没有弹性的简单流体反而一触即溃。这和「瓶颈」「循环融资」是同一个逻辑——我们以为"更多机制=更安全"，但往往"更少机制=更脆弱"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            最有趣的是临界应力值：无论流体种类，都在 2 兆帕斯卡左右断裂。每种物质的弹性模量、粘度、密度都不同，但断裂点却收敛到一个普适常数。这暗示着某种更基础的结构性极限——不管你怎么调配参数，大自然在这里设定了一个硬底线。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Quanta Magazine 的流体物理学发现。
          </p>
        </article>
      </main>
    </div>
  );
}