import Link from "next/link"
import { AtSign, Mail, Phone } from "lucide-react"

const footerLinks = [
    {
        heading: "Product",
        links: [
            { label: "Live Sessions", href: "/coming-soon" },
            { label: "On-Demand Library", href: "/coming-soon" },
            { label: "Coaches", href: "/coming-soon" },
            { label: "Plans & Pricing", href: "/coming-soon" },
        ],
    },
    {
        heading: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Careers", href: "/coming-soon" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        heading: "Legal",
        links: [
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Acknowledgement", href: "/acknowledgement" },
        ],
    },
]

const socialLinks = [
    {
        icon: AtSign,
        label: "Instagram",
        href: "#"
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:nithin.sai13@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        href: "tel:0405639615",
    },
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <span className="text-headline-sm footer-logo">Fit with Sai</span>
                    <p className="text-body-md footer-tagline">
                        Live and on-demand coaching, built around your week — not a gym's.
                    </p>
                    <div className="footer-social">
                        {socialLinks.map(({ icon: Icon, label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                aria-label={label}
                                className="footer-social-link"
                            >
                                <Icon size={18} strokeWidth={2} aria-hidden="true" />

                            </Link>
                        ))}
                    </div>
                </div>

                <nav className="footer-cols" aria-label="Footer">
                    {footerLinks.map((col) => (
                        <div className="footer-col" key={col.heading}>
                            <span className="text-label-caps footer-col-heading">
                                {col.heading}
                            </span>
                            <ul className="footer-col-links">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="footer-link">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>

            <div className="footer-bottom">
                <p className="text-label-caps footer-copyright">
                    © {new Date().getFullYear()} Fit with Sai. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
