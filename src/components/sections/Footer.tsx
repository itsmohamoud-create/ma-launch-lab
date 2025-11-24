# 5️⃣  FOOTER
cat > src/components/sections/Footer.tsx << 'EOF'
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-black-velvet)] border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold sovereign-text mb-2">MA Launch Lab</h3>
        <p className="text-gray-400 max-w-md mx-auto mb-6">Empowering the next generation of leaders through free, quality education.</p>

        <nav className="flex justify-center gap-6 text-sm text-gray-400 mb-6">
          <a href="#" className="hover:text-[var(--color-gold-primary)] transition-colors">About</a>
          <a href="#" className="hover:text-[var(--color-gold-primary)] transition-colors">Courses</a>
          <a href="#" className="hover:text-[var(--color-gold-primary)] transition-colors">Resources</a>
          <a href="#" className="hover:text-[var(--color-gold-primary)] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 border-t border-white/10 pt-6">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-[var(--color-purple-royal)]" />
          <span>for students worldwide</span>
        </div>

        <p className="text-xs text-gray-500 mt-2">© 2024 MA Launch Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}
EOF
