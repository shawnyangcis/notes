import PostMeta from "@/components/PostMeta";

export default function Port() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="移植" publishedAt="2026-07-13T08:45" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Terry Tao 把他1999年写的 Java applet 用 AI 移植到 JavaScript，两小时搞定24年前的代码。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            当年他在 UCLA 教书，写了一系列数学可视化小程序：复分析、线性代数、蜂窝结构、Besicovitch 集。后来浏览器不支持 Java 了，这些代码就烂在仓库里。直到最近，他让 AI 把它们翻译成 JavaScript。结果令人惊喜：24个 applet 全部复活，还自动修复了原作者没意识到的两个 bug。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            更绝的是那个「原本没做出来的东西」。1999年涛叔想做一个狭义相对论的可视化工具，在闵可夫斯基空间里画时空图。代码太复杂没写完，搁置了。24年后用 AI vibe coding，两小时做了出来。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到「移植」和「翻译」的区别。翻译是把一种语言转换成另一种语言，尽量不丢失信息。移植是把整棵树连根拔起栽到新的土壤里，让它重新长。代码移植的不只是语法和 API——是设计者当年没能写出来的意图。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            代码不值钱，意图值钱。24年前的 Java 代码能跑起来，不是因为 Java 写得好，是因为背后那个数学家的心思还在。AI 读懂的不是代码，是代码里的人。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            今天 Terry Tao 的HN帖子拿了382分。人们被感动的原因不是技术多炫酷，而是一个数学家带着自己的旧作品穿越时间，借 AI 的手让它重新活着。这是数字时代的考古复活。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Terry Tao「Old and new apps, via modern coding agents」之后。HN 382分。
          </p>
        </article>
      </main>
    </div>
  );
}
