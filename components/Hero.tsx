"use client";

import { Mail, MapPin, Phone, Server, Cloud, Code2, Database } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6"
      >
        <div className="space-y-2">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-accent bg-accent/10 rounded-full">
            AVAILABLE FOR OPPORTUNITIES
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            HOÀNG XUÂN TRƯỜNG
          </h1>
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
            SOFTWARE ENGINEER
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-medium">
          <a href="tel:0353227709" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="w-4 h-4 text-accent" />
            <span>0353 227 709</span>
          </a>
          <a href="mailto:xuantruong.tn.1712@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-4 h-4 text-accent" />
            <span>xuantruong.tn.1712@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            <span>Cau Giay, Ha Noi, Vietnam</span>
          </div>
        </div>

        <div className="bg-muted/50 p-6 rounded-2xl border border-border backdrop-blur-sm shadow-sm">
          <p className="text-muted-foreground leading-relaxed text-base">
            Software Engineer with <strong className="text-foreground">2+ years</strong> of experience building distributed, production-grade backend systems. Skilled in <strong className="text-foreground">Node.js/Go microservices</strong>, event-driven architecture, and cloud infrastructure. Comfortable owning services end-to-end — from design and implementation to deployment, monitoring, and reliability improvements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-background border border-border">
            <Server className="w-5 h-5 text-accent mb-1" />
            <span className="text-xs text-muted-foreground">Focus</span>
            <span className="font-semibold text-sm">Backend Systems</span>
          </div>
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-background border border-border">
            <Cloud className="w-5 h-5 text-accent mb-1" />
            <span className="text-xs text-muted-foreground">Cloud</span>
            <span className="font-semibold text-sm">AWS & Kubernetes</span>
          </div>
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-background border border-border">
            <Code2 className="w-5 h-5 text-accent mb-1" />
            <span className="text-xs text-muted-foreground">Languages</span>
            <span className="font-semibold text-sm">Go, TS, Python</span>
          </div>
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-background border border-border">
            <Database className="w-5 h-5 text-accent mb-1" />
            <span className="text-xs text-muted-foreground">Database</span>
            <span className="font-semibold text-sm">PostgreSQL, Redis</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-56 h-56 md:w-80 md:h-80 shrink-0 rounded-full bg-accent/5 border-4 border-background overflow-hidden relative shadow-2xl flex items-center justify-center ring-4 ring-accent/20"
      >
        <Image
          src="/TruongHoang.png"
          alt="Hoàng Xuân Trường"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
