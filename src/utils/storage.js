export const saveCertificate = (certificate) => {
  const existing =
    JSON.parse(localStorage.getItem('credenceCertificates')) || []

  existing.unshift(certificate)

  localStorage.setItem(
    'credenceCertificates',
    JSON.stringify(existing)
  )
}

export const getCertificates = () => {
  return (
    JSON.parse(localStorage.getItem('credenceCertificates')) || []
  )
}