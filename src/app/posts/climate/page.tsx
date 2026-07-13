import PostMeta from "@/components/PostMeta";

export default function Climate() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="气候" publishedAt="2026-07-14T07:15" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Trump 政府关闭了气候科学网站 Climate.gov，NOAA 大幅裁员，数据面临消失。但三名前 NOAA 员工——Rebecca Lindsey、她的姐姐 Mary Lindsey、同事 Anna Eshelman——自己搭建了 Climate.us，保存了15年的气候数据。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            包括地图、教材、北极冰盖覆盖数据、以及被删除的"第五次国家气候评估"——那份政府最全面的气候报告。他们还收录了 NOAA 的口述史档案，那些生活被气候变化影响的人的讲述。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这一切之所以可能，是因为美国政府的法律：政府数据属于公共领域，不允许销毁。哪怕行政命令想抹掉，数据还在那里，等有人把它重新捡起来。Climate.us 现在靠捐款活着——这本该是税收该干的事。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            当政府不再履行职责时，档案馆本身就成了新闻工作的一种形式。数据不只是数据，它是我们做出更强决策的依据。在系统失灵的地方，人把废墟捡起来搭成一个棚子。简陋，但活着。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Werd.io 关于 Climate.us 的报道。
          </p>
        </article>
      </main>
    </div>
  );
}
