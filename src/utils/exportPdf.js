import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const exportAsPDF = async (
  element,
  fileName
) => {
  if (!element) return

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
  })

  const imgData = canvas.toDataURL('image/png')

  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: 'a4',
  })

  const pdfWidth = pdf.internal.pageSize.getWidth()

  const pdfHeight =
    (canvas.height * pdfWidth) / canvas.width

  pdf.addImage(
    imgData,
    'PNG',
    0,
    0,
    pdfWidth,
    pdfHeight
  )

  pdf.save(`${fileName}.pdf`)
}

export const exportAsImage = async (
  element,
  fileName
) => {
  if (!element) return

  const canvas = await html2canvas(element, {
    scale: 3,
    useCORS: true,
  })

  const image = canvas.toDataURL(
    'image/png',
    1.0
  )

  const link = document.createElement('a')

  link.href = image

  link.download = `${fileName}.png`

  document.body.appendChild(link)

  link.click()

  document.body.removeChild(link)
}