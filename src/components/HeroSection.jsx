
import { Download } from "lucide-react"
import profile from "../assets/profile.png"

function HeroSection() {
    return (
        <section
            className="relative w-full min-h-[calc(100vh-88px)] flex items-center overflow-hidden"
            data-aos="zoom-in-up"
        >
            {/* Background glow */}
            <div className="absolute top-0 inset-x-0 h-64 flex items-start pointer-events-none">
                <div className="h-24 w-2/3 bg-linear-to-br from-[#0c7fac] blur-2xl opacity-40" />
                <div className="h-20 w-3/4 bg-linear-to-r from-[#289eff] opacity-40 blur-2xl" />
            </div>

            {/* Main container */}
            <div className="w-full px-5 sm:px-8 md:px-12 lg:px-12 max-w-7xl mx-auto relative">

                {/* Two column grid */}
                <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center relative py-12 md:py-16">

                    {/* LEFT SIDE - Content */}
                    <div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                                Hi, I'm{" "}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-cyan-200 to-white">
                                    Priyanka
                                </span>
                                👋
                            </h1>

                            <h2 className="text-cyan-400 text-xl md:text-2xl font-semibold mt-3">
                                Frontend Developer
                            </h2>

                            <p className="text-gray-400 text-sm mt-2">
                                5 Years of Experience | React.js | Vue.js | JavaScript
                            </p>
                        </div>

                        <p className="text-gray-300 pt-6 text-center lg:text-left max-w-xl leading-relaxed">
                            Frontend Developer with 4+ years of experience in HTML, CSS, JavaScript, React.js and Vue.js, specializing
in responsive and high-performance web applications. Skilled in developing reusable components, optimizing
UI performance, and translating design mockups into pixel-perfect user interfaces, building interactive user
interfaces and optimizing web performance across devices
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 pt-8 flex-col sm:flex-row sm:w-max mx-auto lg:mx-0">

                            <a
                                href="#contact"
                                className="px-6 md:px-7 py-3 rounded-full relative group
  w-full sm:w-max flex justify-center hover:shadow-lg
  hover:shadow-cyan-500/30 transition-all duration-300"
                            >
                                <span className="absolute inset-0 rounded-3xl
    bg-primary border-2 border-transparent
    group-hover:scale-105 transition-all" />

                                <span className="relative flex items-center text-white">
                                    Hire Me
                                </span>
                            </a>

                            <a
                                href="/resume.pdf"
                                download="Priyanka_Nagalkar_Resume.pdf"
                                className="border border-cyan-400 px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center items-center hover:scale-105 transition-all"
                            >
                                <Download size={18} className="text-primary" />
                                <span className="pl-2 text-primary">
                                    Download resume
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Profile Image */}
                    <div className="flex justify-center lg:justify-end items-center relative">

                        {/* Background glow */}
                        <div className="absolute w-5/6 h-5/6 bg-linear-to-r from-[#0c64ac] to-primary opacity-25 blur-3xl rounded-full" />

                        {/* Image wrapper */}
                        <div className="relative z-10
    w-[280px] h-[320px]
    sm:w-[300px] sm:h-[340px]
    lg:w-[340px] lg:h-[370px]
    border border-cyan-500 shadow-lg
    rounded-[30%_70%_70%_30%/30%_30%_70%_70%]
    overflow-hidden">

                            <img
                                src={profile}
                                alt="Priyanka Profile"
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection
