import * as React from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const variants = {
      primary: "bg-purple text-white hover:bg-purple-900 shadow-[0_0_15px_rgba(124,58,237,0.4)] border border-purple/50",
      secondary: "bg-emerald text-white hover:bg-emerald-700",
      outline: "border border-purple text-purple hover:bg-purple/10",
      ghost: "hover:bg-white/10 text-gray-300",
      gold: "bg-gradient-to-r from-gold to-yellow-600 text-black font-bold hover:brightness-110"
    }
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg"
    }
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"
export { Button }
