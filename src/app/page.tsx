export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-black-rich)]">
      {/* HERO SECTION - EXACTLY LIKE YOUR SCREENSHOT */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 sovereign-text">
            MA Transform Lab
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8">
            Transform Your Life Across Every Dimension
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Unlock your full potential through our integrated transformation system 
            combining mental wellness, physical health, business growth, and AI-powered optimization.
          </p>
          
          {/* STATS GRID - EXACT NUMBERS FROM YOUR SCREENSHOT */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-[var(--color-gold-primary)]">750</div>
              <div className="text-gray-300">Human Systems Optimized</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-[var(--color-gold-primary)]">28</div>
              <div className="text-gray-300">Businesses Launched</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-[var(--color-gold-primary)]">15</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-[var(--color-gold-primary)]">5</div>
              <div className="text-gray-300">Continents</div>
            </div>
          </div>

          <div className="text-gray-400 mb-12">
            5 Continents | Canada • UK • Europe • East Africa • Digital Worldwide
          </div>

          <button className="bg-gradient-to-r from-[var(--color-purple-royal)] to-[var(--color-gold-primary)] text-black font-bold text-lg px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            Begin Your Transformation
          </button>
        </div>
      </section>

      {/* FREE RESOURCES - EXACTLY LIKE YOUR SCREENSHOT */}
      <section className="py-20 px-6 bg-[var(--color-black-velvet)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 sovereign-text">
            Free Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Transformation Guide</h3>
              <p className="text-gray-300 mb-6">Free 47-page guide to start your transformation journey</p>
              <button className="bg-[var(--color-purple-royal)] text-white px-6 py-3 rounded-full hover:bg-[var(--color-purple-deep)] transition-colors">
                Download Free
              </button>
            </div>
            
            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Start Assessment</h3>
              <p className="text-gray-300 mb-6">Free personalized assessment</p>
              <button className="bg-[var(--color-purple-royal)] text-white px-6 py-3 rounded-full hover:bg-[var(--color-purple-deep)] transition-colors">
                Begin Assessment
              </button>
            </div>
            
            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Wellness Toolkit</h3>
              <p className="text-gray-300 mb-6">Free wellness resources and exercises</p>
              <button className="bg-[var(--color-purple-royal)] text-white px-6 py-3 rounded-full hover:bg-[var(--color-purple-deep)] transition-colors">
                Get Toolkit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE SECTION - EXACTLY LIKE YOUR SCREENSHOT */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 sovereign-text">
            The Challenge We Solve
          </h2>
          
          <div className="glass-card p-8">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Are You Feeling Stuck?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-[var(--color-gold-primary)] mb-4">Mental & Emotional</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Lack of clarity and purpose</li>
                  <li>• Overwhelm and burnout</li>
                  <li>• Limited self-confidence</li>
                  <li>• Emotional instability</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-[var(--color-gold-primary)] mb-4">Physical & Professional</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Poor health and energy</li>
                  <li>• Stagnant career growth</li>
                  <li>• Business struggles</li>
                  <li>• Outdated skillset</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - EXACTLY LIKE YOUR SCREENSHOT */}
      <section className="py-20 px-6 bg-[var(--color-black-velvet)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 sovereign-text">
            Digital Products Ecosystem
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Metabolic Reset</h3>
              <div className="text-3xl font-bold text-[var(--color-gold-primary)] mb-4">$127</div>
              <p className="text-gray-300 mb-6">90-day metabolic reset plan with executive meal planning system</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✓ 90-day metabolic reset plan</li>
                <li>✓ Executive meal planning system</li>
                <li>✓ Supplement optimization guide</li>
                <li>✓ Energy tracking spreadsheet</li>
              </ul>
              <button className="w-full bg-[var(--color-purple-royal)] text-white py-3 rounded-lg hover:bg-[var(--color-purple-deep)] transition-colors">
                ADD TO CART
              </button>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Digital Business Validator</h3>
              <div className="text-3xl font-bold text-[var(--color-gold-primary)] mb-4">$47</div>
              <p className="text-gray-300 mb-6">7-day validation roadmap with market research templates</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✓ 7-day validation roadmap</li>
                <li>✓ Market research templates</li>
              </ul>
              <button className="w-full bg-[var(--color-purple-royal)] text-white py-3 rounded-lg hover:bg-[var(--color-purple-deep)] transition-colors">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - EXACTLY LIKE YOUR SCREENSHOT */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 sovereign-text">MA Transform Lab</h3>
          <p className="text-gray-400 mb-8">
            Transforming lives across mental, physical, business, and AI dimensions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Programs</h4>
              <div className="text-gray-400 space-y-2">
                <div>Personal Transformation</div>
                <div>Business Accelerator</div>
                <div>Executive Mastery</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <div className="text-gray-400 space-y-2">
                <div>Free Guide</div>
                <div>AI Assessment</div>
                <div>Wellness Toolkit</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <div className="text-gray-400 space-y-2">
                <div>Contact Us</div>
                <div>Global Presence</div>
                <div>Partnerships</div>
              </div>
            </div>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2024 MA Transform Lab. Transforming lives across 5 continents.
          </div>
        </div>
      </footer>
    </main>
  );
}
