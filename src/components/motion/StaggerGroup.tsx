"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ElementType, ReactNode } from "react"
import { staggerContainer, staggerItem, viewport } from "@/lib/motion"

type StaggerGroupProps = {
    children: ReactNode
    as?: ElementType
    /** Seconds between each child's animation start. */
    stagger?: number
    className?: string
}

type StaggerItemProps = {
    children: ReactNode
    as?: ElementType
    className?: string
    glow?: boolean
}

/**
 * Parent: animates its own viewport-entry, then hands timing down to
 * <StaggerItem> children via variant propagation.
 *
 * NOTE: StaggerGroup and StaggerItem are separate named exports rather
 * than StaggerGroup.Item — Next.js Server Components can't see static
 * properties attached to an imported Client Component, only the
 * component reference itself, so a dot-property would resolve to
 * undefined when used from a server-rendered parent (e.g. HowItWorks.tsx).
 *
 * Usage:
 *   <StaggerGroup as="ul" className="philosophy-grid">
 *     {items.map(i => <StaggerItem as="li" key={i.id}>...</StaggerItem>)}
 *   </StaggerGroup>
 */
export const StaggerGroup = ({ children, as = "div", stagger = 0.12, className }: StaggerGroupProps) => {
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
            variants={staggerContainer(stagger)}
        >
            {children}
        </MotionTag>
    )
}

export const StaggerItem = ({ children, as = "div", className, glow }: StaggerItemProps) => {
    const MotionTag = motion[as as "div"] ?? motion.div

    const handleMouseMove = glow
        ? (e: React.MouseEvent<HTMLElement>) => {
            const card = e.currentTarget
            const rect = card.getBoundingClientRect()
            card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
            card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
        }
        : undefined

    // `card-glow` is what actually paints the cursor-tracking spotlight
    // (see globals.css) — without it, --mouse-x/--mouse-y are set but
    // nothing renders them, so glow must always carry this class.
    const combinedClassName = glow ? [className, "card-glow"].filter(Boolean).join(" ") : className

    return (
        <MotionTag
            className={combinedClassName}
            variants={staggerItem}
            onMouseMove={handleMouseMove}
        >
            {children}
        </MotionTag>
    )
}

export default StaggerGroup