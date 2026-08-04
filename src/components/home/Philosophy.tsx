import { Target, Brain, Apple } from "lucide-react"
import Reveal from "@/components/motion/Reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup"

const pillars = [
    {
        icon: Target,
        title: "Precision Science",
        description:
            "Every rep and macro is calculated for your specific biometrics and goals.",
    },
    {
        icon: Brain,
        title: "Mindset",
        description: "Developing the mental fortitude of a pro athlete.",
    },
    {
        icon: Apple,
        title: "Fueling",
        description: "Optimization strategies for energy and recovery.",
    },
]

const Philosophy = () => {
    return (
        <section className="philosophy">
            <Reveal as="div" className="philosophy-header">
                <span className="chip">Methodology</span>
                <h2 className="text-headline-md philosophy-title">
                    The Sai Philosophy
                </h2>
            </Reveal>

            <StaggerGroup as="div" className="philosophy-grid">
                {pillars.map(({ icon: Icon, title, description }) => (
                    <StaggerItem
                        as="div"
                        className="glass-card philosophy-card hover-lift"
                        key={title}
                    >
                        <span className="philosophy-icon">
                            <Icon size={20} strokeWidth={2.25} aria-hidden="true" />
                        </span>
                        <h3 className="text-headline-sm philosophy-card-title">
                            {title}
                        </h3>
                        <p className="text-body-md philosophy-card-desc">
                            {description}
                        </p>
                    </StaggerItem>
                ))}
            </StaggerGroup>
        </section>
    )
}

export default Philosophy