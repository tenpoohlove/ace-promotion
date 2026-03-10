export default function Hero() {
  return (
    <section className="relative pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-2xl">
          {/* English Label */}
          <p className="text-xs tracking-[0.3em] text-orange-500 font-medium mb-4 uppercase">
            Funnel Strategy & Training
          </p>

          {/* Main Copy */}
          <h1 className="text-3xl md:text-5xl font-bold text-navy-600 leading-tight mb-6 tracking-tight">
            事業の成長に、
            <br />
            <span className="text-navy-800">確かな仕組みを。</span>
          </h1>

          {/* Sub Copy */}
          <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-10 max-w-lg font-light md:whitespace-nowrap">
            ファネル構築・研修・セミナープロデュースで
            <br />
            企業の持続的な成長をサポートします。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-orange-600 transition-colors duration-200"
            >
              まずはご相談ください
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-gray-200 text-gray-600 px-8 py-3.5 rounded text-sm font-medium hover:border-navy-600 hover:text-navy-600 transition-colors duration-200"
            >
              サービスを見る
            </a>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-l from-orange-50/50 to-transparent hidden lg:block rounded-l-full" />
      </div>

      {/* Bottom Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
