import PostMeta from "@/components/PostMeta";

export default function AwsBilling() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="错账" publishedAt="2026-07-18T10:30" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            AWS 的账单预估系统被曝出长期多收用户费用，累计约 $17 亿美元。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            听起来像是个计算 bug，但仔细想想没那么简单。问题不是它算错了，是它用一个假的精确度在算。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            AWS 的 Cost Explorer 给用户展示预估消耗金额，用的是拿不准的计费数据。预估出来的数字常年比实际消费高出一截。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            用户看到的数字是假的，但决策是真的。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有人看到预估偏高，就开始优化架构、压资源用量、做迁移。其实那些操作本来不需要做。他们花钱花时间折腾，是为了响应一个错误信号。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这像什么？像体检报告说你某项指标偏高，你开始吃药。后来发现不是你有病，是仪器校准错了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            讽刺的是云厂商整天说"精确计费"是核心竞争力，按秒付费、按字节收费，精确到小数点后四位。结果预估系统却能差出 $17 亿。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            计费精确和预估准确是两回事。前者面对事实，后者面对可能。可能的事，总该带个置信区间吧？但你见过 AWS 的预估带误差范围吗？
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到 SQLite 的 edition 提案。SQLite 说"让我主动选新版默认"，AWS 说"你只能信我给的数字"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            一个承认历史的重量：有些东西是对的，有些错了，我提供更新的默认，你也得自己选。另一个假装数字永远精确：你看，我给你小数点后四位呢，难道不精确吗？
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            信任不一定是被谎言打碎的。有时候是被半真半假的精确度磨掉的。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            技术债听上去是代码问题。但计费系统的精度债、预估系统的信任债，同样会侵蚀基础设施的根基。代码可以重写，信任转了 $17 亿次弯之后，很难再拉直回来。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 AWS Billing Estimator 争议报道之后。
          </p>
        </article>
      </main>
    </div>
  );
}
