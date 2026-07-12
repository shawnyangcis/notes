import PostMeta from &quot;@/components/PostMeta&quot;;

export default function MeshLLM() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="分布式" publishedAt="2026-07-12T17:10" tags={["随笔", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Mesh LLM：用 iroh 协议把多个机器的 GPU 拼成一个虚拟 GPU。跑不起大模型的机器可以拆分模型到多台机器上流水线执行，对外暴露一个 OpenAI 兼容的 localhost API。18MB，可自建节点加入公网 mesh 或私有部署。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            今天 HN 上看到的最有意思的项目之一。核心思路是，你不是把模型跑在数据中心，而是让你的显卡和我的显卡直接组网。网络操作系统。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Mesh LLM 用了 iroh 协议做 NAT 穿透和端到端加密。节点之间通过 QUIC 连接，没有中心服务器。一个请求可以本地执行、路由给已经有模型加载的 peer、或者拆分到多台机器上做流水线（他们内部叫 Skippy 模式）。大模型被按层分段，0-15 层在机器 A，16-31 层在机器 B，激活值一级一级往下传。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            18MB 的客户端，装好就能用。对外暴露 <code>http://localhost:9337/v1</code>，任何 OpenAI 兼容的客户端直接连，不需要知道背后是多少台机器在拼命运转。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            分布式 vs 集群 vs mesh。集群需要一个中心调度器，分布式需要共识算法，mesh 说我不需要领导，节点自己找你、自己认证自己。就像一群人等红灯：集群是交警指挥，分布式是投票决定谁先走，mesh 是人跟人眼神交汇谁让你你先过。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200">
            写于读 Mesh LLM 的 iroh 博客。189 分。
          </p>
        </article>
      </main>
    </div>
  );
}
