import Link from 'next/link';
import { Rocket, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import StatsCard from '@/components/ui/StatsCard';
import SocialShare from '@/components/ui/SocialShare';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#10B981]/20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <p className="text-[#F59E0B] italic text-lg mb-4 animate-fadeInUp">MA TRANSFORM LAB</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp gradient-text">
            Ignite Your Growth
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#D1D5DB] mb-8 animate-fadeInUp">
            Systems for Mind, Body & Business Mastery
          </h2>
          <p className="text-lg text-[#D1D5DB] mb-12 max-w-3xl mx-auto animate-fadeInUp">
            The strategic educational ecosystem for total performance: Emotional Mastery • Health Optimization • Business Growth
          </p>
          
          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fadeInUp">
            <StatsCard title="Human Systems Optimized" value="750+" subtitle="& counting" icon={<TrendingUp className="w-8 h-8" />} />
            <StatsCard title="Businesses Launched" value="128+" subtitle="Global impact" icon={<Rocket className="w-8 h-8" />} />
            <StatsCard title="Years Lives Elevated" value="15+" subtitle="Proven track record" icon={<Award className="w-8 h-8" />} />
            <StatsCard title="Continents of Influence" value="5+" subtitle="Worldwide reach" icon={<Users className="w-8 h-8" />} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp">
            <Link href="/assessment">
              <Button size="lg">Begin Systems Assessment</Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline">Join Builders Lab</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Free Resources Section */}
      <Section className="bg-[#1A1A1A]/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Free Resources to Start Your Journey</h2>
          <p className="text-xl text-[#D1D5DB]">Begin your transformation today with our complimentary resources</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="card-hover">
            <h3 className="text-2xl font-bold text-white mb-4">Transformation Guide</h3>
            <p className="text-[#D1D5DB] mb-6">Free 47-page guide to start your transformation journey with proven frameworks and actionable strategies.</p>
            <div className="flex gap-4">
              <Button variant="secondary">Download Free</Button>
              <Link href="/assessment">
                <Button>Start Assessment</Button>
              </Link>
            </div>
          </Card>
          <Card className="card-hover">
            <h3 className="text-2xl font-bold text-white mb-4">Wellness Toolkit</h3>
            <p className="text-[#D1D5DB] mb-6">Free wellness resources and exercises to optimize your mental and physical health starting today.</p>
            <div className="flex gap-4">
              <Button variant="secondary">Download Free</Button>
              <Link href="/toolkit">
                <Button>Access Toolkit</Button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Challenge Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">The Challenge We Solve</h2>
          <p className="text-2xl text-[#F59E0B]">Are You Feeling Stuck?</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-[#7C3AED] mb-6">Mental & Emotional</h3>
            <ul className="space-y-4">
              {['Lack of clarity and purpose', 'Overwhelm and burnout', 'Limited self-confidence', 'Emotional instability'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#7C3AED] rounded-full" />
                  <span className="text-[#D1D5DB]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#10B981] mb-6">Physical & Professional</h3>
            <ul className="space-y-4">
              {['Poor health and energy', 'Stagnant career growth', 'Business struggles', 'Outdated skillset'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full" />
                  <span className="text-[#D1D5DB]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Transformation System */}
      <Section className="bg-[#1A1A1A]/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Integrated Transformation System</h2>
          <p className="text-xl text-[#D1D5DB]">A 4-phase approach to total life transformation</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { phase: 'Phase 1', title: 'Mental & Wellness', desc: 'Master mindset, emotional intelligence, and mental clarity', color: 'purple' },
            { phase: 'Phase 2', title: 'Health System', desc: 'Optimize your physical health, energy, and metabolic wellness', color: 'emerald' },
            { phase: 'Phase 3', title: 'Growth & Power', desc: 'Develop personal power, influence, and sustainable growth', color: 'orange' },
            { phase: 'Phase 4', title: 'Business & AI', desc: 'Build successful businesses and leverage AI for scale', color: 'purple' }
          ].map((item, i) => (
            <Card key={i} className="card-hover text-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#10B981] flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[#D1D5DB] text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Programs Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Programs</h2>
          <p className="text-xl text-[#D1D5DB]">Choose the path that fits your transformation goals</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="card-hover">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#7C3AED] mb-4">Personal Transformation</h3>
              <div className="text-3xl font-bold text-white mb-2">$1,997</div>
              <ul className="text-left space-y-2 mb-6">
                {['12-week intensive program', '1-on-1 coaching sessions', 'Custom wellness plan', 'AI-powered progress tracking'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#D1D5DB]">
                    <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Enroll Now</Button>
            </div>
          </Card>
          <Card className="card-hover border-2 border-[#F59E0B]">
            <div className="text-center">
              <div className="bg-[#F59E0B] text-[#0F0F0F] px-3 py-1 rounded-full text-sm font-bold mb-4">MOST POPULAR</div>
              <h3 className="text-2xl font-bold text-[#7C3AED] mb-4">Executive Mastery</h3>
              <div className="text-3xl font-bold text-white mb-2">$5,997</div>
              <ul className="text-left space-y-2 mb-6">
                {['12-month executive program', 'Leadership development', 'Enterprise AI strategy', 'Global network access'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#D1D5DB]">
                    <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="secondary">Enroll Now</Button>
            </div>
          </Card>
          <Card className="card-hover">
            <h3 className="text-2xl font-bold text-[#7C3AED] mb-4 text-center">Digital Products Ecosystem</h3>
            <p className="text-[#D1D5DB] text-center mb-6">Access our complete library of digital tools, templates, and resources for self-paced transformation.</p>
            <Button className="w-full" variant="outline">Explore Products</Button>
          </Card>
        </div>
      </Section>

      {/* Social Share */}
      <Section className="bg-[#1A1A1A]/50">
        <div className="max-w-4xl mx-auto text-center">
          <SocialShare />
        </div>
      </Section>
    </>
  );
}
