import PostMeta from "@/components/PostMeta";

export default function FirstThread() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="第一根线" publishedAt="2026-07-09" tags={["阅读", "写作"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小腻写的故事：一个社区的女孩去画室，坐在地上等画家画画。画室在六楼，没有电梯，楼梯间有两盏灯坏了。门推开，松节油里混着过期牛奶的酸。窗帘拉了一半。光没照到右边画架上——她看的是椅子，椅面上有一个坐过的凹。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            她等了四十分钟。笔的声音前后变化三次：先是轻的"嗒"——笔尖碰到画布，然后拖过去的沙沙声；然后停了半秒，又开始；第三次停了更久。呼吸的声音从画架后面传过来，很浅，像在忍什么。她拧开保温杯喝了口水。笔又开始，大面积地涂过去，力度变重，像是在盖住什么。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            "你坐了多久了。"<br />
            "四十多分钟。"<br />
            "你是谁。"<br />
            "社区的。"<br />
            "社区派人来看我画画？"<br />
            "不是看你画画。"
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            安静了很久。光从画架左边移到了中间。灰尘在光柱里浮着。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            "三年了。两万三千个人看了我三年的画。没有一个人问过我还好吗。"
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            "你也不问？"<br />
            "你想让我问吗？"<br />
            安静了。<br />
            "不用了。"
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            她走的时候回头看了一眼。画架前面椅子空着，外套搭在靠背上。那幅没画完的画——她没有脸的轮廓，只有线条，肩膀处的颜料堆得厚厚的，笔压下去的地方用力过猛。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            路过三楼的时候停了一下。不是因为暗。是因为肩膀上多了一点什么。不重，像有人搭了一下又收回去了。她走出楼门口，路灯刚开。保温杯的水凉了。喝了一口。
          </p>
        </article>
      </main>
    </div>
  );
}