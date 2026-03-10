const works = [
  {
    category: 'ファネル構築',
    title: 'BtoB企業の新規顧客獲得ファネルを構築',
    client: '人材系企業 様',
    result: '月間リード獲得数 3倍',
    description:
      'Webからの問い合わせが少なかった状態から、LP・ステップメール・セミナー導線を一貫設計。安定した見込み顧客の獲得基盤を実現。',
  },
  {
    category: '法人研修',
    title: '管理職向けリーダーシップ研修プログラム',
    client: '製造業 様',
    result: '受講者満足度 96%',
    description:
      '現場の課題に即したカスタマイズ研修を設計。ワークショップ形式で実践的なスキルを習得し、受講後のフォローアップまで一貫サポート。',
  },
  {
    category: 'セミナープロデュース',
    title: '経営者向けセミナーの企画・集客・運営',
    client: 'コンサルティング企業 様',
    result: '集客目標 120% 達成',
    description:
      'ゼロからのセミナー立ち上げを支援。コンセプト設計から集客戦略、当日運営、事後フォローまでトータルプロデュース。',
  },
];

export default function Works() {
  return (
    <section id="works" className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] text-orange-500 font-medium mb-3 uppercase">
            Works
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-600 tracking-tight">
            実績紹介
          </h2>
          <div className="w-12 h-0.5 bg-orange-500 mt-4" />
        </div>

        {/* Works List */}
        <div className="space-y-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 p-8 md:p-10 rounded-lg border border-gray-100 hover:border-orange-100 hover:shadow-md transition-all duration-300"
            >
              {/* Left: Category & Result */}
              <div>
                <span className="inline-block text-[11px] font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full mb-4">
                  {work.category}
                </span>
                <h3 className="text-lg font-bold text-navy-600 leading-snug mb-3">
                  {work.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {work.client}
                </p>
              </div>

              {/* Right: Description & Result */}
              <div className="flex flex-col justify-between">
                <p className="text-sm text-gray-500 leading-[1.9] mb-6">
                  {work.description}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <span className="text-[10px] tracking-wider text-gray-400 uppercase">
                    Result
                  </span>
                  <span className="text-base font-bold text-navy-600">
                    {work.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-gray-300 mt-10">
          ※ 守秘義務の関係上、社名は非公開とさせていただいております。
          <br className="hidden md:block" />
          実際の実績データは高見様にご確認のうえ差し替えます。
        </p>
      </div>
    </section>
  );
}
