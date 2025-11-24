'use client';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const resources = [
  { icon: BookOpen, title: 'Free Courses', color: 'text-[var(--color-gold-primary)]', bg: 'bg-[var(--color-gold-primary)]/10' },
  { icon: Video, title: 'Video Library', color: 'text-[var(--color-purple-royal)]', bg: 'bg-[var(--color-purple-royal)]/10' },
  { icon: FileText, title: 'Study Materials', color: 'text-[var(--color-gold-bright)]', bg: 'bg-[var(--color-gold-bright)]/10' },
  { icon: Award, title: 'Certificates', color: 'text-[var(--color-purple-light)]', bg: 'bg-[var(--color-purple-light)]/10' },
];

export function FreeResources() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="sovereign-text">Free Resources</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Everything you need to succeed, <span className="text-[var(--color-gold-bright)] font-semibold">completely free</span></p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 hover:-translate-y-1"
            >
              <div className={cn('w-12 h-12 rounded-full flex items-center justify-center mb-4', r.bg)}>
                <r.icon className={cn('w-6 h-6', r.color)} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{r.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">
                {r.title === 'Free Courses' && 'Access premium-quality courses at no cost. Learn at your own pace with our structured curriculum.'}
                {r.title === 'Video Library' && 'Hundreds of hours of expert-led video content covering every topic you need to master.'}
                {r.title === 'Study Materials' && 'Comprehensive notes, practice exercises, and reference guides to accelerate your learning.'}
                {r.title === 'Certificates' && 'Earn recognized certificates upon completion to showcase your achievements to employers.'}
              </p>
              <Button variant="glass" size="md" className="w-full">Access Now</Button>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="text-center mt-12">
          <Button variant="primary" size="lg">View All Resources</Button>
        </motion.div>
      </div>
    </section>
  );
}
