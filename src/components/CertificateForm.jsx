import { motion } from 'framer-motion'
import { FiPrinter } from 'react-icons/fi'
import { toPng } from 'html-to-image'

const CertificateForm = ({
  formData,
  setFormData,
  onGenerate,
}) => {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const downloadCertificate = async () => {

  const node =
    document.getElementById(
      'certificate-preview'
    )

  if (!node) return

  try {

    const dataUrl =
      await toPng(node, {
        cacheBust: true,
        pixelRatio: 2,
      })

    const link =
      document.createElement('a')

    link.download =
      'certificate.png'

    link.href = dataUrl

    link.click()

  } catch (err) {

    console.log(err)

  }

}

  const downloadPDF = async () => {

    try {

      const certificate =
        document.querySelector(
          '#certificate-preview'
        )

      const canvas =
        await html2canvas(certificate, {
          scale: 1.5,
          logging: false,
          useCORS: true,
          backgroundColor: '#ffffff',
        })

      const imgData =
        canvas.toDataURL('image/jpeg', 1.0)

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      })

      const pageWidth =
        pdf.internal.pageSize.getWidth()

      const pageHeight =
        pdf.internal.pageSize.getHeight()

      pdf.addImage(
        imgData,
        'JPEG',
        0,
        0,
        pageWidth,
        pageHeight
      )

      pdf.save('certificate.pdf')

    } catch (error) {

      console.error(error)

      console.log(error)

    }

  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass rounded-[40px] p-10"
    >

      <h1 className="heading-font text-6xl text-yellow-400 leading-tight">
        Generate
        <br />
        Certificate
      </h1>

      <div className="mt-10 space-y-5">

        <input
          type="text"
          name="recipientName"
          placeholder="Recipient Name"
          value={formData.recipientName}
          onChange={handleChange}
          className="w-full bg-white/10 rounded-2xl p-5 outline-none"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full bg-white/10 rounded-2xl p-5 outline-none"
        >
          <option>Intern</option>
          <option>Volunteer</option>
          <option>Coordinator</option>
          <option>Speaker</option>
        </select>

        <input
          type="text"
          name="programName"
          placeholder="Program/Event Name"
          value={formData.programName}
          onChange={handleChange}
          className="w-full bg-white/10 rounded-2xl p-5 outline-none"
        />

        <div className="grid grid-cols-2 gap-4">

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full bg-white/10 rounded-2xl p-5 outline-none"
          />

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full bg-white/10 rounded-2xl p-5 outline-none"
          />

        </div>

        <input
          type="text"
          name="issuedBy"
          placeholder="Issued By"
          value={formData.issuedBy}
          onChange={handleChange}
          className="w-full bg-white/10 rounded-2xl p-5 outline-none"
        />

        <button
          onClick={onGenerate}
          className="gradient-btn w-full py-5 rounded-2xl text-black font-bold hover:scale-105 transition duration-300"
        >
          Generate Certificate
        </button>

        <button
  onClick={downloadCertificate}
  className="bg-white/10 hover:bg-white/20 transition rounded-2xl py-5 flex items-center justify-center gap-2"
>
  Download Certificate
</button>

      </div>

    </motion.div>
  )
}

export default CertificateForm