# 2️⃣  BUTTON
cat > src/components/ui/Button.tsx << 'EOF'
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'glass';
  size?: 'md' | 'lg';
}

export function Button({ children, variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300';
  const styles = {
    primary: 'bg-gradient-to-r from-[var(--color-purple-royal)] to-[var(--color-gold-primary)] text-[var(--color-black-pure)] hover:from-[var(--color-purple-deep)] hover:to-[var(--color-gold-bright)] shadow-lg hover:shadow-[var(--color-purple-royal)]/25',
    glass: 'glass-panel glass-hover',
  };
  const sizes = { md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' };
  return <button className={cn(base, styles[variant], sizes[size], className)} {...props}>{children}</button>;
}
EOF
