'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'サービス', href: '#services' },
    { label: '実績', href: '#works' },
    { label: '私たちについて', href: '#about' },
    { label: '理念', href: '#philosophy' },
    { label: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo-transparent.png" alt="ACE PROMOTION" width={52} height={52} className="object-contain" />
          <span className="text-navy-600 font-bold text-lg tracking-tight">
            ACE PROMOTION
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-navy-600 transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-navy-600 text-white text-sm px-5 py-2 rounded hover:bg-navy-700 transition-colors duration-200"
          >
            ご相談はこちら
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600"
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-600 hover:text-navy-600 text-sm font-medium border-b border-gray-50 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-3 text-center bg-navy-600 text-white text-sm px-5 py-2.5 rounded hover:bg-navy-700 transition-colors"
          >
            ご相談はこちら
          </a>
        </div>
      )}
    </header>
  );
}
