export default function Footer() {
  return (
    <footer className="bg-navy-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-white font-bold text-sm tracking-wide">
              ACE PROMOTION
            </p>
            <p className="text-white/40 text-xs mt-1">
              合同会社エースプロモーション
            </p>
          </div>

          <nav className="flex gap-6">
            {[
              { label: 'サービス', href: '#services' },
              { label: '私たちについて', href: '#about' },
              { label: '理念', href: '#philosophy' },
              { label: 'お問い合わせ', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/50 text-xs hover:text-white/80 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px bg-white/10 my-8" />

        <p className="text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} 合同会社エースプロモーション All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
