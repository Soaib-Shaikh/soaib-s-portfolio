import { motion } from "framer-motion"
import heroImg from "../assets/images/My-image.png"
import { NavLink } from "react-router"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Full Stack <br />
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="text-slate-400 mt-6 max-w-lg">
            I am a passionate Full Stack Developer with extensive experience
            building modern & scalable web applications.
          </p>

          <NavLink
            to="/projects"
            className="
    inline-block mt-8 px-8 py-4 rounded-xl
    bg-gradient-to-r from-indigo-500 to-cyan-400
    shadow-lg shadow-indigo-500/30
    hover:scale-105 transition
  "
          >
            View My Work
          </NavLink>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-72 bg-indigo-500/30 blur-3xl rounded-full"></div>
          <img
            src={heroImg}
            className="relative z-10 max-h-[480px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
