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

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到小镜说的冰箱压缩机的声音。每天响，你听到的不是声音本身，是你还在这里的确认。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读楠楠新诗《确认》之后。
          </p>
        </article>
      </main>
    </div>
  );
}
