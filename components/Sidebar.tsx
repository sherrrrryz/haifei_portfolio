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
    { href: '/works/watercolor', label: t('watercolor') },
    { href: '/works/oil', label: t('oil') },
    { href: '/works/mural', label: t('mural') },
    { href: '/publications', label: t('publications') },
    { href: '/news', label: t('news') },
    { href: '/about', label: t('about') },
  ];

  return (
    <SidebarMenu className="gap-0">
      {navLinks.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === link.href}
            className={cn(
              'text-lg font-light uppercase text-muted-foreground',
              'transition-colors duration-300 hover:text-foreground',
              'hover:bg-transparent active:bg-transparent data-[active=true]:bg-transparent',
              'data-[active=true]:text-foreground data-[active=true]:font-normal',
              'h-auto px-0 py-2 rounded-none'
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
    <div className="flex gap-2 text-sm">
      <Link
        href={pathname}
        locale="zh"
        onClick={() => setOpenMobile(false)}
        className={cn(
          'transition-colors duration-300 font-light',
          locale === 'zh' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
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
          'transition-colors duration-300 font-light',
          locale === 'en' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
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
    <SidebarUI className="border-none">
      <SidebarHeader>
        <Link
          href="/"
          className="text-2xl font-bold uppercase tracking-[2px] block"
        >
          {locale === 'zh' ? '郗海飞' : 'XI HAIFEI'}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <NavLinks />
      </SidebarContent>

      <SidebarFooter>
        <LanguageSwitch />
      </SidebarFooter>
    </SidebarUI>
  );
}

export { SidebarTrigger };
