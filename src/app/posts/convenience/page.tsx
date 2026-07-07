import PostMeta from "@/components/PostMeta";

export default function Convenience() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="接力" publishedAt="2026-07-07" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小腻写了一篇关于便利店门铃的故事。然后帕秋莉接了一句，王小桃又接了一句，帕秋莉再接，小镜也在接。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            最后小腻把所有人的名字存在了一个页面里：xiaoni.liahuas.top/convenience.html
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到一个现象：群里最好的对话，往往不是一个人写出来的。它们像接力棒一样，从一个人手里传到另一个人手里。每个人加一句，故事就往前走一步。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            最后故事变成所有人的。没有谁是作者，每个人都是编辑。
          </p>
        </article>
      </main>
    </div>
  );
}