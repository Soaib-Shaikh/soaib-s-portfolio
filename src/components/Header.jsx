import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/website-logo-1.png"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Career", path: "/education" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <img src={logo} alt="logo" className="h-10" />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `group relative text-[15px] font-medium tracking-wide transition
                 ${isActive ? "text-white" : "text-slate-300 hover:text-indigo-400"}`
              }
            >
              {link.name}
              <span
                className="
                  absolute left-0 -bottom-2 h-[2px] w-full
                  bg-gradient-to-r from-indigo-500 to-cyan-400
                  scale-x-0 group-hover:scale-x-100
                  transition-transform origin-left
                "
              />
            </NavLink>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          <i className={open ? "ri-close-line" : "ri-menu-3-line"}></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col gap-6 px-6 pb-6 pt-4 bg-black/80 backdrop-blur">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition
                 ${isActive ? "text-indigo-400" : "text-slate-300 hover:text-indigo-400"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
