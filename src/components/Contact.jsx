
import {
  Mail,
  ArrowUpRight,
  Phone
} from "lucide-react"

function Contact() {

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080d1a] text-white py-24 px-5 md:px-10"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2
        w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]">
      </div>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Section Label */}
        <p
          data-aos="fade-up"
          className="text-cyan-400 uppercase tracking-[5px] text-sm font-semibold mb-5"
        >
          Get In Touch
        </p>

        {/* Main Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
        >
          Have a project
          <br />
          in <span className="text-transparent bg-clip-text
            bg-gradient-to-r from-cyan-400 to-blue-500">
            mind?
          </span>
        </h2>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-400 text-base md:text-lg
          max-w-2xl mx-auto mt-7 leading-8"
        >
          I'm always excited to explore new opportunities,
          collaborate on interesting projects, and create
          meaningful digital experiences.
          Let's connect and build something amazing together.
        </p>

        {/* Availability */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex items-center justify-center gap-2 mt-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex
              h-full w-full rounded-full bg-green-400 opacity-75">
            </span>
            <span className="relative inline-flex rounded-full
              h-3 w-3 bg-green-500">
            </span>
          </span>

          <span className="text-gray-300 text-sm">
            Open to exciting opportunities
          </span>
        </div>

        {/* Email Button */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="mt-10"
        >
          <a
            href="mailto:your.email@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4
            bg-cyan-400 text-[#080d1a] font-bold rounded-full
            hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
            hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
            Let's Talk
            <ArrowUpRight size={20} />
          </a>
        </div>

        {/* Social Links */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-14"
        >
          <p className="text-gray-500 text-sm mb-5">
            OR FIND ME ON
          </p>

          <div className="flex justify-center gap-5">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 flex items-center justify-center
              rounded-full border border-gray-700 text-gray-300
              hover:border-cyan-400 hover:text-cyan-400
              hover:-translate-y-1 transition-all duration-300"
            >
              <Phone size={21} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 flex items-center justify-center
              rounded-full border border-gray-700 text-gray-300
              hover:border-cyan-400 hover:text-cyan-400
              hover:-translate-y-1 transition-all duration-300"
            >
              <Phone size={21} />
            </a>

          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800 mt-20 pt-7">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Priyanka. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contact
