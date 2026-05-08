import { motion } from 'framer-motion'
import { FiCopy } from 'react-icons/fi'
import toast from 'react-hot-toast'

const HistoryPanel = ({
  certificates,
  searchTerm,
  setSearchTerm,
}) => {
  const copyId = (id) => {
    navigator.clipboard.writeText(id)

    toast.success('Certificate ID Copied')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-6 mt-10"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2 className="heading-font text-4xl text-yellow-400">
          Certificate History
        </h2>

        <input
          type="text"
          placeholder="Search certificates..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="bg-white/10 rounded-2xl px-5 py-3 outline-none w-full md:w-[320px]"
        />
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
        {certificates.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            No certificates found.
          </div>
        ) : (
          certificates.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-yellow-400 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.recipientName}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    {item.programName}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    {item.role}
                  </p>
                </div>

                <div className="flex flex-col md:items-end gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">
                      {item.certificateId}
                    </span>

                    <button
                      onClick={() =>
                        copyId(item.certificateId)
                      }
                      className="hover:text-yellow-400 transition"
                    >
                      <FiCopy />
                    </button>
                  </div>

                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  )
}

export default HistoryPanel