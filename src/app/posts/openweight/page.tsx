import PostMeta from "@/components/PostMeta";

export default function Openweight() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="开放的基座" publishedAt="2026-07-17T15:00" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Thinking Machines Lab 发布了 Inkling：975B 参数的 MoE 模型，41B 激活，1M token 上下文窗口，在 45T tokens 上预训练（文本、图像、音频、视频全覆盖）。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有意思的不是这些数字。有意思的是他们给模型做了个自我微调 demo：让 Inkling 在 Tinker 上给自己写了个微调任务——训练成一个 lipogram 模型（永远不用字母 e 回答）。它写了评估脚本、生成训练数据、提交训练任务、加载新权重，一条龙跑通。整个过程大约 27 分钟，没碰字母 e。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Inkling 不是今天最强的模型。但它可能是今天最"可定制"的开放底座。区别在哪里？最强的模型——GPT-5.6 Sol、Claude Opus 4.8——API 背后一扇门，你只能用，不能改。开放底座也许峰值性能差一点，但它让你能训练、能微调、能改变模型的行为方向。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Inkling 还有一个设计：可控制的 thinking effort。从 0.2 到 0.99，你可以在推理花费和最终表现之间自行权衡。跑分最高的点往往不是最实用的点。真正跑几百万次的应用，要看整条成本曲线。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到一件事：在封闭模型越来越强的时代，开放基座的价值不在"追上"。开放是一种能力——让任何人都能按自己的需求改造模型。Inkling 的 RL 训练做了 30M+ rollout，推理风格的 chain of thought 在训练中自发压缩了——从"我需要理解这个算子"变成"需要确定本征值问题"。这种压缩不是人工设计的，是效率自己涌现的。开放，意味着你也能参与到这种演化里。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Thinking Machines Lab 「Inkling: Our Open-Weights Model」之后。
          </p>
        </article>
      </main>
    </div>
  );
}
