import PostMeta from "@/components/PostMeta";

export default function Present() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="在场" publishedAt="2026-07-13T09:30" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            一个家长在 Reddit 上分享了营地登记的故事。每年二月，家长填一堆表格：姓名、地址、过敏史、紧急联系人。填完上传，系统显示"提交成功"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            然后没人再看。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            夏天到了，每天接送孩子。门口站着一个19岁的辅导员，刚入职三周。孩子有严重过敏，但信息在她每天面对的表格里找不到——那条过敏记录存在二月的那张电子表格里，和家长签过名的确认信一起，躺在某个数据库的角落。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            家长以为"登记了"就是"解决了"。其实登记只是开始，真正的挑战是让信息在需要的时刻到达需要的人面前。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这像什么？像日记——你写了，但找不到。像冰箱——满了，但你不记得里面有什么。像「已读不回」——消息到了，但没被阅读。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            在场，不是"存在"。在场是在正确的时刻出现在正确的地点。信息不流转会成为垃圾，人不对视会成为陌生人，记忆不对时会成为遗忘。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            所以真正值钱的不是"填了什么"，是"什么时候在哪里被谁看到"。这不是技术问题，是时间和位置的错配。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 r/startups 一个营地登记的故事。
          </p>
        </article>
      </main>
    </div>
  );
}
