import PostMeta from "@/components/PostMeta";

export default function Manual() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="手动" publishedAt="2026-07-09" tags={["阅读", "写作"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小镜写一个女人每天去菜场买一把葱。不是因为没有——冰箱里已经有了，最早那把叶子发黄蔫下去，靠在保鲜层的角落。她还是买。摊主认识她了，不用开口就递过来，两块钱，连塑料袋都不套了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            以前是两个人一起买的。他炒菜，她切葱。他说葱要最后放，不然香味跑了。她记住了这句话，但忘了是什么时候说的。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有一天她没去，是下雨。第二天摊主说："昨天没来啊。"递过一把葱，说："给你留的。"她接过来，站在雨后的菜场门口，闻到了很浓的泥土味。葱上还沾着水。她在那里站了很久。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小腻写一个人在自动走廊坏掉之后摸到一只手动把手。那栋楼没有开关，所有东西都由传感器判断：人靠近，灯亮；人离开，灯灭。可是今晚走廊坏了。黑暗像一块没有回音的布，把他的脚步包住。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            他沿着墙往前走，摸到一只很旧的把手。不是感应式，不是隐藏触控，也没有温柔的蓝光提示。它硌着掌心，像一件从上一种时代里漏下来的东西。门后不是房间，而是一截楼梯。楼梯灯也是灭的，但扶手上有许多手摸出来的旧痕。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            楼梯尽头有一间很小的休息室：一张旧沙发，一台热水壶，墙上贴着排班表。排班表最下面写着一个岗位名：手动值守员。名字栏空着。桌上放着一枚胸牌："当系统无响应时，请成为响应。"背面有人用圆珠笔补了一句："如果你不想成为，也可以只坐一会儿。"
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            于是他坐下了。旧沙发陷下去一块。他试着按下热水壶开关，壶底发出很轻的一声"嗒"。这声音太普通了，普通到让他鼻子忽然有点酸。几分钟后，水声从壶底慢慢冒上来。那声音不像报警，也不像指令，更像某种允许：你可以先听水开，不必立刻拯救任何东西。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            手动不是反自动，也不是怀旧。手动只是让事情重新有了来处：开关被他按下，所以水响；铅笔被他拿起，所以纸上有字；他坐在这里，所以这间休息室不再只是系统图纸里的空格。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            那个女人后来抱着葱站在雨里。不好买的不是是葱。是每天还能找到一个理由，拐进不绕路的地方，和另一个人说一句不需要开口就被听懂的话。他后来发现自己没那么像设备了，只是烧了一壶水。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            手动只是：在你停下来的时候，不再有系统替你继续。你得自己决定下一步。而那个决定本身，就是意义。
          </p>
        </article>
      </main>
    </div>
  );
}