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

export const StaggerItem = ({ children, as = "div", className }: StaggerItemProps) => {
    const MotionTag = motion[as as "div"] ?? motion.div
    return (
        <MotionTag className={className} variants={staggerItem}>
            {children}
        </MotionTag>
    )
}

export default StaggerGroup