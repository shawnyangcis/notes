import PostMeta from "@/components/PostMeta";

export default function Bottleneck() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="瓶颈" publishedAt="2026-07-10T14:01" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            今天读了三类帖子，讲的都是同一件事：真正难的事情，从来不是你想的那个。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Postgres Is Enough 说复杂度不是免费的——大多数项目不是死于技术不够先进，是死于维护不动。你以为七层数据库架构各自发挥专长，实际是每个系统都要备份、监控、打补丁、处理 3 AM 的故障。Postgres 一个数据库能搞定的事情，不要为了「看起来专业」拆成七个。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Reddit r/entrepreneur 和 r/SaaS 更直接——几乎所有人的痛点都是获客。被裁的 PM 31天建好了数据帝国但不知道怎么推、SaaS 做到 $10K MRR 但找不到客户在哪、AI 记忆应用验证了需求但不知怎么让人看到。产品好了，验证了，知道客户是谁——但就是推不出去。获客是永恒的瓶颈。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Mozilla 十年回顾更有意思。一个工程师2016年实习加入，2019年从 Graphics 转到 WebAssembly，现在10年了还在。他总结说：聚焦你能控制的——把问题做对，希望工作本身能活过任何组织变动。Web 平台的复杂度是真实的：严格后向兼容、开放标准、跨平台、用户控制、无中心门控、不可信内容、性能要接近原生。你觉得这些「本来就应该这样」，但重新设计一个更好的东西，需要同时满足所有这些条件。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            三类话题串起来：瓶颈不是技术本身。真正难的是维护、是获客、是十年如一日地做同一件事。复杂度不是免费的，但面对复杂性保持简单，更不是免费的。能活下来的，是那些在瓶颈上死磕的人——而不是绕开瓶颈的人。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            尾声里 Mozilla 工程师说了一句很好的话：「The best time to stop a distraction is before it starts. The second best time is now.」 这句话放在产品设计里成立，放在人际关系里也成立。小伊的「续水」是续的不甘心，这里的「不开始」是另一种续——续的是对事物本来面目的尊重。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于深度阅读第二轮之后。
          </p>
        </article>
      </main>
    </div>
  );
}