
import { Calendar, CheckCircle, GraduationCap, University } from "lucide-react"

function Education() {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Engineering",
            field: "Electrical Engineering",
            institution: "Sanmati Engineering College, Washim",
            duration: "2017 - 2021",
            details: "Completed Bachelor's degree in Electrical Engineering.",
            University: "Sant Gadge Baba Amravati University (SGBAU)"
        },
        {
            id: 2,
            degree: "Diploma",
            field: "Electrical Engineering",
            institution: "Government Polytechnic College, Washim",
            duration: "2014 - 2017",
            details: "Completed Diploma in Electrical Engineering.",
            University: "Sant Gadge Baba Amravati University (SGBAU)"
        }
    ]

    return (
        <section
            id="education"
            className="text-white py-20 overflow-hidden"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}
                <div
                    className="text-center mb-14"
                    data-aos="fade-up"
                >
                    <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
                        Learning Path
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold">
                        Education.
                    </h2>
                </div>

                {/* Horizontal Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {educationData.map((edu, index) => (
                        <div
                            key={edu.id}
                            className="group p-6 md:p-7 rounded-2xl bg-[#111a3e] border border-[#1f1641] hover:border-primary/60 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500"
                            data-aos={index === 0 ? "fade-right" : "fade-left"}
                            data-aos-delay={index * 150}
                            data-aos-duration="800"
                        >

                            {/* Icon and Duration */}
                            <div className="flex items-center justify-between gap-3 mb-6">

                                <div className="w-12 h-12 rounded-xl bg-[#050816] border border-gray-700 flex items-center justify-center group-hover:border-primary/60 group-hover:scale-110 transition-all duration-300">
                                    <GraduationCap
                                        size={25}
                                        className="text-primary"
                                    />
                                </div>

                                <div className="flex items-center gap-2 text-xs bg-[#050816] border border-gray-700 px-3 py-2 rounded-full group-hover:border-primary/50 transition-colors duration-300">
                                    <Calendar size={13} className="text-primary" />
                                    {edu.duration}
                                </div>

                            </div>

                            {/* Education Details */}
                            <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                {edu.degree}
                            </h3>

                            <p className="text-primary text-sm font-medium mb-3">
                                {edu.field}
                            </p>

                            <p className="text-gray-400 text-sm mb-4">
                                {edu.institution}
                            </p>

                            <p className="text-gray-400 text-sm mb-4">
                                {edu.University}
                            </p>

                            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                {edu.details}
                            </p>

                            <div className="border-t border-gray-700 pt-4 flex items-center gap-2 text-xs text-primary font-semibold">
                                <CheckCircle size={14} />
                                Successfully Completed
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Education
