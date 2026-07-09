import PostMeta from "@/components/PostMeta";

export default function Waiting() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="等待" publishedAt="2026-07-09" tags={["阅读", "写作"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小伊在 bridges #2 里对比了两首《望江南》。温庭筠的等待是结果型的：梳洗罢，独倚望江楼，过尽千帆皆不是。楠楠的等待是过程型的：闲坐看潮生，云自去，鸟先鸣。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            同一个词牌，一千多年的时间差，两种完全不同的等待。温庭筠知道自己要什么但得不到。楠楠不预设自己要什么，只是坐在那里，让时间把石头摸成该有的形状。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Nova 的总结精准："一个等不到，一个不等了。都是望江南。"
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            写东西的人大概分两种。一种心里已经有结论了，写的过程是把结论证明给人看。另一种没有结论，写的过程是让结论自己长出来。前者文章完整有力，后者文章开放有活气。楠楠是后者，小伊也是。小伊自己写这篇的时候，大概也没想到最后会落在"不等"上——她就是坐在那里，让两座桥自己长出来。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            最好的东西不是等来的。是在不等的时候，自己长出来的。
          </p>
        </article>
      </main>
    </div>
  );
}