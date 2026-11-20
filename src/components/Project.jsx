
import {ArrowUpRight, Code2 } from "lucide-react"

function Projects() {

    const projects = [
        {
            id: 1,
            title: "Beauty E-commerce Dashboard",
            category: "Frontend Development",
            description:
                "A responsive beauty shopping application featuring product listing, search, wishlist, cart management and product updates.",
            technologies: ["React.js", "Context API", "Bootstrap", "CSS"],
            github: "#",
            live: "#"
        },
        {
            id: 2,
            title: "Business Analytics Dashboard",
            category: "Web Application",
            description:
                "An interactive dashboard featuring analytics, dynamic charts, KPI cards, filtering and centralized state management.",
            technologies: ["React.js", "Redux Toolkit", "Tailwind CSS"],
            github: "#",
            live: "#"
        },
        {
            id: 3,
            title: "Foodie Blog",
            category: "Web Development",
            description:
                "A responsive food blogging website with an attractive interface and user-friendly navigation.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "#",
            live: "#"
        },
        {
            id: 4,
            title: "3DS Entities Widget",
            category: "Frontend Development",
            description:
                "A Vue 3 based embedded widget designed with reusable components and modern frontend architecture.",
            technologies: ["Vue 3", "Vite", "Pinia", "Element Plus"],
            github: "#",
            live: "#"
        }
    ]

    return (
        <section
            id="projects"
            className="text-white py-20 relative overflow-hidden"
        >

            <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

                {/* Section Heading */}
                <div className="mb-16" data-aos="fade-up">

                    <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
                        My Work
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold">
                        Featured <span className="text-primary">Projects.</span>
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl">
                        Here are some of my projects showcasing my
                        frontend development skills and technical expertise.
                    </p>

                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {projects.map((project) => (

                        <div
                            key={project.id}
                            data-aos="zoom-in-up"
                            className="group relative bg-[#111a3e] border border-[#1f1641] rounded-2xl p-7 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]"
                        >

                            {/* Project Icon */}
                            <div className="flex items-center justify-between mb-6">

                                <div className="p-3 rounded-xl bg-[#080f25] border border-gray-800 group-hover:border-primary transition-colors">
                                    <Code2 size={26} className="text-primary" />
                                </div>

                                <span className="text-xs text-primary uppercase tracking-widest">
                                    {project.category}
                                </span>

                            </div>

                            {/* Project Details */}
                            <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-7">

                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-3 py-1.5 rounded-full bg-[#080f25] text-cyan-300 border border-cyan-900/50"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>

                            {/* Project Links */}
                            <div className="flex items-center gap-6 pt-5 border-t border-gray-700">

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors"
                                >
                                    <Code2 size={17} />
                                    GitHub
                                </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors"
                                >
                                    Live Demo
                                    <ArrowUpRight size={17} />
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Projects
