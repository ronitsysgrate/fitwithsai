"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { staggerContainer, staggerItem, hoverScale } from "@/lib/motion"

const MotionLink = motion(Link)

const ComingSoon = () => {
    const prefersReducedMotion = useReducedMotion()

    return (
        <main className="construction">
            <motion.div
                className="construction-content"
                initial="hidden"
                animate="show"
                variants={staggerContainer(0.12, 0.15)}
            >

                <motion.span className="chip construction-chip" variants={staggerItem}>
                    <span className="hero-pulse" aria-hidden="true" />
                    Coming Soon
                </motion.span>

                <motion.h1 className="text-display-lg construction-title" variants={staggerItem}>
                    Something new is
                    <br />
                    <span className="hero-title-accent">on the way.</span>
                </motion.h1>

                <motion.p className="text-body-lg construction-sub" variants={staggerItem}>
                    We&apos;re building this page right now. Check back soon — or head
                    back home in the meantime.
                </motion.p>

                <motion.div variants={staggerItem}>
                    <MotionLink
                        href="/"
                        className="btn-secondary"
                        whileHover={prefersReducedMotion ? undefined : hoverScale.whileHover}
                        whileTap={prefersReducedMotion ? undefined : hoverScale.whileTap}
                    >
                        Back to Home
                    </MotionLink>
                </motion.div>
            </motion.div>
        </main>
    )
}

export default ComingSoon