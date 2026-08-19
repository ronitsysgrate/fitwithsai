import { Dumbbell, Smartphone, ClipboardCheck, UsersRound, Activity, HeartHandshake } from "lucide-react"
import Reveal from "@/components/motion/Reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup"

const services = [
    {
        icon: Dumbbell,
        title: "Personal Training",
        description:
            "Individualised programs to improve strength, fitness, mobility and confidence.",
    },
    {
        icon: Smartphone,
        title: "Weflex mobile personal training",
        description:
            "On-demand personal training delivered locally by qualified trainers, booked flexibly through the Weflex app.",
    },
    {
        icon: ClipboardCheck,
        title: "Strength balance and falls prevention",
        description:
            "Safe and effective exercises to improve balance, flexibility and reduce fall risk.",
    },
    {
        icon: UsersRound,
        title: "Group fitness & community programs",
        description:
            "Fun, inclusive and social group sessions that build fitness and friendship.",
    },
    {
        icon: Activity,
        title: "Healthy lifestyle coaching",
        description:
            "Support with goals, routines, motivation, sleep, stress management and daily habits.",
    },
    {
        icon: HeartHandshake,
        title: "Building a Healthy Life",
        description:
            "Holistic, ongoing support to help you build sustainable habits and a healthier, happier lifestyle.",
    },
]

const Services = () => {

    return (
        <section className="services">
            <Reveal as="div" className="services-header">
                <span className="chip">What I Offer</span>
                <h2 className="text-headline-md services-title">My Services</h2>
            </Reveal>

            <StaggerGroup as="div" className="services-grid">
                {services.map(({ icon: Icon, title, description }) => (
                    <StaggerItem
                        as="div"
                        className="glass-card services-card hover-lift"
                        key={title}
                        glow
                    >
                        <span className="services-icon">
                            <Icon size={20} strokeWidth={2.25} aria-hidden="true" />
                        </span>
                        <h3 className="text-headline-sm services-card-title">
                            {title}
                        </h3>
                        <p className="text-body-md services-card-desc">
                            {description}
                        </p>
                    </StaggerItem>
                ))}
            </StaggerGroup>
        </section>
    )
}

export default Services