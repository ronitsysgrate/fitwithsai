import { Dumbbell, Users, ClipboardCheck, UtensilsCrossed, Activity, UsersRound } from "lucide-react"
import Reveal from "@/components/motion/Reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup"

const services = [
    {
        icon: Dumbbell,
        title: "1:1 Personal Training",
        description:
            "Individualised programs to improve strength, fitness, mobility and confidence.",
    },
    {
        icon: Users,
        title: "Group Fitness & Community Programs",
        description:
            "Fun, inclusive and social group sessions that build fitness and friendship.",
    },
    {
        icon: ClipboardCheck,
        title: "Healthy Lifestyle Coaching",
        description:
            "Support with goals, routines, motivation, sleep, stress management and daily habits.",
    },
    {
        icon: UtensilsCrossed,
        title: "Helping Meal Prep",
        description:
            "Support with planning, preparing and cooking healthy meals that fit your lifestyle.",
    },
    {
        icon: Activity,
        title: "Strength, Balance & Falls Prevention",
        description:
            "Safe and effective exercises to improve balance, flexibility and reduce fall risk.",
    },
    {
        icon: UsersRound,
        title: "Community Participation",
        description:
            "Support to get active in your community and do the things you enjoy.",
    },
]

const Services = () => {

    const handleCardGlow = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget
        const rect = card.getBoundingClientRect()
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    }

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