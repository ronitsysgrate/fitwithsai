import Image from "next/image"
import { Heart } from "lucide-react"
import Reveal from "@/components/motion/Reveal"

const AboutStory = () => {
    return (
        <section className="about-story">
            <div className="about-story-grid">
                {/* Image column — small, fixed-width, doesn't dominate */}
                <Reveal as="div" className="about-story-media" variant="scaleIn">
                    <div className="about-story-media-frame">
                        <Image
                            src="/sai.jpeg"
                            alt="Sai, founder of Fit With Sai"
                            fill
                            sizes="(min-width: 1024px) 280px, 220px"
                            className="about-story-media-img"
                        />
                    </div>
                    <span className="about-story-media-caption text-label-caps">
                        Sai — Founder, Fit With Sai
                    </span>
                </Reveal>

                {/* Text column — each paragraph reveals as the reader scrolls to it */}
                <div className="about-story-content">
                    <Reveal as="p" className="text-body-lg about-story-lead">
                        I didn&apos;t begin my career in a gym.
                    </Reveal>

                    <Reveal as="p" className="text-body-md about-story-para">
                        My journey started in professional kitchens, where I spent more
                        than 14 years building a career from the ground up and eventually
                        becoming a Head Chef. Long hours, pressure, leadership and
                        responsibility — but they also taught me
                        something more important: I found purpose in helping people grow.
                    </Reveal>

                    <Reveal as="p" className="text-body-md about-story-para">
                        That purpose led me to become a Trainer and Assessor, and
                        eventually into the world of fitness.
                    </Reveal>

                    <Reveal as="p" className="text-body-md about-story-para">
                        Fitness became more than training for me. It became a way to
                        build strength through busy seasons of life, to keep moving
                        forward when life felt demanding, and to become healthier for
                        the people who matter most.
                    </Reveal>

                    <Reveal as="p" className="text-body-md about-story-para">
                        Today, I work as a Fitness and Hospitality Trainer and Assessor,
                        and as a WeFlex Fitness Trainer, delivering personalised fitness support
                        for people of all ages and abilities, including NDIS participants.
                    </Reveal>

                    <Reveal as="p" className="text-body-md about-story-para">
                        But behind every goal I chase is my family.
                    </Reveal>

                    {/* Family highlight — its own gentle scale-in, feels like a pause */}
                    <Reveal
                        as="div"
                        className="glass-card about-story-family hover-lift"
                        variant="scaleIn"
                    >
                        <span className="about-story-family-icon">
                            <Heart size={20} strokeWidth={2.25} aria-hidden="true" />
                        </span>
                        <p className="text-body-md about-story-family-text">
                            My wife, <strong>Meera</strong>, a Social Worker whose
                            compassion inspires me, and our beautiful daughter,{" "}
                            <strong>Janaki</strong>, are the heart of my journey. They
                            remind me that being fit is not simply about looking better.
                        </p>
                    </Reveal>

                    <Reveal as="p" className="text-body-md about-story-para">
                        It is about having the strength to carry responsibility, the
                        energy to create memories, and the health to be present for the
                        people you love.
                    </Reveal>

                    <Reveal as="p" className="text-body-md about-story-para">
                        That belief became Fit With Sai.
                    </Reveal>

                    <Reveal as="p" className="text-body-md about-story-para">
                        I created it for everyday people balancing careers, families,
                        responsibilities and dreams — people who want to become stronger
                        and healthier without losing the life they are working so hard
                        to build.
                    </Reveal>

                    <Reveal as="p" className="text-body-md about-story-para">
                        My journey is still being written. And through Fit With Sai, my
                        purpose is to help others become stronger for theirs.
                    </Reveal>

                    <Reveal as="div" className="about-story-signature" variant="fadeIn">
                        <p className="text-body-md about-story-signature-line">
                            With gratitude for the journey,
                        </p>
                        <p className="about-story-signature-name">Sai</p>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default AboutStory