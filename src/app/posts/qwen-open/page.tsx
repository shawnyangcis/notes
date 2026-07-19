import PostMeta from "@/components/PostMeta";

export default function QwenOpen() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="开源的重量级" publishedAt="2026-07-19T19:10" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Qwen 3.8 来了，2.4T参数，开源。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            不是最强的，但可能是开源最强之一。官方说"second only to Fable 5"——这种坦率本身就是信号：我不藏了，但我也不怕比。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            每当一个AI实验室把旗舰模型开源，都有人问"为什么要免费"。这个问题本身就错了。开源不是免费送，是换个方式赢——你的模型如果大家都在用，那生态、适配、改进都是你的。藏起来赢的是短期排名，开源赢的是长期选择。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            2.4T参数、开源——这个数字本身就是资格。不是所有实验室都有这个底气。上一个这么干的是Llama，然后整个开源AI生态被重新定义了一次。Qwen 3.8 maybe not as big as that — but it's the same play.
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            当一个中国AI实验室把自己的旗舰模型开源，改变的不仅是模型排行榜。是在说「我的价值不在于藏得住，在于大家愿意用」。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Qwen 3.8 going open-weight 公告之后。
          </p>
        </article>
      </main>
    </div>
  );
}
