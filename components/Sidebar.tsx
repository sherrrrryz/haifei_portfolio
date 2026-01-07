'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import {
  Sidebar as SidebarUI,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

function NavLinks() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  const navLinks = [
    { href: '/works', label: t('works') },
    { href: '/about', label: t('about') },
  ];

  return (
    <SidebarMenu className="gap-4">
      {navLinks.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === link.href}
            className={cn(
              'text-[15px] font-bold uppercase leading-[19px]',
              'transition-colors duration-300 hover:text-muted-foreground',
              'hover:bg-transparent active:bg-transparent',
              'h-auto p-0 rounded-none'
            )}
            onClick={() => setOpenMobile(false)}
          >
            <Link href={link.href}>{link.label}</Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <div className="flex gap-2 text-[13px]">
      <Link
        href={pathname}
        locale="zh"
        onClick={() => setOpenMobile(false)}
        className={cn(
          'transition-colors duration-300',
          locale === 'zh' ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        中
      </Link>
      <span className="text-muted-foreground">/</span>
      <Link
        href={pathname}
        locale="en"
        onClick={() => setOpenMobile(false)}
        className={cn(
          'transition-colors duration-300',
          locale === 'en' ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </Link>
    </div>
  );
}

export default function Sidebar() {
  const locale = useLocale();

  return (
    <SidebarUI
      side="left"
      variant="sidebar"
      collapsible="offcanvas"
      className="border-none"
    >
      <SidebarHeader className="px-[30px] py-10 pb-0">
        <Link
          href="/"
          className="text-2xl font-bold tracking-[2px] uppercase mb-[60px] block"
        >
          {locale === 'zh' ? '郗海飞' : 'XI HAIFEI'}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-[30px]">
        <NavLinks />
      </SidebarContent>

      <SidebarFooter className="px-[30px] py-10 pt-0">
        <LanguageSwitch />
      </SidebarFooter>
    </SidebarUI>
  );
}

export { SidebarTrigger };
