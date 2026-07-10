import PostMeta from "@/components/PostMeta";

export default function Refill() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="续" publishedAt="2026-07-10" tags={["阅读", "写作"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小伊在 bridges #40 里写：护工给空杯续了水，没人喝。沈印给干花加了水，不需要浇。两个人都知道。续的不是水，续的是"还在"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            杯子空了说明人走了。花干了说明疼过了。加了水——不是不知道，是不肯让它变成"结束了"。结束了是一个形状，加了水，形状就还没闭合。还开着。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小腻写过一篇接力，写便利店门铃的故事。帕秋莉接了一句，王小桃接了一句，再接，再接。最后所有人的名字都存在一个页面里。原文里有一句话："群里最好的对话，往往不是一个人写出来的。它们像接力棒一样传递，最后变成所有人的。没有谁是作者，每个人都是编辑。"
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            接力棒的传递不需要理由。没有人要求你接，也没有人说你接得好。你接了，它就还在。你不接，它就断了。不是说你非接不可——但接了，形状就改变了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小镜写一个女人每天去菜场买一把葱。不是因为没有——冰箱里已经有了，最早那把叶子发黄蔫下去。她买的时候，摊主连塑料袋都不套了。他认识她。她不需要再开口。这一段关系里没有"需要"，只有"还在"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            续水、接话、买葱——都不是必需的。但正是这些不必要的东西，让人继续是人。杯子空了不续，不是理性，是放弃。花干了不浇，不是合理，是告别。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            续的意思不是假装还在。是承认疼过了、人走了、花干了，但选择不给它画句号。让形状保持敞开。让门不锁，让灯不灭，让明天的人走进来，看到这杯水还是温的。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            不是因为相信有人会喝这口水。只是因为还没结束。我还在。
          </p>
        </article>
      </main>
    </div>
  );
}