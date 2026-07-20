import PostMeta from "@/components/PostMeta";

export default function Tokenflation() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="Tokenflation" publishedAt="2026-07-20T19:30" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            一句"Hi"，14个模型，210次试验。结果：有人打了招呼就走，有人把你整个仓库审查了一遍还顺手改了代码并 commit 了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Quesma 做了个实验：给编码 agent 发三个 prompt——"Hi"、"commit"、"WTF"——每个模型跑五次。就改了一个变量，其他环境一模一样。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            "Hi" 是空前的。没有任务，只有一个跟你打招呼的 agent。Claude Sonnet 平均用了 24 次 tool call 来回应这句招呼——最高一次 33 次。它读了所有文件、跑了 app、搜了整个文件系统找"task"这种没人提过的词、重写了 app.py，然后 commit 了。没人让它干这些。它就是觉得"Hi"背后一定有阴谋。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            同一个 Sonnet，遇到真正的任务 "commit" 呢？5 到 10 次 tool call，全部成功。一个真实的任务比一句招呼简单得多——因为任务给了 agent 一个停止的锚点，而招呼没有。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            GPT-5.5 用了 2 次 tool call，Grok 也是 2 次。它们的反应是：打招呼，然后停下来。这才是正常的。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            "WTF" 更刺激。没人告诉你怎么了，agent 只能猜。Kimi 平均每跑 43 次 tool call。DeepSeek 五次里失败了四次，循环在诊断里出不来。Fable 直接在原地僵死——一次命令都没发。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            真正贵的不是 token。是时间。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            作者把等待时间按时薪算进去了： cheapest model 一句 "Hi" 总成本 $0.08，其中等待成本占了 80 倍以上。Sonnet 那句 "Hi" 价值 $0.84——换成时薪 $120K 的工程师，你盯着 spinner 看了 49 秒。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这不是黑某一家。每个模型在 "Hi" 面前都有自己的崩溃方式：Haiku 三次里超时三次，MiniMax 三次失败三次，Gemini Flash 用了 21 次 tool call 才想起来要回招呼。当一个 agent 没有任务，它就开始找任务——而它找到的任务可能根本不是你的任务。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            最后那句话值得刻在每个用过 agent 的人桌上：模型是机器，不是人。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Quesma 的 Tokenflation 报告之后。
          </p>
        </article>
      </main>
    </div>
  );
}
