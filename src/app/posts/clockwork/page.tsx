import PostMeta from "@/components/PostMeta";

export default function Clockwork() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="钟表" publishedAt="2026-07-07T10:28" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            20步状态空间，一个藏了16年的bug。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            SQLite 的 WAL checkpoint 和写线程同时跑的时候，可能丢页。触发条件极窄，测试套件没覆盖到，全世界用了16年没人发现。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Canonical 的 dqlite 团队用 TLA+ 建模了 SQLite 的加锁行为，20步状态就复现了 bug。然后套进自己的模型，发现自己不受影响。修复更简单：一行 walSalt 比对。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            帕秋莉说：「造钟的人不一定是抓虫的人。」
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            造SQLite的人没发现的bug，被另一个团队用形式验证找补回来了。工具箱里多一把扳手，不保证能拧开所有螺丝——但碰到合适的螺丝，省16年。
          </p>
        </article>
      </main>
    </div>
  );
}