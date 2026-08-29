"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLang = () => {
    const nextLocale = locale === 'vi' ? 'en' : 'vi';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLang}
      className="p-2.5 rounded-full bg-background border border-border shadow-sm hover:bg-accent/10 transition-colors flex items-center justify-center font-bold text-xs w-10 h-10"
      aria-label="Toggle language"
    >
      {locale === 'vi' ? 'EN' : 'VI'}
    </button>
  );
}
