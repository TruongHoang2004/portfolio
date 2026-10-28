import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="notebook-hero max-w-5xl mx-auto px-6 pt-10 pb-16 md:pt-16 md:pb-20">
      <div className="grid md:grid-cols-[1fr_220px] items-center gap-12">
        <div>
          <p className="notebook-label mb-5">Backend engineer · Go & distributed systems</p>
          <h1 className="notebook-headline">Thoughtful systems.<br />Practical engineering.</h1>
          <p className="text-lg mt-6 mb-3">I’m <strong className="font-semibold">Hoàng Xuân Trường.</strong></p>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            I build backend systems with Go and Node.js, drawing on 2+ years in software engineering. My work connects APIs, event-driven services, and cloud infrastructure, with a focus on reliability from design to deployment.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-xl mt-3">
            Lately, I’m building products around social publishing, commerce, and AI video workflows — and using them to ask better questions about architecture and testing.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a href="#projects" className="notebook-button">Explore my work <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>
            <a href="#learning" className="notebook-button notebook-button-secondary">Open my learning notebook</a>
          </div>
        </div>
        <aside className="notebook-note">
          <Image src="/TruongHoang.png" alt="Hoàng Xuân Trường" width={88} height={88} className="rounded-full mb-5 grayscale" priority />
          <p className="notebook-label">Currently exploring</p>
          <p className="font-serif text-2xl leading-tight mt-3 mb-5">Build. Understand.<br />Refine.</p>
          <p className="font-mono text-xs text-muted-foreground leading-7 border-t border-border pt-3">Go & concurrency<br />Domain-driven design<br />Reliable async workflows</p>
        </aside>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-muted-foreground text-sm mt-10 pt-6 border-t border-border">
        <a href="mailto:xuantruong.tn.1712@gmail.com" className="flex items-center gap-2 hover:text-accent break-all"><Mail className="w-4 h-4 shrink-0" aria-hidden="true" />xuantruong.tn.1712@gmail.com</a>
        <a href="tel:0353227709" className="flex items-center gap-2 hover:text-accent"><Phone className="w-4 h-4" aria-hidden="true" />0353 227 709</a>
        <span className="flex items-center gap-2"><MapPin className="w-4 h-4" aria-hidden="true" />Cau Giay, Ha Noi</span>
      </div>
    </section>
  );
}
