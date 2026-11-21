import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = {
  default:
    "bg-primary text-primary-foreground border border-primary/20 shadow-[0_8px_24px_-4px_rgba(37,99,235,0.4),inset_0_1px_0_rgba(255,255,255,0.22)] hover:bg-primary/92 hover:shadow-[0_12px_30px_-4px_rgba(37,99,235,0.52)]",
  destructive: "bg-red-500 text-white hover:bg-red-500/90",
  outline:
    "border border-border bg-card/90 text-foreground shadow-sm backdrop-blur-md hover:border-primary/45 hover:bg-surface hover:text-primary",
  secondary:
    "border border-primary/20 bg-primary/10 text-primary shadow-sm hover:bg-primary hover:text-primary-foreground",
  ghost: "text-muted-foreground hover:bg-surface hover:text-foreground",
  link: "text-primary underline-offset-4 hover:underline",
}

const sizeVariants = {
  default: "h-10 px-4 py-2 rounded-xl",
  sm: "h-9 rounded-xl px-3.5 text-xs",
  lg: "h-12 rounded-2xl px-7 text-sm sm:text-base",
  icon: "h-10 w-10 rounded-xl",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: keyof typeof buttonVariants
  size?: keyof typeof sizeVariants
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-semibold ring-offset-background transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out md:hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
