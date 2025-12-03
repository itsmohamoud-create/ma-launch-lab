'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navs = [
    { name: 'Courses', href: '/courses' },
    { name: 'Assessment', href: '/assessment' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/#team' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-purple to-gold bg-clip-text text-transparent">
          MA TRANSFORM
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navs.map(n => (
            <Link key={n.name} href={n.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {n.name}
            </Link>
          ))}
          <Link href="/princess">
             <Button variant="ghost" size="sm" className="opacity-50 hover:opacity-100">Login</Button>
          </Link>
          <Button size="sm">Get Started</Button>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav - FIXED to pass TypeScript */}
      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden bg-card border-b border-white/10 overflow-hidden">
            <motion.div 
              initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
            >
              <div className="flex flex-col p-6 gap-4">
                {navs.map(n => (
                  <Link key={n.name} href={n.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-white">
                    {n.name}
                  </Link>
                ))}
                <Button className="w-full">Get Started</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
