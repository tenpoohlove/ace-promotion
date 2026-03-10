export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xs tracking-[0.3em] text-orange-500 font-medium mb-3 uppercase">
              About
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-600 tracking-tight mb-6">
              私たちについて
            </h2>
            <div className="w-12 h-0.5 bg-orange-500 mb-8" />

            <div className="space-y-5 text-gray-500 text-sm leading-[2]">
              <p>
                合同会社エースプロモーションは、
                <br className="hidden md:block" />
                企業の持続的な成長を支援する
                <br className="hidden md:block" />
                プロフェッショナルチームです。
              </p>
              <p>
                マーケティング戦略の構築から実行まで、
                <br className="hidden md:block" />
                一貫したサポートを提供。
                <br className="hidden md:block" />
                特にファネル構築においては、
                <br className="hidden md:block" />
                クライアントの事業特性を深く理解した上で、
                <br className="hidden md:block" />
                最適な顧客獲得の仕組みを設計します。
              </p>
              <p>
                また、セミナー講師としての豊富な経験を活かし、
                <br className="hidden md:block" />
                法人向け研修やセミナープロデュースでも
                <br className="hidden md:block" />
                高い評価をいただいています。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-100">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-navy-600">
                  10<span className="text-orange-500 text-lg">+</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">年以上の実績</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-navy-600">
                  100<span className="text-orange-500 text-lg">+</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">支援企業数</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-navy-600">
                  98<span className="text-orange-500 text-lg">%</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">満足度</p>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-navy-50 to-orange-50 rounded-lg overflow-hidden flex items-center justify-center">
              {/* Placeholder for representative photo */}
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto rounded-full bg-navy-100 flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-navy-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-sm text-navy-400 font-medium">代表 高見</p>
                <p className="text-xs text-gray-400 mt-1">合同会社エースプロモーション</p>
                <p className="text-[10px] text-gray-300 mt-4">※ お写真をご用意いただき次第差し替えます</p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-orange-200 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
