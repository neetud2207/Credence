import { useEffect, useState } from 'react'
import CertificateForm from '../components/CertificateForm'
import CertificatePreview from '../components/CertificatePreview'
import HistoryPanel from '../components/HistoryPanel'
import StatsCards from '../components/StatsCards'

import {
  saveCertificate,
  getCertificates,
} from '../utils/storage'

import {
  generateCertificateId,
} from '../utils/generateCertificateId'

const Home = () => {

  const [formData, setFormData] = useState({
    recipientName: '',
    role: 'Intern',
    programName: '',
    startDate: '',
    endDate: '',
    issuedBy: '',
  })

  const [certificateId, setCertificateId] =
    useState(generateCertificateId())

  const [certificates, setCertificates] =
    useState([])

  const [searchTerm, setSearchTerm] =
    useState('')

  const [selectedTemplate, setSelectedTemplate] =
    useState('classic')

  useEffect(() => {
    setCertificates(getCertificates())
  }, [])

  const handleGenerate = () => {

  const newCertificate = {
    ...formData,
    certificateId,
    template: selectedTemplate,
    createdAt: new Date().toISOString(),
  }

  saveCertificate(newCertificate)

  setCertificates(
    getCertificates()
  )

  alert(
    'Certificate generated successfully!'
  )

  setCertificateId(
    generateCertificateId()
  )
}

  const filteredCertificates =
    certificates.filter((item) =>
      item.recipientName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
    )

  return (
    <>
      <StatsCards certificates={certificates} />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-[420px_1fr] gap-8 items-start">

          <div>

            <CertificateForm
              formData={formData}
              setFormData={setFormData}
              onGenerate={handleGenerate}
            />

          </div>

          <div className="space-y-6 sticky top-28">

            <div className="glass rounded-3xl p-5">

              <p className="text-sm text-gray-400 mb-3">
                Select Certificate Template
              </p>

              <div className="flex gap-3">

                <button
                  onClick={() =>
                    setSelectedTemplate('classic')
                  }
                  className={`px-4 py-2 rounded-xl ${
                    selectedTemplate === 'classic'
                      ? 'bg-yellow-500 text-black'
                      : 'bg-white/10'
                  }`}
                >
                  Classic
                </button>

                <button
                  onClick={() =>
                    setSelectedTemplate('modern')
                  }
                  className={`px-4 py-2 rounded-xl ${
                    selectedTemplate === 'modern'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10'
                  }`}
                >
                  Modern
                </button>

                <button
                  onClick={() =>
                    setSelectedTemplate('luxury')
                  }
                  className={`px-4 py-2 rounded-xl ${
                    selectedTemplate === 'luxury'
                      ? 'bg-yellow-400 text-black'
                      : 'bg-white/10'
                  }`}
                >
                  Luxury
                </button>

              </div>
            </div>

            <CertificatePreview
              template={selectedTemplate}
              data={{
                ...formData,
                certificateId,
              }}
            />

          </div>
        </div>

        <HistoryPanel
          certificates={filteredCertificates}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

      </div>
    </>
  )
}

export default Home