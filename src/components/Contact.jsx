import React from "react"

const Contact = () => {
  return (
    <section className="py-28" id="contact">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Work Together
        </h2>

        <p className="text-slate-400 mb-12">
          Have a project idea or want to collaborate?
        </p>

        <form className="grid gap-6">
          <input
            className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
            placeholder="Your Name"
          />
          <input
            className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
            placeholder="Your Phone"
          />
          <input
            className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
            placeholder="Your Email"
          />
          <input
            className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
            placeholder="Subject"
          />
          <textarea
            rows="5"
            className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
            placeholder="Write your message here..."
          />

          <button
            className="
              mt-4 py-4 rounded-2xl font-semibold
              bg-gradient-to-r from-indigo-500 to-cyan-400
              shadow-lg shadow-indigo-500/30
              hover:scale-105 transition
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
