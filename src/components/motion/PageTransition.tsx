"use client"

import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { DURATION, EASE_OUT } from "@/lib/motion"

/**
 * Drop this inside <body> in layout.tsx, wrapping {children}.
 * Keys on the pathname so each route change triggers a fresh
 * fade/slide-in — gives navigation a "loading in" feel without
 * a spinner, and covers the initial page-load animation too.
 */
const PageTransition = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait" initial={true}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: DURATION.fast, ease: EASE_OUT }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition
