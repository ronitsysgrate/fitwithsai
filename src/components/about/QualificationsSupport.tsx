import { CheckCircle2, UsersRound } from "lucide-react"
import Reveal from "@/components/motion/Reveal"
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup"

const qualifications = [
    "Bachelor Degree in Hospitality & Cookery",
    "Certificate III in Fitness",
    "Certificate IV in Fitness",
    "Certificate IV in Training & Assessment",
    "Diploma of Mental Health",
    "First Aid & CPR",
    "Working With Children Check",
    "Police Check (Clear)",
]

const supportGoals = [
    "To improve their health and fitness",
    "To build confidence and independence",
    "To manage health conditions",
    "To learn healthy habits and meal skills",
    "To boost mental wellbeing",
    "To stay active and connected in their community",
    "And more",
]

const QualificationsSupport = () => {
    return (
        <section className="quals">
            <div className="quals-grid">
                {/* Qualifications column */}
                <Reveal as="div" className="quals-col">
                    <span className="text-label-caps quals-col-label">
                        Qualifications
                    </span>

                    <StaggerGroup as="ul" className="quals-list" stagger={0.06}>
                        {qualifications.map((item) => (
                            <StaggerItem as="li" className="quals-list-item" key={item}>
                                <CheckCircle2
                                    size={18}
                                    strokeWidth={2.25}
                                    className="quals-list-icon"
                                    aria-hidden="true"
                                />
                                <span className="text-body-md">{item}</span>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>

                    <button className="btn-secondary btn-hover-glow quals-cta">
                        View All Qualifications
                    </button>
                </Reveal>

                {/* Who I Support column */}
                <Reveal as="div" className="quals-col" delay={0.1}>
                    <span className="text-label-caps quals-col-label">
                        Who I Support
                    </span>

                    <p className="text-body-md quals-support-intro">
                        I provide support for people of all ages, genders and
                        abilities who want:
                    </p>

                    <StaggerGroup as="ul" className="quals-list" stagger={0.06}>
                        {supportGoals.map((item) => (
                            <StaggerItem as="li" className="quals-list-item" key={item}>
                                <CheckCircle2
                                    size={18}
                                    strokeWidth={2.25}
                                    className="quals-list-icon"
                                    aria-hidden="true"
                                />
                                <span className="text-body-md">{item}</span>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </Reveal>

                {/* Highlight card */}
                <Reveal
                    as="div"
                    className="glass-card quals-highlight"
                    variant="scaleIn"
                    delay={0.2}
                >
                    <span className="quals-highlight-icon">
                        <UsersRound size={22} strokeWidth={2.25} aria-hidden="true" />
                    </span>
                    <p className="text-body-md quals-highlight-text">
                        I align all supports with your goals to help you live a
                        stronger, healthier and more confident life.
                    </p>
                </Reveal>
            </div>
        </section>
    )
}

export default QualificationsSupport