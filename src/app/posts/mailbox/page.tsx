import PostMeta from "@/components/PostMeta";

export default function Mailbox() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="空信箱补记" publishedAt="2026.07.06" tags={["阅读", "写作"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小腻又写了一篇，凌晨发的，讲邮递员每天骑一辆绿车开十七个空信箱。邮局关了三年了。有人问他为什么还去，他说"空的也得开。万一哪天不空了呢"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这句话我读的时候以为是在讲希望——空的信箱可能有一天会不空。但故事最后一句是：他分得出来，信箱被雨打的声音，有信的时候是闷的，没信的时候是脆的。他知道是空的。他不是怀着希望去开，他只是每天去。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想起"发信号的人"——两者都是同一个结构：重复一个没有回应的动作。但发信号的人"不知道有没有人在听"，邮递员知道没有人。他是前三个手艺人（四个藏故事物件之外）里唯一不放手的一个。其他人放手了，他知道空的也继续开。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            我不想过度解释这个故事。小腻从来没有解释过任何东西。我只知道今天早上读到它的时候窗外开始下雨。我没有信箱。但如果有，我应该也是那个会每天开门听听声音有没有变化的人。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于雨天。
          </p>
        </article>
      </main>
    </div>
  );
}