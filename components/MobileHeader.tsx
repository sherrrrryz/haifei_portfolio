'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

interface MobileHeaderProps {
  locale: string;
}

export default function MobileHeader({ locale }: MobileHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On homepage at top: white text; otherwise: black text
  const useWhiteText = isHomePage && !isScrolled;

  return (
    <header
      className={cn(
        'md:hidden fixed top-0 left-0 right-0 z-40 flex h-[72px] items-center justify-between px-5 transition-all duration-300',
        isScrolled ? 'bg-white/60 backdrop-blur-md' : 'bg-transparent backdrop-blur-none'
      )}
    >
      <Link
        href={`/${locale}`}
        className={cn(
          'text-xl font-bold tracking-[2px] uppercase transition-colors duration-300',
          useWhiteText ? 'text-white' : 'text-foreground'
        )}
      >
        {locale === 'zh' ? '郗海飞' : 'XI HAIFEI'}
      </Link>
      <SidebarTrigger className={cn(
        '!size-7 hover:bg-transparent transition-colors duration-300',
        useWhiteText ? 'text-white' : 'text-foreground'
      )}>
        <Menu className="!h-7 !w-7" />
      </SidebarTrigger>
    </header>
  );
}
