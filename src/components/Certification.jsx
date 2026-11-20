
import { Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react"

function CertificationsSection() {

    const certifications = [
        {
            id: 1,
            title: "Full Stack Web Development",
            organization: "Web Development Bootcamp",
            date: "Dec 2024",
            description: "Completed a 6-month full-stack web development bootcamp covering HTML, CSS, JavaScript, React.js and Bootstrap.",
            link: "#"
        }
    ]

    return (
        <section className="text-white py-20" id="certificates">

            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* Section Heading */}
                <div className="mb-16">
                    <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
                        Achievements
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Certifications.
                    </h2>
                </div>

                {/* Certification Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {certifications.map((cert) => (

                        <div
                            key={cert.id}
                            data-aos="zoom-in"
                            className="group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
                        >

                            {/* Award Icon */}
                            <div className="absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">
                                <Award className="text-white" size={24} />
                            </div>

                            {/* Organization and Date */}
                            <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-gray-400">

                                <span className="flex items-center gap-1">
                                    <ShieldCheck size={14} className="text-primary" />
                                    {cert.organization}
                                </span>

                                <span className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    {cert.date}
                                </span>

                            </div>

                            {/* Certificate Title */}
                            <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {cert.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                {cert.description}
                            </p>

                            {/* Certificate Link */}
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                            >
                                View Certificate
                                <ExternalLink size={14} />
                            </a>

                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}

export default CertificationsSection
