"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { navItems } from "./nav-items"

const SCROLL_THRESHOLD = 8
const REVEAL_NEAR_TOP = 40

const Navbar = () => {
    const pathname = usePathname()
    const [hidden, setHidden] = useState(false)
    const lastScrollY = useRef(0)
    const ticking = useRef(false)

    useEffect(() => {
        lastScrollY.current = window.scrollY

        const handleScroll = () => {
            if (ticking.current) return
            ticking.current = true

            requestAnimationFrame(() => {
                const currentY = window.scrollY
                const delta = currentY - lastScrollY.current

                if (currentY <= REVEAL_NEAR_TOP) {
                    setHidden(false)
                } else if (Math.abs(delta) > SCROLL_THRESHOLD) {
                    setHidden(delta > 0)
                }

                lastScrollY.current = currentY
                ticking.current = false
            })
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            {/* Desktop top nav */}
            <nav
                className={`nav-desktop glass-card ${hidden ? "nav-desktop-hidden" : ""}`}
                aria-label="Primary"
            >
                <Link href="/" className="nav-brand text-headline-sm">
                    Fit<span className="hero-title-accent">.</span>Sai
                </Link>

                <ul className="nav-desktop-list">
                    {navItems.map(({ label, href, icon: Icon }) => {
                        const isActive = pathname === href
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`nav-desktop-link text-button ${isActive ? "nav-link-active" : ""}`}
                                >
                                    <Icon size={16} strokeWidth={2.5} aria-hidden="true" />
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Mobile bottom nav */}
            <nav
                className={`nav-mobile glass-card-active ${hidden ? "nav-mobile-hidden" : ""}`}
                aria-label="Primary"
            >
                {navItems.map(({ label, href, icon: Icon }) => {
                    const isActive = pathname === href
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`nav-mobile-link ${isActive ? "nav-link-active" : ""}`}
                            aria-current={isActive ? "page" : undefined}
                        >
                            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} aria-hidden="true" />
                            <span className="text-label-caps nav-mobile-label">{label}</span>
                        </Link>
                    )
                })}
            </nav>
        </>
    )
}

export default Navbar
