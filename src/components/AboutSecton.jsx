
import { BriefcaseBusiness, Code2, MonitorSmartphone } from "lucide-react"

function AboutSection() {

    const stats = [
        {
            id: 1,
            icon: BriefcaseBusiness,
            value: "5+",
            label: "Years Experience"
        },
        {
            id: 2,
            icon: Code2,
            value: "React & Vue",
            label: "Frontend Skills"
        },
        {
            id: 3,
            icon: MonitorSmartphone,
            value: "UI/UX",
            label: "Responsive Design"
        }
    ]

    return (
        <section
            className="text-white mt-20 py-16 relative overflow-hidden"
            id="about"
        >

            {/* Background Glow */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 relative z-10">

                <div className="max-w-4xl mx-auto">

                    {/* LEFT SIDE - About Content */}
                    <div data-aos="fade-right">

                        <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">
                            Get To Know Me
                        </p>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            More{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-white">
                                About
                            </span>{" "}
                            Me.
                        </h2>

                        <p className="text-gray-400 text-base lg:text-lg mb-5 leading-relaxed">
                            I'm a Frontend Developer with 5 years of experience building and maintaining responsive, scalable web applications using React.js, Vue.js, JavaScript, HTML, and CSS. Experienced in developing reusable components, integrating REST APIs, managing application state with Vuex and Pinia, and modernizing existing applications. I focus on creating maintainable code, improving UI performance, and delivering seamless user experiences.

                        </p>

                        <p className="text-gray-400 text-base lg:text-lg mb-10 leading-relaxed">
                            I specialize in React.js and Vue.js, with
                            strong knowledge of JavaScript, HTML, CSS,
                            and modern frontend technologies. I enjoy
                            creating reusable components, improving UI
                            performance, and transforming ideas into
                            seamless user experiences.
                        </p>



                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutSection
