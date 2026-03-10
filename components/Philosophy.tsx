export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-navy-600 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.3em] text-orange-400 font-medium mb-3 uppercase">
          Philosophy
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">
          理念
        </h2>
        <div className="w-12 h-0.5 bg-orange-500 mx-auto mb-12" />

        <blockquote className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
          &ldquo;人と組織の可能性を引き出し、
          <br />
          持続的な成長の仕組みを創る&rdquo;
        </blockquote>

        <p className="text-sm text-white/60 leading-[2] max-w-2xl mx-auto">
          私たちは、単なるノウハウの提供ではなく、
          <br className="hidden md:block" />
          クライアント自身が成長し続けられる
          <br className="hidden md:block" />
          「仕組み」と「人材」を育てることを使命としています。
          <br className="hidden md:block" />
          ファネル構築も、研修も、セミナーも、
          <br className="hidden md:block" />
          すべては企業の自律的な成長のために。
        </p>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: '信頼',
              subtitle: 'Trust',
              description: '長期的なパートナーシップを築き、クライアントと共に成長します。',
            },
            {
              title: '実践',
              subtitle: 'Practice',
              description: '理論だけでなく、すぐに現場で活かせる実践的なアプローチを重視します。',
            },
            {
              title: '仕組み',
              subtitle: 'System',
              description: '属人化しない、再現可能な仕組みで、持続的な成果を実現します。',
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <p className="text-[10px] tracking-[0.2em] text-orange-400/60 uppercase mb-1">
                {value.subtitle}
              </p>
              <h3 className="text-lg font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
