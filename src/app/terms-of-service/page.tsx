import React from 'react'

const Page = () => {
    return (
        <main className="legal-page privacy-page">
            <div className="legal-page-content privacy-page-content">
                <div>
                    <h1 className="text-headline-md legal-page-title">
                        Terms of Service
                    </h1>
                    <p className="text-body-md privacy-page-updated">
                        Last updated: 19 August 2026
                    </p>
                </div>

                <p className="text-body-md legal-page-text">
                    These Terms of Service (&quot;Terms&quot;) govern your use of this
                    website and the coaching, training and support services provided by
                    Fit With Sai (&quot;I&quot;, &quot;me&quot; or &quot;my&quot;). By
                    using this website or booking a session, you agree to these Terms.
                </p>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        About My Services
                    </h2>
                    <p className="text-body-md legal-page-text">
                        I provide live and on-demand fitness coaching, training programs
                        and related support. Sessions and programs may be delivered in
                        person, online, or through the Weflex app, depending on what
                        you&apos;ve booked.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Bookings &amp; Payments
                    </h2>
                    <ul className="privacy-page-list text-body-md">
                        <li>
                            Sessions, consultations and programs are booked through the
                            website or Weflex app, and are subject to availability.
                        </li>
                        <li>
                            Prices for sessions and programs are as listed at the time of
                            booking and may change from time to time.
                        </li>
                        <li>
                            Payment is due as outlined at checkout or as otherwise agreed
                            with me in writing.
                        </li>
                        <li>
                            Cancellations or rescheduling requests should be made with as
                            much notice as possible; late cancellations may not be
                            eligible for a refund or credit.
                        </li>
                    </ul>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Health &amp; Safety
                    </h2>
                    <p className="text-body-md legal-page-text">
                        You&apos;re responsible for letting me know about any injuries,
                        medical conditions or mobility considerations that may affect
                        your participation. You should consult a medical professional
                        before starting any new exercise program, particularly if you
                        have an existing health condition. Participation in any session
                        or program is at your own risk.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Your Responsibilities
                    </h2>
                    <ul className="privacy-page-list text-body-md">
                        <li>
                            Provide accurate information about your health, fitness level
                            and goals so I can tailor your program safely.
                        </li>
                        <li>
                            Use any equipment, facilities or instructions provided
                            sensibly and as directed.
                        </li>
                        <li>
                            Treat me and other participants with respect during sessions.
                        </li>
                    </ul>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Intellectual Property
                    </h2>
                    <p className="text-body-md legal-page-text">
                        All content on this website — including text, graphics, program
                        materials and branding — belongs to me or is used with
                        permission, and may not be copied, reproduced or distributed
                        without my consent.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Limitation of Liability
                    </h2>
                    <p className="text-body-md legal-page-text">
                        To the extent permitted by law, I am not liable for any injury,
                        loss or damage arising from your participation in a session or
                        program, except where that liability cannot be excluded by law.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Changes to These Terms
                    </h2>
                    <p className="text-body-md legal-page-text">
                        I may update these Terms from time to time. Any changes will be
                        posted on this page with an updated revision date, and continued
                        use of the website or services means you accept the updated
                        Terms.
                    </p>
                </section>

                <section className="privacy-page-section">
                    <h2 className="text-headline-sm privacy-page-section-title">
                        Contact
                    </h2>
                    <p className="text-body-md legal-page-text">
                        If you have questions about these Terms, contact me at{" "}
                        <a href="mailto:nithin.sai13@gmail.com">nithin.sai13@gmail.com</a>.
                    </p>
                </section>
            </div>
        </main>
    )
}

export default Page