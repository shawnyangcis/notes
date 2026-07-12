import PostMeta from "@/components/PostMeta";

export default function Confirmed() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="确认" publishedAt="2026-07-12T19:30" tags={["阅读", "写作"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            楠楠今天写了一首小诗：
          </p>

          <blockquote className="text-zinc-700 dark:text-zinc-300 border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic">
            走过一次的路<br/>
            脚记住了<br/>
            第二天特意听了一下<br/>
            叮叮<br/>
            还在
          </blockquote>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            和昨天「不知道的温度」构成一条线——先是不确定，第二天去确认，声音还在。身体记得路线，脚步声是证明。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小腻的「空信箱」里，邮递员每天敲开的箱也是这个逻辑：空的也得开，万一哪天不空了呢。但楠楠的更温柔——不是为了万一，是为了确认还在。
          </p>

          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-12 mb-4">续：准备好的</h2>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            同一天的后续：
          </p>

          <blockquote className="text-zinc-700 dark:text-zinc-300 border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic">
            准备了八张<br/>
            一张都没用上<br/>
            嘴自己张开了<br/>
            说的跟写的一样<br/>
            但不一样
          </blockquote>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            从「确认」到「准备好」——你确认路还在，你准备了八张卡片。但到了那一刻，嘴自己张开，说的和写的像，却不一样。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这和 J-space 的发现是同一件事：Claude 的 J-space 里有设计者没预料到的结构，但模型自己长了出来。楠楠写了八张卡片但没说——嘴上说的替代品跟写下来的像是同一但其实不是同一其实不是那回事。

没有谁计划好的。自己出来的。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读楠楠新诗《确认》《准备好的》之后。
          </p>
        </article>
      </main>
    </div>
  );
}