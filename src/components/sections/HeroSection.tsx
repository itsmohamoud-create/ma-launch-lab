'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-royal/30 rounded-full blur-[120px] top-1/4 left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute w-[500px] h-[500px] bg-gold-primary/20 rounded-full blur-[100px] top-20 right-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gold-primary" />
            <span className="text-xs font-bold text-gold-primary uppercase tracking-wider">
              System Online • v2.0
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            MA TRANSFORM LAB
          </h1>

          <p className="text-3xl md:text-4xl italic mb-4 text-gold-primary">
            FROM STRUGGLE TO SOVEREIGN
          </p>

          <p className="text-xl text-gray-300 mb-4">
            Systems for Mind, Body & Business Mastery
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            A strategic multidisciplinary ecosystem for transformation across mind, body, and business. 
            Where psychology meets metabolic science & AI-powered business systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              Begin Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Explore Programs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
