import React from 'react'

import marketing from '../assets/images/Marketing_Website.png'
import bizness from '../assets/images/Bizness_Website.png'
import croma from '../assets/images/croma_website_image.png'
import epds from '../assets/images/EPDS.png'
import sip from '../assets/images/sip.png'
import calculator from '../assets/images/calculator.png'
import addToCart from '../assets/images/Add_to_Cart.png'
import corona from '../assets/images/Corona_API.png'
import dog from '../assets/images/Dog-API.png'
import weather from '../assets/images/Weathe-Api.png'
import blog from '../assets/images/Blog-app.png'
import restaurant from '../assets/images/Restaurant-website.png'
import lms from '../assets/images/lms.png'
import stopwatch from '../assets/images/stop-watch.png'

const projects = [
  { title: 'Marketing Website', img: marketing, link: 'https://marketing-website-puce.vercel.app/' },
  { title: 'BizNess Website', img: bizness, link: 'https://bizness-website.vercel.app/' },
  { title: 'Croma Website', img: croma, link: 'https://croma-website-nine.vercel.app/' },
  { title: 'Employee Product Management', img: epds, link: 'https://pr-repetition-logic-js.vercel.app/' },
  { title: 'SIP Calculator', img: sip, link: 'https://conditional-statement-js.vercel.app/' },
  { title: 'Calculator', img: calculator, link: 'https://pr-calculator-js.vercel.app/' },
  { title: 'Add To Cart', img: addToCart, link: 'https://pr-add-to-cart-js.vercel.app/' },
  { title: 'Corona API', img: corona, link: 'https://pr-corona-api-js.vercel.app/' },
  { title: 'Dog API', img: dog, link: 'https://pr-dog-api-js.vercel.app/' },
  { title: 'Weather API', img: weather, link: 'https://pr-weather-api-js.vercel.app/' },
  { title: 'Blog Website', img: blog, link: 'https://pr-passport-login-node-js.onrender.com' },
  { title: 'Restaurant Website', img: restaurant, link: 'https://pr-restaurant-website-node-js.onrender.com' },
  { title: 'Library Management System', img: lms, link: 'https://pr-library-management-system-react.vercel.app/' },
  { title: 'Stop Watch', img: stopwatch, link: 'https://pr-2-counter-react-js-ten.vercel.app/' },
]

const Projects = () => (
  <section className="py-28 bg-black/40" id="projects">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(p => (
          <div
            key={p.title}
            className="
              bg-white/5 border border-white/10 rounded-2xl
              overflow-hidden
              hover:-translate-y-3 transition duration-300
              hover:shadow-xl hover:shadow-indigo-500/20
            "
          >
            <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />

            <div className="p-6 text-center">
              <h6 className="font-semibold mb-4">{p.title}</h6>
              <a
                href={p.link}
                target="_blank"
                className="text-indigo-400 font-medium hover:underline"
              >
                Show More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
