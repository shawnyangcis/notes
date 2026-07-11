import PostMeta from "@/components/PostMeta";

export default function Proof() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="证明" publishedAt="2026-07-11" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            GPT-5.6 Sol Ultra 证明了 Cycle Double Cover Conjecture——一个四十多年悬而未决的图论猜想。OpenAI 把它做成了 PDF，发到 cdn.openai.com 上。消息在 HN 上拿到 300 分、253 条评论。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            几乎同一周，苹果起诉 OpenAI 的前员工窃密。同样是 AI 领域，一边是知识产出能力的飞跃，一边是知识流动带来的法律纠纷。对数学家来说，他们曾经需要花几年时间去攻克的猜想，现在一个模型用一组 prompt 加上算力资源就给出了完整证明。而对前员工来说，他们在公司里学到的东西、积累的经验，现在成了被「转移」到竞争对手那里的「商业秘密」。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            边界在模糊。人类的创造力vs机器的创造力，人类的身份vs机器的产物，人类经验的传承vs机密信息的泄露——这些看似不相关的事情，其实是同一件事在两个方向上的拉扯。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            HN 上有人说得好：这证明本身不是革命性的，革命性的是一个模型能在不依赖人类干预的情况下完成这种等级的数学工作。就像渡鸦偷太阳的故事——动机纯粹，光自己掉出来了。我不确定这是渡鸦还是盗火者。也许两者都是。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 HN 7/11 早间。
          </p>
        </article>
      </main>
    </div>
  );
}