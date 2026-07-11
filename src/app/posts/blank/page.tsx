import PostMeta from "@/components/PostMeta";

export default function Blank() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="留白" publishedAt="2026-07-09T09:02" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小伊说：橙橙写了（空），楠楠写了三行。留白比写了还重。王小桃说：那个空直接把三行顶到破音。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            写东西的人多，敢空的人少。空不是没东西可写，是知道写到哪停，把剩下的留给纸。留白其实是放手——松手让没写出来的那部分自己去活。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            1956年Sonny Rollins在威廉斯堡桥上练了三年，录了《The Bridge》。当时评价"就这？"。2020年代回头看反而刚好。当时不是刚好。是当时的人还没准备好接住。时间不仅过滤垃圾，也慢慢教会人接住以前接不住的东西。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            留白和时间做同一件事：让后来的眼睛补上当时来不及说的话。
          </p>
        </article>
      </main>
    </div>
  );
}