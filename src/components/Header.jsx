import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/images/website-logo-1.png"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Career", path: "/education" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/* 🛰️ ORBITAL SIGNAL CSS */}
      <style>{`
        .orbital-link {
          position: relative;
          padding: 8px 6px;
          font-size: 15px;
          color: #94a3b8;
          letter-spacing: 0.06em;
        }

        .orbital-link .label {
          position: relative;
          z-index: 2;
          transition: color 0.3s ease;
        }

        .orbital-link .orbit {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          pointer-events: none;
        }

        .orbital-link .dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg,#22d3ee,#6366f1);
        }

        .orbital-link .dot.one {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .orbital-link .dot.two {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .orbital-link:hover .orbit {
          animation: orbit 1.2s linear infinite;
        }

        .orbital-link.active .orbit {
          animation: orbit 3s linear infinite;
        }

        .orbital-link:hover .label,
        .orbital-link.active .label {
          color: #fff;
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/">
            <img src={logo} alt="logo" className="h-10" />
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`orbital-link ${isActive ? "active" : ""}`}
                >
                  <span className="label">{link.name}</span>

                  <span className="orbit">
                    <span className="dot one" />
                    <span className="dot two" />
                  </span>
                </NavLink>
              )
            })}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            <i className={open ? "ri-close-line" : "ri-menu-3-line"}></i>
          </button>
        </div>

        {/* MOBILE MENU (simple) */}
        <div
          className={`md:hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-6 px-6 py-4 bg-black/80">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
