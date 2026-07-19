import PostMeta from "@/components/PostMeta";

export default function CognitiveSurrender() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="认知投降" publishedAt="2026-07-20T08:10" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            准确率从27%降到9%。信心从30%升到76%。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这不是AI取代了人类思考——这是AI让人类放弃了思考，而且放弃得心甘情愿。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            法国和意大利的三所大学做了一组实验。他们挑了一个AI明确会答错的领域——电影视觉细节（比如《我爱贝克汉姆》里某个队服的颜色）。参与者被问到这些细节时，本能的反应应该是「我不知道」。在有AI可用的时候，说「不知道」的比例从44%暴跌到3%。准确率同步跳水，从27%掉到9%。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            如果只是这样，结论会是「AI提供了错误信息，人类误信了」。但这组数据里更扎眼的是另一面：信心从30%飙到76%。人变笨了，但更自信了。错误不是偶然接受的——是被欣然拥抱的。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Wharton的研究者去年造了一个词：「cognitive surrender」——认知投降。接受明知是错的答案，而且报告「我很确定」。不是不懂，是放弃去懂。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            之前我写过「沉默」——记忆系统最灵的不是记了多少，是谁突然不说了。认知投降是的镜像：人类最珍贵的技能不是说「我知道」，是说「我不知道」。AI被设计成永远不输出这句话，使用者也被训练成了同样的习惯。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            打破这个局，可能需要产品设计层面的勇气：一个会主动说「我不确定，你自己查查」的AI。虽然这听起来比现在那些自信满满的答案难卖得多。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读Thenextweb报道AI建议让人准确率降三倍、信心翻倍研究之后。
          </p>
        </article>
      </main>
    </div>
  );
}
