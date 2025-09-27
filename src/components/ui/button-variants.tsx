import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Fun variants for children's app
        fun: "bg-gradient-primary text-primary-foreground shadow-fun hover:shadow-glow transform hover:scale-105 animate-pulse-glow",
        learning: "bg-gradient-learning text-secondary-foreground shadow-card hover:shadow-fun transform hover:scale-105 hover:animate-wiggle",
        success: "bg-success text-success-foreground shadow-fun hover:bg-success/90 transform hover:scale-105",
        warning: "bg-warning text-warning-foreground shadow-fun hover:bg-warning/90 transform hover:scale-105",
        playful: "bg-accent text-accent-foreground shadow-fun hover:shadow-glow transform hover:scale-110 hover:animate-bounce",
        hero: "bg-gradient-fun text-primary-foreground shadow-glow hover:shadow-fun transform hover:scale-105 text-lg font-bold animate-float",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);