import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiAward } from 'react-icons/fi'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass sticky top-0 z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center">
            <FiAward className="text-black text-2xl" />
          </div>

          <div>
            <h1 className="heading-font text-3xl font-bold text-yellow-400">
              Credence
            </h1>

            <p className="text-xs text-gray-300">
              NGO Certificate Platform
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link
            className="hover:text-yellow-400 transition duration-300"
            to="/"
          >
            Home
          </Link>

          <Link
            className="hover:text-yellow-400 transition duration-300"
            to="/verify"
          >
            Verify
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar