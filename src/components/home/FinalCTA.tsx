"use client"

import Reveal from "@/components/motion/Reveal"
import { useRouter } from 'next/navigation'

const FinalCTA = () => {

    const router = useRouter();

    return (
        <section className="final-cta">
            <Reveal as="div" className="final-cta-content" variant="scaleIn">
                <span className="chip">Your Move</span>

                <h2 className="text-display-lg final-cta-title">
                    Stop scrolling.
                    <br />
                    <span className="final-cta-title-accent">Start your first session.</span>
                </h2>

                <p className="text-body-lg final-cta-sub">
                    No contracts, no equipment, no excuses left. Your first live
                    session is free — see what a real coach can do for you this week.
                </p>

                <div className="final-cta-actions">
                    <button onClick={() => router.push('/contact')} className="btn-primary btn-hover-glow">Start Free Session</button>
                    <button onClick={() => router.push('/about')} className="btn-secondary btn-hover-glow">Read More</button>
                </div>
            </Reveal>
        </section>
    )
}

export default FinalCTA