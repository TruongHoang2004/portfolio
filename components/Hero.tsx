"use client";

import { Mail, MapPin, Phone, Server, Cloud, Code2, Database } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="pt-8 pb-12 md:pt-16 md:pb-16 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-5"
      >
        <div className="space-y-1">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-accent bg-accent/10 rounded-full">
            {t('available')}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            HOÀNG XUÂN TRƯỜNG
          </h1>
          <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
            {t('role')}
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-medium">
          <a href="tel:0353227709" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Phone className="w-4 h-4 text-accent" />
            <span>0353 227 709</span>
          </a>
          <a href="mailto:xuantruong.tn.1712@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Mail className="w-4 h-4 text-accent" />
            <span>xuantruong.tn.1712@gmail.com</span>
          </a>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{t('location')}</span>
          </div>
        </div>

        <div className="bg-muted/40 p-4 md:p-5 rounded-2xl border border-border backdrop-blur-sm shadow-sm">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base" dangerouslySetInnerHTML={{ __html: t.raw('summary') }} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-background border border-border shadow-sm">
            <Server className="w-4 h-4 text-accent mb-0.5" />
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">{t('focus')}</span>
            <span className="font-semibold text-xs">{t('focusValue')}</span>
          </div>
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-background border border-border shadow-sm">
            <Cloud className="w-4 h-4 text-accent mb-0.5" />
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">{t('cloud')}</span>
            <span className="font-semibold text-xs">{t('cloudValue')}</span>
          </div>
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-background border border-border shadow-sm">
            <Code2 className="w-4 h-4 text-accent mb-0.5" />
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">{t('languages')}</span>
            <span className="font-semibold text-xs">{t('languagesValue')}</span>
          </div>
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-background border border-border shadow-sm">
            <Database className="w-4 h-4 text-accent mb-0.5" />
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">{t('database')}</span>
            <span className="font-semibold text-xs">{t('databaseValue')}</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-accent/5 border-2 md:border-4 border-background overflow-hidden relative shadow-lg flex items-center justify-center ring-2 md:ring-4 ring-accent/20"
      >
        <Image
          src="/TruongHoang.png"
          alt="Hoàng Xuân Trường"
          fill
          sizes="(max-width: 768px) 8rem, 12rem"
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
