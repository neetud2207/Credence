import { motion } from 'framer-motion'

const StatsCards = ({ certificates }) => {
  const totalCertificates = certificates.length

  const verifiedCertificates = certificates.length

  const activePrograms = [
    ...new Set(
      certificates.map((item) => item.programName)
    ),
  ].length

  const stats = [
    {
      title: 'Total Certificates',
      value: totalCertificates,
    },
    {
      title: 'Verified Certificates',
      value: verifiedCertificates,
    },
    {
      title: 'Active Programs',
      value: activePrograms,
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass rounded-3xl p-8"
        >
          <p className="text-gray-400 text-sm">
            {item.title}
          </p>

          <h2 className="text-5xl font-bold text-yellow-400 mt-4">
            {item.value}
          </h2>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsCards