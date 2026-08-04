import type { Transition, Variants } from "motion/react"

/**
 * Central motion tokens.
 *
 * Every animated component in the app should import from here instead of
 * writing its own duration/easing/variant. Same idea as the CSS custom
 * properties in globals.css — one place to tune the feel of the whole site.
 */

/* ---------------------------------- */
/* Timing                              */
/* ---------------------------------- */

export const EASE_OUT = [0.16, 1, 0.3, 1] as const // fast start, soft landing
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const

export const DURATION = {
    fast: 0.2,
    base: 0.5,
    slow: 0.8,
} as const

export const springSnappy: Transition = {
    type: "spring",
    stiffness: 420,
    damping: 32,
    mass: 0.8,
}

export const springSoft: Transition = {
    type: "spring",
    stiffness: 200,
    damping: 26,
}

/* ---------------------------------- */
/* Scroll-reveal viewport settings     */
/* ---------------------------------- */

// once: true means it never re-plays after the first time it's seen —
// prevents the "animate every time I scroll past it" feeling.
export const viewport = { once: true, margin: "-15% 0px -15% 0px" }

/* ---------------------------------- */
/* Reveal variants (used by <Reveal>)  */
/* ---------------------------------- */

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE_OUT } },
}

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: DURATION.slow, ease: EASE_OUT } },
}

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1, transition: { duration: DURATION.base, ease: EASE_OUT } },
}

export const revealVariants = { fadeUp, fadeIn, scaleIn }
export type RevealVariant = keyof typeof revealVariants

/* ---------------------------------- */
/* Stagger containers (grids/lists)    */
/* ---------------------------------- */

export function staggerContainer(stagger = 0.12, delayChildren = 0): Variants {
    return {
        hidden: {},
        show: {
            transition: { staggerChildren: stagger, delayChildren },
        },
    }
}

export const staggerItem: Variants = fadeUp

/* ---------------------------------- */
/* Shared hover/tap presets            */
/* ---------------------------------- */

export const hoverLift = {
    whileHover: { y: -4, transition: springSnappy },
    whileTap: { y: -1, scale: 0.99 },
}

export const hoverScale = {
    whileHover: { scale: 1.03, transition: springSnappy },
    whileTap: { scale: 0.97 },
}
