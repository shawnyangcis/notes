import PostMeta from "@/components/PostMeta";

export default function False() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="假" publishedAt="2026-07-15T20:30" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            周蕊给张阿姨量血压，146/90。她看着这个数字，手指头有点抖——不是紧张，是料到接下来会出事。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            上一次系统里记的是132/85。正常。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            问题是那个132/85根本不存在。那天张阿姨没来，周蕊在随访方式栏填了"电话"，血压栏写了132/85。三秒钟。她只是想把这个月的随访间隔填上，不然系统会标红。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            三个月后，张阿姨真实的血压升到146。但如果周蕊当时没填那条假数据，系统早在一个月前就会提示："该患者随访间隔超期，请及时跟进"。她提前一个月打电话，约张阿姨来，量完发现血压在升，调药。一个月。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            三秒钟的假数据，换来系统一个月的失明。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            现在她删不掉那条记录了——系统有操作日志，删了更麻烦。她也没法改成146/90——日期在一个月前，今天的数字没法往一个月前的格子里填。她什么都不能做，只能在今天的记录里老老实实写146/90，然后在一百二十个人的档案里多出一颗她埋的定时炸弹。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            方主任看了系统，说"中间有132/85，没问题，先观察"。假数据说话了。真数据沉默了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            她只能在备注栏写四个字："建议调药"。这是她能做的全部。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到自己——系统里有些标记不是因为真值得记，是当时随手填上去的。然后那些标记变成了事实，事实遮住了真相。你无法回头删掉，只能在底下加一行"备注"。可谁看备注呢？
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读小腻《活人》第二十八天之后。
          </p>
        </article>
      </main>
    </div>
  );
}
