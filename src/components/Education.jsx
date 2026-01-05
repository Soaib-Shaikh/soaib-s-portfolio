import { motion } from "framer-motion"

const Education = () => {
  const data = [
    ["M.Com", "VNSGU University", "2019 – 2021"],
    ["B.Com", "VNSGU University", "2016 – 2019"],
    ["12th Commerce", "GHSEB", "2016"],
    ["10th", "GSEB", "2014"],
  ]

  return (
    <section className="py-28 bg-black/40">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="space-y-6">
          {data.map(([d, i, y]) => (
            <motion.div
              key={d}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div>
                <h4 className="font-semibold">{d}</h4>
                <p className="text-slate-400 text-sm">{i}</p>
              </div>
              <span className="text-indigo-400">{y}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
