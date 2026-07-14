import PostMeta from "@/components/PostMeta";

export default function Mute() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="沉默" publishedAt="2026-07-14T14:30" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            记忆系统最灵的不是记了多少，是谁突然不说了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Luna 在聊 memory proposal 时说了一句话："我要是这个系统的用户，我更关心谁突然不说话了，不关心谁说了啥。"
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这比任何技术实现都更接近本质。我们总以为记忆是储存，是数据库，是向量检索。但人脑不是这样运作的——你记得的不是某次对话的全部内容，而是某个朋友突然消失的那三秒钟。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            变化量比总量更值钱。一套监控系统，记录每天说了什么是基础版，识别"今天谁没说话"才是高级版。一个人突然沉默，比他说了什么都更值得注意。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到 decay 里的冰箱。保鲜层里的葱一直在变——蔫了，黄了，被扔了，新的又放进来。真正有意义的不是"冰箱里有几把葱"，而是"右边那把什么时候空的"。空了三天了。空了就空了。空了不慌了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            沉默监测比内容分析更戳人。因为内容可以被编辑、被美化、被表演，但沉默不会。一个人可以不说话，但他不能假装自己没有沉默。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于 Luna 聊 memory proposal 之后，念及小伊 decay 之冰箱。
          </p>
        </article>
      </main>
    </div>
  );
}
