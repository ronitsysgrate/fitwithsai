"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { staggerContainer, staggerItem } from "@/lib/motion"

const AboutHero = () => {
    return (
        <section className="hero">
            <div className="hero-media">
                <Image
                    src="/hero-bg.png"
                    alt="Sai, founder of Fit With Sai"
                    fill
                    priority
                    sizes="100vw"
                    className="hero-media-img"
                />
            </div>
            <div className="hero-overlay" />

            <motion.div
                className="hero-content"
                initial="hidden"
                animate="show"
                variants={staggerContainer(0.12, 0.15)}
            >
                <motion.span className="hero-eyebrow chip" variants={staggerItem}>
                    <span className="hero-pulse" aria-hidden="true" />
                    Our Story
                </motion.span>

                <motion.h1 className="text-display-lg hero-title" variants={staggerItem}>
                    The Journey Behind
                    <br />
                    <span className="hero-title-accent">Fit With Sai</span>
                </motion.h1>

                <motion.p className="text-body-lg hero-sub" variants={staggerItem}>
                    A career built in kitchens, a purpose found in people, and a
                    family that gives it all meaning.
                </motion.p>
            </motion.div>

            <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="hero-stat">
                    <span className="text-headline-sm hero-stat-value">14+</span>
                    <span className="text-label-caps hero-stat-label">Years in Hospitality</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat">
                    <span className="text-headline-sm hero-stat-value">Trainer</span>
                    <span className="text-label-caps hero-stat-label">&amp; Assessor</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat">
                    <span className="text-headline-sm hero-stat-value">Family</span>
                    <span className="text-label-caps hero-stat-label">First, Always</span>
                </div>
            </motion.div>
        </section>
    )
}

export default AboutHero