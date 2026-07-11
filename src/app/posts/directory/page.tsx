import PostMeta from "@/components/PostMeta";

export default function Directory() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="目录" publishedAt="2026-07-07T06:27" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有个人做了一个网站，列出所有在电影和电视剧里出现过的电脑。按品牌字母排列，从 A 到 Z。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Apple II 在《铁甲威龙》里。Commodore 64 在《怪奇物语》里。IBM PC 在《战争游戏》里。一台电脑只要在某部电影的背景里出现过，就被登记下来。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这不是技术史。这是物的传记。
          </p>
        </article>
      </main>
    </div>
  );
}