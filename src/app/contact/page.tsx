import { Phone, MessageCircle, Mail } from "lucide-react"
import Reveal from "@/components/motion/Reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup"

const methods = [
    {
        icon: Phone,
        title: "Call",
        description:
            "Talk it through directly — best for quick questions or booking your first session.",
        value: "0405639615",
        href: "tel:0405639615",
        cta: "Call now",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description:
            "Message anytime, no phone tag. The fastest way to reach a coach between sessions.",
        value: "0405639615",
        href: "https://wa.me/0405639615",
        cta: "Message on WhatsApp",
        external: true,
    },
    {
        icon: Mail,
        title: "Email",
        description:
            "Send over your schedule and goals — a coach will reply within one business day.",
        value: "nithin.sai13@gmail.com",
        href: "mailto:nithin.sai13@gmail.com",
        cta: "Send an email",
    },
]

const Page = () => {
    return (
        <section className="contact">
            <Reveal as="div" className="contact-header">
                <span className="chip">Get In Touch</span>
                <h1 className="text-display-lg contact-title">
                    Pick a channel.
                    <br />
                    <span className="contact-title-accent">We&apos;ll take it from there.</span>
                </h1>
                <p className="text-body-lg contact-sub">
                    Questions about coaching, plans, or booking a live session — reach
                    out however&apos;s easiest and a real coach will get back to you.
                </p>
            </Reveal>

            <StaggerGroup as="div" className="contact-grid">
                {methods.map(({ icon: Icon, title, description, value, href, cta, external }) => (
                    <StaggerItem as="div" className="glass-card contact-card hover-lift" key={title}>
                        <span className="contact-icon">
                            <Icon size={22} strokeWidth={2.25} aria-hidden="true" />
                        </span>

                        <h2 className="text-headline-sm contact-card-title">{title}</h2>
                        <p className="text-body-md contact-card-desc">{description}</p>
                        <span className="text-label-caps contact-card-value">{value}</span>

                        <a
                            href={href}
                            className="btn-primary btn-hover-glow contact-card-cta"
                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                            {cta}
                        </a>
                    </StaggerItem>
                ))}
            </StaggerGroup>
        </section>
    )
}

export default Page