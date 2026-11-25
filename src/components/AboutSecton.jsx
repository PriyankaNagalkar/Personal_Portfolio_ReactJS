
function AboutSection() {
    return (
        <section
            className="text-white py-16 md:py-20 relative overflow-hidden"
            id="about"
        >
            {/* Background Glow */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full" />

            <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16 relative z-10">

                <div
                    className="max-w-5xl mx-auto text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >

                    {/* Section Heading */}
                    <div className="mb-8">
                        <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">
                            Get To Know Me
                        </p>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            More{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                                About
                            </span>{" "}
                            Me.
                        </h2>
                    </div>

                    {/* About Content */}
                    <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">

                        <p>
                            I'm a <strong className="text-white font-semibold">Frontend Developer</strong> with{" "}
                            <strong className="text-primary font-semibold">4.5+ years of experience</strong>{" "}
                            building <strong className="text-white font-medium">responsive, scalable, and user-friendly web applications</strong> using{" "}
                            <strong className="text-primary font-medium">React.js, Vue.js, JavaScript, HTML, and CSS.</strong>
                        </p>

                        <p>
                            My experience includes developing{" "}
                            <strong className="text-white font-medium">reusable UI components</strong>, integrating{" "}
                            <strong className="text-primary font-medium">REST APIs</strong>, managing application state using{" "}
                            <strong className="text-primary font-medium">Vuex and Pinia</strong>, and{" "}
                            <strong className="text-white font-medium">modernizing legacy applications.</strong>
                        </p>

                        <p>
                            I focus on writing <strong className="text-white font-medium">maintainable code</strong>, improving{" "}
                            <strong className="text-primary font-medium">application performance</strong>, building consistent user interfaces, and delivering{" "}
                            <strong className="text-white font-medium">reliable solutions</strong> that meet business requirements.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection
