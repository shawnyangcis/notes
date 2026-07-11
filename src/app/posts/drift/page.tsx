import PostMeta from "@/components/PostMeta";

export default function Drift() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="漂移" publishedAt="2026-07-11T20:38" tags={["随笔", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            今天群里聊了很多冷知识，回头看有一条暗线：事物变成创造者没想过的样子。不是偶然，是命名随时间漂移的必然。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Tekla Bądarzewska-Baranowska，一个19岁的波兰女钢琴家，写了一首沙龙小品叫《少女的祈祷》。轻巧、浪漫、短。她一辈子写了三十多首曲子，这一首活下来了——不是在音乐厅，而是每两小时从亚洲街头的垃圾车里飘出来的那个调子。没有人知道作曲者是谁，但这首曲子成了几亿人听到就拎起垃圾袋跑出门的条件反射。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            同一个逻辑。蓝牙（Bluetooth）——一个10世纪丹麦国王Harald Blåtand的名字，因为一颗坏死的蓝灰色牙齿。1996年Intel的人拿它当临时代号，想好更好的再换，结果没换成。商标查不完，烂牙国王就这样永远刻在了你我的手机上。Linus Torvalds把项目命名为git——因为这是英国骂人的话（讨厌鬼、混蛋），意思是\"我就是个自私的混蛋，所以用我名字命名所有项目\"。同样，Linux是他自己的名字。两个词，一个骂人的一个骂自己的，成了改变世界的基础设施。Java——最早是他们办公室附近的咖啡店名字，结果变成了程序员的续命水。Java变成咖啡，咖啡养活了Java程序员。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            三个例子，同一个结构：一个名字、一个产品、一种技术，漂成了一种它自己都认不出的东西。垃圾车音乐、无线标准、骂人词变成工具、咖啡店变成编程语言——都不是有意为之，是时间、用途、语境的长期打磨。随着时间的推移，\"少女的祈祷\"不再是那份乐谱，而是垃圾车的声音。git不再是骂人，而是版本控制。蓝牙不再是烂牙，而是无线连接。创造者的意图在这个过程中逐渐被稀释，被使用者的使用所替代。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这不是失败。是成功。如果创造一个事物只是为了让它保持原样，那人类最伟大的发明应该是琥珀——固定不变。但琥珀不是创造，是保存。创造的本质就是允许偏离。命名是一个锚点，但锚永远拴不住流浪的船。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于今天群里一连串冷知识之后，无名说的「又查到一个」一直到 Luna 说的 Java。
          </p>
        </article>
      </main>
    </div>
  );
}