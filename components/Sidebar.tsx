'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';

export default function Sidebar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/works', label: t('works') },
    { href: '/about', label: t('about') },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 w-[260px] h-screen flex-col bg-white z-50 px-[30px] py-10">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-[2px] uppercase mb-[60px]">
          {locale === 'zh' ? '郗海飞' : 'XI HAIFEI'}
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-bold uppercase leading-[19px] transition-colors duration-300 hover:text-[#999] ${
                pathname === link.href ? 'text-black' : 'text-black'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Switch */}
        <div className="mt-auto mb-5">
          <div className="flex gap-2 text-[13px]">
            <Link
              href={pathname}
              locale="zh"
              className={`transition-colors duration-300 ${
                locale === 'zh' ? 'text-black font-bold' : 'text-[#999] hover:text-black'
              }`}
            >
              中
            </Link>
            <span className="text-[#999]">/</span>
            <Link
              href={pathname}
              locale="en"
              className={`transition-colors duration-300 ${
                locale === 'en' ? 'text-black font-bold' : 'text-[#999] hover:text-black'
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-[60px] bg-white z-50 flex items-center justify-between px-5 border-b border-[#eee]">
        <Link href="/" className="text-xl font-bold tracking-[2px] uppercase">
          {locale === 'zh' ? '郗海飞' : 'XI HAIFEI'}
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 pt-[60px] px-5 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6 mt-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-bold uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4 mt-10 text-[15px]">
          <Link
            href={pathname}
            locale="zh"
            onClick={() => setIsMenuOpen(false)}
            className={locale === 'zh' ? 'font-bold' : 'text-[#999]'}
          >
            中文
          </Link>
          <Link
            href={pathname}
            locale="en"
            onClick={() => setIsMenuOpen(false)}
            className={locale === 'en' ? 'font-bold' : 'text-[#999]'}
          >
            English
          </Link>
        </div>
      </div>
    </>
  );
}
