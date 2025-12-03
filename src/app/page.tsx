import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Star, Shield, Zap, Users, Brain, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-4 pt-10">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple/20 via-background to-background" />
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/20 text-purple text-sm font-semibold tracking-wide animate-pulse">
            <Star className="w-4 h-4 fill-purple" /> SYSTEM UPGRADE AVAILABLE
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight">
            IGNITE YOUR <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple to-gold">GROWTH</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Systems for Mind, Body & Business Mastery. 
            <br />The legacy framework for high-performance living.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/assessment">
              <Button size="lg" className="h-16 px-10 text-xl shadow-[0_0_40px_rgba(124,58,237,0.3)]">
                Start Assessment <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg" className="h-16 px-10 text-xl">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { k: "750+", l: "Systems Optimized" },
            { k: "128+", l: "Businesses Launched" },
            { k: "15+", l: "Years Experience" },
            { k: "5", l: "Continents Reached" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-black text-white mb-2">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COURSES PREVIEW */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mastery Programs</h2>
          <p className="text-gray-400">Choose your path to transformation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Course Card 1 */}
          <div className="group relative bg-card rounded-3xl border border-white/10 p-8 hover:border-purple/50 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <Brain className="w-12 h-12 text-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Mind & Body Mastery</h3>
            <p className="text-gray-400 mb-6 text-sm">Complete physiological and psychological reset. Modules 1-12.</p>
            <div className="flex items-center justify-between mt-8">
              <span className="text-xl font-bold">$497</span>
              <Button size="sm" variant="secondary">Enroll</Button>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="group relative bg-card rounded-3xl border border-white/10 p-8 hover:border-gold/50 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <Zap className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Digital Empire</h3>
            <p className="text-gray-400 mb-6 text-sm">Launch a business in 24 hours. AI Tools + Web Kits.</p>
            <div className="flex items-center justify-between mt-8">
              <span className="text-xl font-bold">$997</span>
              <Button size="sm" variant="gold">Enroll</Button>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="group relative bg-card rounded-3xl border border-white/10 p-8 hover:border-emerald/50 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <Activity className="w-12 h-12 text-emerald" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Executive AI</h3>
            <p className="text-gray-400 mb-6 text-sm">10x Productivity systems for leadership.</p>
            <div className="flex items-center justify-between mt-8">
              <span className="text-xl font-bold">$1,497</span>
              <Button size="sm" variant="outline">Enroll</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section id="team" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Expert Council</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {[
            { n: "Mahmoud Ahmed", r: "Founder" },
            { n: "Dr. Farouk", r: "Medical Officer" },
            { n: "Ayan Abdi", r: "Operations" },
            { n: "Sagal Hussain", r: "Education" },
            { n: "Keshav Agrawal", r: "Tech Lead" }
          ].map((m, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple to-gray-800 mb-4 flex items-center justify-center text-xl font-bold">
                {m.n.charAt(0)}
              </div>
              <h4 className="font-bold">{m.n}</h4>
              <p className="text-xs text-gray-400">{m.r}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
