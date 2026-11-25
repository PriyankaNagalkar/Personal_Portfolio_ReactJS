
import {
    Award,
    Calendar,
    ExternalLink,
    ShieldCheck,
    GraduationCap
} from "lucide-react"

import certificateImage from "../assets/newton-certificate.webp"

function CertificationsSection() {

    const certification = {
        title: "Full Stack Web Development",
        organization: "Newton School",
        date: "13 March 2022",
        description:
            "Successfully completed a 6-month Full Stack Web Development program covering HTML, CSS, JavaScript, React.js, Element UI, Element Plus and Bootstrap."
    }

    return (
        <section
            className="text-white py-16 overflow-hidden"
            id="certificates"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-10">

                {/* Section Heading */}
                <div
                    className="text-center mb-12"
                    data-aos="fade-up"
                >
                    <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
                        Achievements
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold">
                        Certifications.
                    </h2>
                </div>

                {/* Certification Card */}
                <div
                    className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#111a3e] border border-[#1f1641] p-6 md:p-8 rounded-2xl group hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)] transition-all duration-500"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >

                    {/* Left Content */}
                    <div>

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-12 h-12 rounded-xl bg-[#050816] border border-gray-700 flex items-center justify-center group-hover:border-primary/60 transition-colors duration-300">
                                <Award
                                    size={25}
                                    className="text-primary"
                                />
                            </div>

                            <span className="text-primary text-sm font-semibold">
                                Certificate of Achievement
                            </span>

                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-5 text-xs text-gray-400">

                            <span className="flex items-center gap-2">
                                <ShieldCheck
                                    size={15}
                                    className="text-primary"
                                />
                                {certification.organization}
                            </span>

                            <span className="flex items-center gap-2">
                                <Calendar size={15} className="text-primary" />
                                {certification.date}
                            </span>

                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                            {certification.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {certification.description}
                        </p>

                        <div className="flex items-center gap-2 text-xs text-primary font-semibold mb-7">
                            <GraduationCap size={16} />
                            Successfully Completed with Distinction
                        </div>

                        <a
                            href={certificateImage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                        >
                            View Certificate
                            <ExternalLink size={15} />
                        </a>

                    </div>

                    {/* Right Certificate Preview */}
                    <div className="relative">

                        <div className="overflow-hidden rounded-xl border border-gray-700 group-hover:border-primary/50 transition-colors duration-300">
                            <a
                                href={certificateImage}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={certificateImage}
                                    alt="Newton School Full Stack Web Development Certificate"
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default CertificationsSection
