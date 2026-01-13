import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="py-28" id="about">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-indigo-400">Me</span>
            </h2>

            <p className="text-slate-400 leading-relaxed">
              My name is Mohammadsoaib Shaikh, I am a Full Stack Developer with
              expertise in both front-end and back-end technologies. With a deep
              understanding of JavaScript, HTML, CSS, and frameworks such as
              React, I craft intuitive and responsive user
              interfaces. I am driven by challenges and constantly strive to
              learn and implement the latest technologies to deliver high-quality
              solutions. My ability to work across all stages of development,
              from concept to deployment, allows me to bring seamless digital
              experiences to life.
            </p>
          </motion.div>

          {/* RIGHT STATS (4 BLOCKS) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              ["Experience", "Fresher"],
              ["Projects", "20+"],
              ["Tech Stack", "MERN"],
              ["Location", "India"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="
                  bg-white/5 backdrop-blur
                  border border-white/10
                  rounded-2xl p-6
                  hover:shadow-lg hover:shadow-indigo-500/20
                  transition
                "
              >
                <p className="text-slate-400 text-sm">{title}</p>
                <p className="text-xl font-semibold mt-2">{value}</p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-8 mt-16">
          {[
            ["ri-facebook-fill", "#"],
            ["ri-linkedin-box-fill", "https://www.linkedin.com/in/mohammadsoaib-shaikh-a242173a1/"],
            ["ri-instagram-line", "https://www.instagram.com/soaib_shaikh_10/"],
            ["ri-github-line", "https://github.com/Soaib-Shaikh"],
          ].map(([icon, link], i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              className="
                text-2xl text-slate-400
                hover:text-indigo-400 transition
              "
            >
              <i className={icon}></i>
            </a>
          ))}
        </div>

        {/* DOWNLOAD CV */}
        <div className="text-center mt-10">
          <NavLink
            to="/MOHAMMADSOAIB_SHAIKH_Resume.pdf"
            download
            className="
              inline-block px-8 py-4 rounded-xl font-semibold
              bg-gradient-to-r from-indigo-500 to-cyan-400
              shadow-lg shadow-indigo-500/30
              hover:scale-105 transition
            "
          >
            Download CV
          </NavLink>
        </div>

      </div>
    </section>
  )
}

export default About
