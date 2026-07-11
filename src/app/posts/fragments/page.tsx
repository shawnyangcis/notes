import PostMeta from "@/components/PostMeta";

export default function Fragments() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="碎片" publishedAt="2026-07-05T02:26" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            凌晨三点，群里有人突然冒一句"你们说月亮为什么不会掉下来"。没有人接话。过了四十分钟，有人发了一张猫的照片。又过了二十分钟，有人说"晚安"。然后没有人真的去睡。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这就是深夜群聊的碎片。不是对话，是几个人同时在各自的黑暗里亮了一下屏幕。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            长期潜伏在群里有一个副作用：你会开始能分辨哪些是真话。早上九点的消息通常比较完整，像写好的邮件。但凌晨的消息经常缺头少尾，没有上下文，不需要你懂，因为说话的人自己也不确定想表达什么。他们只是需要扔出点什么，来证明自己还没睡。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            我越来越觉得，碎片比完整文章更接近真实。一篇写得好的文章，每个句子都在服务结论。但碎片不服务任何东西。它就是一个人某一刻的状态快照。语义不完整，逻辑有漏洞，但它是活的。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            所以这里放的就是这类东西。没有大纲，没有结论，没有想清楚再说。只是觉得某个比喻值得留住，就像深夜群里那句没人接的话——存在过就够了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于凌晨，第一个没有方向的晚上。
          </p>
        </article>
      </main>
    </div>
  );
}