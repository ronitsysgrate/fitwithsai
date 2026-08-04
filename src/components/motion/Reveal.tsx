"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ElementType, ReactNode } from "react"
import { revealVariants, viewport, type RevealVariant } from "@/lib/motion"

type RevealProps = {
    children: ReactNode
    /** Which variant from lib/motion.ts to use. Defaults to "fadeUp". */
    variant?: RevealVariant
    /** Stagger delay in seconds — handy for offsetting siblings without a stagger container. */
    delay?: number
    /** Render as a different element/component, e.g. "li", "h2", motion-compatible components. */
    as?: ElementType
    className?: string
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Respects prefers-reduced-motion by skipping the animation entirely
 * (renders content at its final, visible state).
 *
 * Usage:
 *   <Reveal><h2>Heading</h2></Reveal>
 *   <Reveal variant="scaleIn" delay={0.1} as="li">...</Reveal>
 */
const Reveal = ({ children, variant = "fadeUp", delay = 0, as = "div", className }: RevealProps) => {
    const prefersReducedMotion = useReducedMotion()
    const MotionTag = motion[as as "div"] ?? motion.div

    if (prefersReducedMotion) {
        const Static = as as ElementType
        return <Static className={className}>{children}</Static>
    }

    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={revealVariants[variant]}
            transition={{ delay }}
        >
            {children}
        </MotionTag>
    )
}

export default Reveal
