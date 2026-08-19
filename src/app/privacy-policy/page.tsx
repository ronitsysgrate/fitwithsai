import React from 'react'

const Page = () => {
    return (
        <main className="legal-page privacy-page">
            <div className="legal-page-content privacy-page-content">
                <div>
                    <h1 className="text-headline-md legal-page-title">
                        Privacy Policy
                    </h1>
                    <p className="text-body-md privacy-page-updated">
                        Last updated: 19 August 2026
                    </p>
                </div>

                <p className="text-body-md legal-page-text">
                    Fit With Sai (&quot;I&quot;, &quot;me&quot; or &quot;my&quot;) respects
                    your privacy and is committed to protecting the personal information
                    you share with me. This policy explains what information I collect,
                    how I use it, and the choices you have. It applies to this website
                    and to the coaching, training and support services I provide.
                </p>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Information I Collect
                    </h2>
                    <p className="text-body-md legal-page-text">
                        Depending on how you interact with me, I may collect:
                    </p>
                    <ul className="privacy-page-list text-body-md">
                        <li>
                            <strong>Contact details</strong> — name, email address, phone
                            number and, where relevant, your location.
                        </li>
                        <li>
                            <strong>Booking and enquiry information</strong> — details you
                            provide when requesting a free consultation, booking a session,
                            or contacting me through the website or Weflex app.
                        </li>
                        <li>
                            <strong>Health and fitness information</strong> — goals, fitness
                            level, medical or mobility considerations, and progress data you
                            choose to share so I can safely tailor your program.
                        </li>
                        <li>
                            <strong>Technical information</strong> — basic, non-identifying
                            data such as browser type and general usage of the site,
                            collected automatically to help the site run properly.
                        </li>
                    </ul>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        How I Use Your Information
                    </h2>
                    <p className="text-body-md legal-page-text">
                        I use the information you provide to:
                    </p>
                    <ul className="privacy-page-list text-body-md">
                        <li>Respond to enquiries and book consultations or sessions.</li>
                        <li>
                            Design and deliver safe, personalised training, coaching and
                            support programs.
                        </li>
                        <li>Communicate with you about your sessions and progress.</li>
                        <li>
                            Meet my professional, legal and insurance obligations as a
                            fitness and training provider.
                        </li>
                        <li>Improve this website and the services I offer.</li>
                    </ul>
                    <p className="text-body-md legal-page-text">
                        I do not sell your personal information, and I only use health
                        information for the purpose of providing safe and effective
                        support to you.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Sharing Your Information
                    </h2>
                    <p className="text-body-md legal-page-text">
                        I don&apos;t share your personal information with third parties
                        except where necessary to deliver a service you&apos;ve requested
                        (for example, through the Weflex platform for bookings made via
                        the app), where required by law, or with your consent — such as
                        liaising with another health professional involved in your care.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Data Storage &amp; Security
                    </h2>
                    <p className="text-body-md legal-page-text">
                        I take reasonable steps to keep your information secure and
                        protect it from misuse, loss and unauthorised access. Information
                        is only kept for as long as needed to provide services to you or
                        as required by law.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Cookies
                    </h2>
                    <p className="text-body-md legal-page-text">
                        This website may use basic cookies or similar technologies to
                        help it function properly and to understand general site usage.
                        You can control or disable cookies through your browser settings.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Your Rights
                    </h2>
                    <p className="text-body-md legal-page-text">
                        You can ask to access, correct or delete the personal information
                        I hold about you at any time, and you can withdraw consent to
                        future communications. To make a request, please get in touch
                        using the details below.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Changes to This Policy
                    </h2>
                    <p className="text-body-md legal-page-text">
                        I may update this policy from time to time. Any changes will be
                        posted on this page with an updated revision date.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Contact
                    </h2>
                    <p className="text-body-md legal-page-text">
                        If you have questions about this policy or how your information
                        is handled, contact me at{" "}
                        <a href="mailto:hello@fitwithsai.com.au">hello@fitwithsai.com.au</a>.
                    </p>
                </section>
            </div>
        </main>
    )
}

export default Page