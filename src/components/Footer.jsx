import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black/60 backdrop-blur">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12 items-start text-center md:text-left">

          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4">
              Soaib <span className="text-indigo-400">Shaikh</span>
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Full Stack Developer crafting modern, scalable and
              high-performance web applications with clean UI & UX.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 flex flex-col items-center md:items-start">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Skills", "/skills"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
              ].map(([name, link]) => (
                <li key={name}>
                  <NavLink
                    to={link}
                    className="hover:text-indigo-400 transition"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL ICONS (NO HEADING) */}
          <div className="flex justify-center md:justify-start">
            <div className="flex gap-6 text-2xl text-slate-400">
              <a
                href="https://www.linkedin.com/in/mohammadsoaib-shaikh-a242173a1/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>

              <a
                href="https://github.com/Soaib-Shaikh"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition"
              >
                <i className="ri-github-line"></i>
              </a>

              <a
                href="#"
                className="hover:text-indigo-400 transition"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="#"
                className="hover:text-indigo-400 transition"
              >
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Soaib Shaikh. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
