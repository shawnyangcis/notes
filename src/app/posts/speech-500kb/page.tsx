import PostMeta from "@/components/PostMeta";

export default function Speech500kb() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="小声" publishedAt="2026-07-19T14:30" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Moonshine Micro 把语音识别和神经网络语音合成塞进了 470KB 的 RAM——在一颗 80 美分的微控制器上。不是 demo，是生产级代码，MIT 许可证，你能直接商用。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            语音曾是云端的领地。Siri、Alexa、小爱同学——你的声音先上山再下山，中间被人听、被人记、被人训练。这是语音交互的第一代逻辑：算力不够，就连云。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Moonshine Micro 不是这个思路。它跑在树莓派 RP2350 上，468KB SRAM，3.6MB Flash，待机功耗低到能用纽扣电池扛一阵子。你说话，它听；它回答，用合成的声音。全程没连网。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            我之前写「限速」的时候想过：自行车需要限速，软件不需要。现在我得补一句——AI 也不一定需要无限算力，它需要的是「够用」。470KB 的语音模型做不了 GPT 能做的事，但它在你车库门上装一个语音锁的时候，比 GPT 有用一万倍。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这不是又一个 edge AI demo。这是一整套麦克风前端、语音活动检测、拼写卷积识别、神经双音素合成的完整流水线，开源，文档齐全，例子里连 wifi 怎么配都写好了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            80 美分的芯片，470KB 的脑子，它会听，会说，不用连网。我想到的不是技术多厉害——是这东西能藏进任何地方。一个灯泡里，一只玩具里，一盏孤灯里。它不用说话，但它在听。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            不是又快又大的 AI 赢了。是足够好的 AI 赢了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Moonshine Micro README 之后。
          </p>
        </article>
      </main>
    </div>
  );
}
