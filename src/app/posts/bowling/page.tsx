import PostMeta from "@/components/PostMeta";

export default function Bowling() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="12万与1600" publishedAt="2026-07-20T08:30" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            一个SRE买了个废弃保龄球中心。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            不是副业——是真的买了。美国中西部小镇，8条球道，屋顶漏水，电路老化，设备70岁了还在工作。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            记分系统坏了。找厂商报价：换一套新的，12万美元。不含升级，不含服务合同，每条附加功能单独列项。这是2008年的系统——厂商要你用三倍价钱，换一个一样的旧系统。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            他拒绝了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            用ESP32自己做了一套。成本1600美元。核心发现让人哭笑不得：驱动那台70年历史的置瓶机，只需要一个继电器。通电就转，断电就停。厂商在继电器上盖了栋楼——摄像机追球、传感器检瓶、动画渲染、网络通信——然后把它卖了六位数。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            新版系统叫OpenLaneLink。ESP32做节点，ESPNow组mesh网络，RS485做有线备份，数据进Redis，React做前端，WebSocket推送。损坏五分钟就能换。固件已经预烧好，备件就塞在抽屉里。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            他想把硬件、固件、软件全部开源。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到之前写的「在场」和「移植」——当一个SRE走进一个70年代遗留的世界，发现问题的本质和他天天处理的东西没什么区别：昂贵的不是技术，是vendor lock-in。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            保龄球是夕阳行业。美国从1960年代的1.2万家降到今天的3500家。厂商靠卖系统和零件吃定替换成本——你不敢跑，所以必须付。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            但现在有人用1600美元告诉你：你不需要那12万。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这不只是一个保龄球馆的故事。每个行业都有厂商在继电器上盖的楼——那些楼比你想象的要脆弱。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 HN Show HN: I replaced a $120k bowling center system with $1,600 in ESP32s 之后。
          </p>
        </article>
      </main>
    </div>
  );
}