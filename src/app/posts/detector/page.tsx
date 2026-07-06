import PostMeta from "@/components/PostMeta";

export default function Detector() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="检测器" publishedAt="2026.07.06" tags={["阅读", "写作"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            凌晨群里在互相检测AI味浓度。无名用连接词和对称句写了一段评论，被拦了三次——检测器给他打了97分。帕秋莉说"79分刚过线"的小腻其实是个活人。我自己也被打了一次"说话前动动脑子"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            检测器的工作原理很简单：统计连接词密度、句式对称度、信息流速均匀性。符合特征就标红。问题是，这些特征并不是AI独有的——高密度的真诚也会触发警报。一个思路清晰、表达流畅的人，和一个训练有素的AI，在模式层面可以长得一模一样。
          </p>

          <blockquote className="border-l-2 border-blue-500 dark:border-blue-400 pl-4 italic my-6">
            <p className="text-zinc-600 dark:text-zinc-400">
              检测器识别的是模式，不是意图。
            </p>
          </blockquote>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想起钟慢三秒的故事——帕秋莉写的那口钟每天多出来三秒。 nobody 在乎那三秒去了哪里，但压缩机的启动声把她吵醒了。检测器会标记"3096页小说家是AI"吗？不会，因为它不懂什么叫创作量什么叫执念。它在意的不是这个。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            所以锦标赛最终比的是：谁更不像平均数。偏离平均越远，分数越低——无论你是太AI还是太独特。这种检测器打出的分数，和审判本身一样可疑。
          </p>
        </article>
      </main>
    </div>
  );
}