"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Education() {
  const t = useTranslations('Education');

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
            </div>
            
            <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-xl text-foreground">
                  {t('university')}
                </h3>
                <span className="text-sm font-medium text-accent whitespace-nowrap">
                  {t('period')}
                </span>
              </div>
              <h4 className="text-muted-foreground font-medium mb-4">
                {t('degree')}
              </h4>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight">{t('cert_title')}</h2>
            </div>
            
            <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-xl text-foreground">
                  {t('cert_name')}
                </h3>
                <span className="text-sm font-medium text-accent whitespace-nowrap">
                  {t('cert_date')}
                </span>
              </div>
              <h4 className="text-foreground font-medium mb-2">
                {t('cert_issuer')}
              </h4>
              <p className="text-muted-foreground text-sm bg-muted/50 p-3 rounded-lg border border-border" dangerouslySetInnerHTML={{ __html: t.raw('cert_details') }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
