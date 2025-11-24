import { ReactNode, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'glass'
  size?: 'md' | 'lg'
}

export function Button({ children, variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-royal to-gold-primary text-black-pure hover:from-purple-deep hover:to-gold-bright',
    glass: 'glass-hover'
  }
  const sizes = {
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button 
      className={cn(
        'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )} 
      {...props}
    >
      {children}
    </button>
  )
}import { ReactNode, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'glass'
  size?: 'md' | 'lg'
}

export function Button({ children, variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-royal to-gold-primary text-black-pure hover:from-purple-deep hover:to-gold-bright',
    glass: 'glass-hover' >> src/components/ui/Button.tsx
echo  } >> src/components/ui/Button.tsx
echo  const sizes = { >> src/components/ui/Button.tsx
echo  md: \px-6 py-3',
    <button 
      className={cn(
        'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )} 
      {...props}
    >
      {children}
    </button>
  )
}
