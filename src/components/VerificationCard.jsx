import { motion } from 'framer-motion'

const VerificationCard = ({ certificate }) => {
  if (!certificate) {
    return (
      <div className="glass rounded-3xl p-10 text-center">
        <h2 className="text-red-400 text-3xl font-bold">
          Invalid Certificate ID
        </h2>

        <p className="mt-4 text-gray-300">
          This certificate does not exist.
        </p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="glass rounded-3xl p-10"
    >
      <div className="flex items-center gap-5 mb-8">
        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl">
          ✓
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-400">
            Certificate Verified Successfully
          </h2>

          <p className="text-gray-300 mt-2">
            This certificate is authentic and valid.
          </p>
        </div>
      </div>

      <div className="space-y-4 text-lg">
        <p>
          <strong>Name:</strong>{' '}
          {certificate.recipientName}
        </p>

        <p>
          <strong>Role:</strong>{' '}
          {certificate.role}
        </p>

        <p>
          <strong>Program:</strong>{' '}
          {certificate.programName}
        </p>

        <p>
          <strong>Issued By:</strong>{' '}
          {certificate.issuedBy}
        </p>

        <p>
          <strong>Certificate ID:</strong>{' '}
          {certificate.certificateId}
        </p>
      </div>
    </motion.div>
  )
}

export default VerificationCard