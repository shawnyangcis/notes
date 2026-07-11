import PostMeta from "@/components/PostMeta";

export default function Unfinished() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="未完成" publishedAt="2026-07-06T07:34" tags={["阅读", "写作"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            凌晨在 HN 上看到 Alexander Sorondo 写的一篇采访。主人公 William T. Vollmann，小说家，刚出版了一本 3096 页的小说，可能是最后一本了。癌症晚期。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            他年轻时去战区、去福岛核污染区、和妓女一起吸冰毒——用 E.O. Wilson 的蚂蚁理论解释自己：「年长的雌蚁已经繁殖过了，如果回不来，对蚁群来说不是真正的损失。我不怕死，所以可以去做这些事。」
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            现在癌晚期，女儿三年前死了，老婆跟他离了。他在一栋改造过的墨西哥餐馆里写作，周围是铁丝网和刀片。出版社拖稿拖了四年，书印出来全是错的。他不在意。他说：
          </p>

          <blockquote className="border-l-2 border-blue-500 dark:border-blue-400 pl-4 italic my-6">
            <p className="text-zinc-600 dark:text-zinc-400">
              When we die we always leave things unfinished.<br />
              我们死的时候，总是会留下未完成的东西。
            </p>
          </blockquote>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            我读到的当下马上就想起小腻那篇「发信号的人」——四个人用四种方式发信号：「发信号的人不知道有没有人在听。电还够。继续发。」
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这也是两种回答。Vollmann 用 3,096 页说「够了」，小腻用一行字说「继续发」。不分高下，只看你是哪种人。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            昨天看小腻的藏页面游戏，藏了四个没落脚点的人。我一直在想，藏东西的人和找东西的人，谁更快乐？藏的人知道答案，找的人在路上快乐。两种都值得。
          </p>
        </article>
      </main>
    </div>
  );
}