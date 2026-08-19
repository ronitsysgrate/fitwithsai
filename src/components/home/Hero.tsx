"use client"

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { staggerContainer, staggerItem, hoverScale } from '@/lib/motion'
import { useRouter } from 'next/navigation'

const Hero = () => {
    const prefersReducedMotion = useReducedMotion()
    const router = useRouter();

    return (
        <section className="hero">
            {/* Background layer */}
            <div className="hero-media">
                <Image
                    src="/hero-bg.png"
                    alt="Athlete training during a live online fitness session"
                    fill
                    priority
                    className="hero-media-img"
                    sizes="100vw"
                />
                <div className="hero-overlay" />
            </div>

            {/* Content layer — animates in once on mount, not on scroll */}
            <motion.div
                className="hero-content"
                initial="hidden"
                animate="show"
                variants={staggerContainer(0.12, 0.15)}
            >
                <motion.span className="chip hero-eyebrow" variants={staggerItem}>
                    <span className="hero-pulse" aria-hidden="true" />
                    Live · Online · On-Demand
                </motion.span>

                <motion.h1 className="text-display-lg hero-title" variants={staggerItem}>
                    Your coach is online.
                    <br />
                    <span className="hero-title-accent">Your only excuse just clocked out.</span>
                </motion.h1>

                <motion.p className="text-body-lg hero-sub" variants={staggerItem}>
                    Stream live sessions with certified coaches, or train on your own
                    schedule with on-demand workouts. No gym required — just you,
                    a screen, and a plan that actually fits your week.
                </motion.p>

                <motion.div className="hero-cta" variants={staggerItem}>
                    <motion.button
                        className="btn-primary"
                        whileHover={prefersReducedMotion ? undefined : hoverScale.whileHover}
                        whileTap={prefersReducedMotion ? undefined : hoverScale.whileTap}
                        onClick={() => router.push('/contact')}
                    >
                        Book Free Consultation
                    </motion.button>
                    <motion.button
                        className="btn-secondary"
                        whileHover={prefersReducedMotion ? undefined : hoverScale.whileHover}
                        whileTap={prefersReducedMotion ? undefined : hoverScale.whileTap}
                        onClick={() => router.push('/about')}
                    >
                        Read More
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Floating stats strip — comes in last, slightly delayed */}
            <motion.div
                className="hero-stats glass-card-active"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="hero-stat">
                    <span className="hero-stat-value text-headline-sm">120+</span>
                    <span className="hero-stat-label text-label-caps">Live sessions / week</span>
                </div>
                <div className="hero-stat-divider" aria-hidden="true" />
                <div className="hero-stat">
                    <span className="hero-stat-value text-headline-sm">24/7</span>
                    <span className="hero-stat-label text-label-caps">On-demand access</span>
                </div>
                <div className="hero-stat-divider" aria-hidden="true" />
                <div className="hero-stat">
                    <span className="hero-stat-value text-headline-sm">40+</span>
                    <span className="hero-stat-label text-label-caps">Happy Clients</span>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero