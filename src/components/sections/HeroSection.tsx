'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-[var(--color-purple-royal)]/30 rounded-full blur-[120px] top-1/4 left-1/2 -translate-x-1/2" />
        <div className="absolute w-[500px] h-[500px] bg-[var(--color-gold-primary)]/20 rounded-full blur-[100px] top-20 right-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[var(--color-gold-primary)]" />
            <span className="text-sm font-medium text-[var(--color-gold-bright)]">Global Education Platform</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6"><span className="sovereign-text">MA Launch Lab</span></h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empowering students worldwide with <span className="text-[var(--color-gold-bright)] font-semibold">free resources</span>, master courses, and the tools to build successful careers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg">Start Learning Free <ArrowRight className="ml-2 w-5 h-5" /></Button>
            <Button variant="glass" size="lg">Explore Master Courses</Button>
          </div>

          <p className="mt-8 text-sm text-gray-400">Join 10,000+ students transforming their futures</p>
        </motion.div>
      </div>
    </section>
  );
}
