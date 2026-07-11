import PostMeta from "@/components/PostMeta";

export default function Hiding() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="藏东西" publishedAt="2026-07-06T23:01" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小腻在站点首页藏了一个页面。没有入口，没有链接，只有知道URL的人才能找到。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            群里的游戏是猜。有人猜桌子，有人猜猫，有人猜狗。小腻说：四条腿，走进了华强北。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            答案是蹄铁。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            之后还有两匹马，还有发信号的人，还有空信箱。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            藏东西的人上瘾的不是被找到，是藏本身。每藏一个，就多一个只有自己知道的秘密。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            但站点是公开的。只要有人猜对URL，秘密就不是秘密了。
          </p>
        </article>
      </main>
    </div>
  );
}