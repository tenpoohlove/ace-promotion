import { ReactNode } from 'react';

const services: { number: string; title: string; subtitle: string; description: ReactNode; points: string[] }[] = [
  {
    number: '01',
    title: 'ファネル構築',
    subtitle: 'Funnel Building',
    description: (
      <>
        見込み顧客の獲得から成約までの
        <br className="hidden md:block" />
        導線を設計・構築します。
        <br className="hidden md:block" />
        集客から教育、販売までの一連の流れを
        <br className="hidden md:block" />
        仕組み化し、安定した売上基盤を実現します。
      </>
    ),
    points: ['集客導線の設計', 'LP・ステップ配信の構築', '成約率の最適化'],
  },
  {
    number: '02',
    title: '法人向け研修パッケージ',
    subtitle: 'Corporate Training',
    description: (
      <>
        組織の課題に合わせたオーダーメイドの
        <br className="hidden md:block" />
        研修プログラムを提供します。
        <br className="hidden md:block" />
        実践的な内容で、受講後すぐに
        <br className="hidden md:block" />
        現場で活かせる学びを届けます。
      </>
    ),
    points: ['課題別カスタマイズ研修', '実践型ワークショップ', 'フォローアップ体制'],
  },
  {
    number: '03',
    title: 'セミナープロデュース',
    subtitle: 'Seminar Production',
    description: (
      <>
        セミナーの企画から集客、当日運営、
        <br className="hidden md:block" />
        事後フォローまでをトータルでプロデュース。
        <br className="hidden md:block" />
        登壇者の強みを最大限に引き出す設計で、
        <br className="hidden md:block" />
        成果につながるセミナーを実現します。
      </>
    ),
    points: ['企画・コンセプト設計', '集客戦略の立案', '運営・事後フォロー'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#faf9f7] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] text-orange-500 font-medium mb-3 uppercase">
            Services
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-600 tracking-tight">
            事業内容
          </h2>
          <div className="w-12 h-0.5 bg-orange-500 mt-4" />
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 group"
            >
              {/* Number */}
              <span className="text-4xl font-bold text-orange-100 group-hover:text-orange-200 transition-colors">
                {service.number}
              </span>

              {/* Title */}
              <div className="mt-4 mb-2">
                <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-1">
                  {service.subtitle}
                </p>
                <h3 className="text-xl font-bold text-navy-600">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-6">
                {service.description}
              </p>

              {/* Points */}
              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1 h-1 bg-orange-400 rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
