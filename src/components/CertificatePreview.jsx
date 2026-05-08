

import { templates } from '../data/templates'

const CertificatePreview = ({
  data,
  template,
}) => {
    const activeTemplate =
  templates[template]
  return (
    <div className="pointer-events-none">
      <div
        id="certificate-preview"
        className={`${activeTemplate.background} ${activeTemplate.text} rounded-[32px] p-6 border-[8px] ${activeTemplate.border} shadow-2xl overflow-hidden mx-auto max-w-[980px]`}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="heading-font text-5xl font-bold text-slate-900">
              Credence
            </h1>

            <p className="text-gray-500">
              NGO Recognition Certificate
            </p>
          </div>

          <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            VERIFIED
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="uppercase tracking-[6px] text-gray-500">
            Certificate Of Completion
          </p>

          <h2 className="heading-font text-4xl text-yellow-600 mt-6 break-words">
            {data.recipientName || 'Recipient Name'}
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            This certificate is proudly awarded for the successful completion as an 

            <span className="font-bold">
              {' '}
              {data.role || 'Volunteer'}
            </span>

            {' '}in

            <span className="font-bold">
              {' '}
              {data.programName || 'Program Name'}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-10">
          <div>
            <p className="text-gray-500">
              Duration
            </p>

            <h3 className="font-semibold text-xl mt-2">
              {data.startDate || 'Start'} -{' '}
              {data.endDate || 'End'}
            </h3>
          </div>

          <div className="text-right">
            <p className="text-gray-500">
              Issued By
            </p>

            <h3 className="font-semibold text-xl mt-2">
              {data.issuedBy || 'Credence Team'}
            </h3>
          </div>
        </div>

        <div className="flex justify-between items-end mt-8">
          <div>
            <div className="w-48 border-b-2 border-black mb-3"></div>

            <p className="font-semibold">
              Authorized Signature
            </p>
          </div>

          <div className="text-center">
            <img
  src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${data.certificateId}`}
  alt="QR Code"
  className="w-[90px] h-[90px]"
/>

            <p className="text-xs mt-2 text-gray-500">
              Scan To Verify
            </p>
          </div>

          <div className="text-right">
            <p className="text-gray-500">
              Certificate ID
            </p>

            <p className="font-bold">
              {data.certificateId}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificatePreview