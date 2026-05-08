import { useState } from 'react'

import VerificationCard from '../components/VerificationCard'

import { getCertificates } from '../utils/storage'

const Verify = () => {
  const [certificateId, setCertificateId] = useState('')
  const [certificate, setCertificate] = useState(null)
  const [searched, setSearched] = useState(false)

  const handleVerify = () => {
    const certificates = getCertificates()

    console.log('Stored Certificates:', certificates)

    const cleanedInput = certificateId.trim()

    const found = certificates.find((item) =>
  item.certificateId === cleanedInput
)

    console.log('Found Certificate:', found)

    setCertificate(found || null)
    setSearched(true)
  }

  return (
    <div className="relative z-50 max-w-4xl mx-auto px-6 py-20">
      <div className="glass rounded-3xl p-10">
        <h1 className="heading-font text-5xl text-yellow-400 text-center">
          Verify Certificate
        </h1>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) =>
              setCertificateId(e.target.value)
            }
            className="w-full flex-1 bg-white/10 rounded-2xl p-4 outline-none"
          />

          <button
            onClick={handleVerify}
            className="gradient-btn px-8 py-4 rounded-2xl text-black font-bold cursor-pointer hover:scale-105 transition duration-300"
          >
            Verify
          </button>
        </div>
      </div>

      {searched && (
        <div className="mt-10">
          <VerificationCard certificate={certificate} />
        </div>
      )}
    </div>
  )
}

export default Verify