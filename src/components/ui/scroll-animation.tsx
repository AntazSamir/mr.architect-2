import * as React from "react"
import { motion, useInView, Variants } from "framer-motion"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur"

interface ScrollAnimationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onDragOver'> {
  children: React.ReactNode
  type?: AnimationType
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
}

const animations: Record<AnimationType, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-left": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  "fade-right": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  "scale": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  "blur": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" }
  }
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  type = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  threshold = 0.2,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[type]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Smooth easing
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
      {...(props as any)}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for animating children in sequence
interface StaggerContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onDragOver'> {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
  once?: boolean
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  className = "",
  once = true,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.div>
  )
}

// Child component for stagger animations
interface StaggerItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onDragOver'> {
  children: React.ReactNode
  className?: string
  type?: AnimationType
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = "",
  type = "fade-up",
  ...props
}) => {
  return (
    <motion.div
      variants={animations[type]}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={{ willChange: "transform, opacity" }}
      {...(props as any)}
    >
      {children}
    </motion.div>
  )
}
