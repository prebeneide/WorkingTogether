import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ 
  className, 
  type,
  variant = "default",
  ...props 
}: React.ComponentProps<"input"> & {
  variant?: "default" | "glass"
}) {
  const variantClasses = {
    default: "dark:bg-input/30 border-input bg-transparent border shadow-xs",
    glass: "glass border-white/20 dark:border-white/10",
  }
  
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground h-9 w-full min-w-0 rounded-md px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        variantClasses[variant],
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
