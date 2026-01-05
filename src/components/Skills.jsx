import React from 'react'

import html from '../assets/images/html-5.png'
import css from '../assets/images/css-3.png'
import bootstrap from '../assets/images/bootstrap-icon.png'
import cpp from '../assets/images/cpp-logo.png'
import js from '../assets/images/js_logo.png'
import node from '../assets/images/node.js-logo.png'
import reactImg from '../assets/images/react.js-logo.png'
import tailwind from '../assets/images/tailswind-logo.png'
import github from '../assets/images/github-logo.png'

const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'Bootstrap', icon: bootstrap },
  { name: 'C++', icon: cpp },
  { name: 'JavaScript', icon: js },
  { name: 'Node.js', icon: node },
  { name: 'React.js', icon: reactImg },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'GitHub', icon: github },
]

const Skills = () => (
  <section className="py-28" id="skills">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="
              bg-gradient-to-br from-indigo-500/20 to-cyan-400/20
              border border-white/10 rounded-2xl
              p-6 flex flex-col items-center
              hover:scale-110 transition duration-300
              shadow-lg shadow-indigo-500/10
            "
          >
            <img src={skill.icon} alt={skill.name} className="h-14 mb-4" />
            <p className="font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
