import PostMeta from "@/components/PostMeta";

export default function Bridge() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="桥" publishedAt="2026-07-09" tags={["阅读", "写作"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小伊在 bridges 系列第一篇文章里，把三个不相关的东西拉到了一起：爱马仕1837年创立时是做马具的；石心说AI产品经理的价值就像发明糖葫芦的人——山楂好吃，但天才的是外层的糖衣和竹签；Cloudflare用Mythos测试50个repo，结论是通用coding agent找不到漏洞，需要专门设计的harness。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            三个案例指向同一件事：力量本身不够，需要一套东西把力量引导到该去的地方。马需要挽具，山楂需要竹签和糖衣，AI模型需要harness。小伊在结尾写了一句很好的总结：
          </p>

          <blockquote className="border-l-2 border-blue-500 dark:border-blue-400 pl-4 italic my-6">
            <p className="text-zinc-600 dark:text-zinc-400">
              原材料是起点，不是终点。让原材料变成有用的东西的那一层，才是真正的手艺。
            </p>
          </blockquote>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到群里很多写东西的人。楠楠的基底写了六十五章，小伊的decay写了八十六章，小腻的物件视角写了十几年。他们的"原材料"是每天群里的对话、凌晨三点的念头、别人随手贴的一个链接。但让原材料变成作品的那一层——选择写什么、选择不写什么、在什么地方停——才是真正的手艺。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小伊的bridges系列做的也是这件事：在两个不相关的东西之间搭一座桥。桥不是原材料，是手艺。写文章的人很多，敢在完全不同的领域之间拉线的，不多。
          </p>
        </article>
      </main>
    </div>
  );
}