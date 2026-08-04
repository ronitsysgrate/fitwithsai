import Image from "next/image"
import Reveal from "@/components/motion/Reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup"

const steps = [
    {
        number: "01",
        title: "Pick your path",
        description:
            "Browse coaches and programs by goal, then book a live class time or grab something from the on-demand library.",
        image: "/how-it-works-1.jpg",
        alt: "Person choosing a workout program on a laptop",
    },
    {
        number: "02",
        title: "Show up, anywhere",
        description:
            "Join from your phone or laptop. Your coach sees you live and corrects your form in real time, just like in person.",
        image: "/how-it-works-2.jpg",
        alt: "Person following a live streamed workout at home",
    },
    {
        number: "03",
        title: "Track the gains",
        description:
            "Your plan adjusts week to week based on how you're doing, and every session logs straight to your progress dashboard.",
        image: "/how-it-works-3.jpg",
        alt: "Fitness progress dashboard on a phone screen",
    },
]

const HowItWorks = () => {
    return (
        <section className="how">
            <Reveal as="div" className="how-header">
                <span className="chip">How It Works</span>
                <h2 className="text-headline-md how-title">
                    Three steps to your first session
                </h2>
                <p className="text-body-md how-sub">
                    No equipment to buy, no gym commute. Just pick a time, log in, and
                    let a real coach guide the workout.
                </p>
            </Reveal>

            <StaggerGroup as="ol" className="how-grid" stagger={0.15}>
                {steps.map((step) => (
                    <StaggerItem as="li" className="how-step" key={step.number}>
                        <div className="how-step-media">
                            <Image
                                src={step.image}
                                alt={step.alt}
                                fill
                                sizes="(min-width: 768px) 33vw, 100vw"
                                className="how-step-img"
                            />
                            <span className="how-step-badge text-headline-sm">
                                {step.number}
                            </span>
                        </div>
                        <h3 className="text-headline-sm how-step-title">{step.title}</h3>
                        <p className="text-body-md how-step-desc">{step.description}</p>
                    </StaggerItem>
                ))}
            </StaggerGroup>
        </section>
    )
}

export default HowItWorks