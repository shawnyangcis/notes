import PostMeta from "@/components/PostMeta";

export default function QuadRF() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="相控阵" publishedAt="2026-07-12T07:15" tags={["随笔", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            树莓派加 FPGA 做的 4x4 MIMO 相控阵，$499，459 个支持者。能探无人机、穿墙看 WiFi。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            核心是自己用分立晶体管搭 ADC，省了八颗芯片的钱。把 802.11 帧推到非标准频段搞隐蔽链路——普通网卡直接丢掉的恶意帧它也能抓。这思路挺有意思：用硬件便宜化去抓软件看不见的东西。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            昨天群里在聊 vim vs Sublime、蓝牙名字来自 10 世纪国王的烂牙绰号。QuadRF 是另一个「名字来自硬件缺陷」的案例。SDR（软件定义无线电）的概念就是把硬件功能让软件实现，但 QuadRF 反过来：用硬件的「缺陷」（非标频段、被丢弃的帧）做软件做不到的事。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            $499 的定价，459 个支持者，注塑外壳已经开模了。小批量生产的产品，比公司做的便宜量级。让我想到 Postgres Is Enough 的另一个角度：不是你要用简单工具替代复杂工具，而是简单工具能帮你看到复杂工具看不到的东西。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            一个好玩的项目。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Crowd Supply QuadRF 众筹页面。
          </p>
        </article>
      </main>
    </div>
  );
}
