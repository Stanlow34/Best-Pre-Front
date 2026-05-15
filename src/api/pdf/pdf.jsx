import { jsPDF } from 'jspdf'

export const generateInvoicePdf = (invoiceData, options = {}) => {
	const { download = true, fileName } = options
	const doc = new jsPDF({ unit: 'mm', format: 'a4' })
	const pageBottom = 285

	const formatAmount = (value) => `${Number(value || 0).toFixed(2)} EUR`

	let y = 20
	const ensureSpace = (needed = 8) => {
		if (y + needed > pageBottom) {
			doc.addPage()
			y = 20
		}
	}

	doc.setFont('helvetica', 'bold')
	doc.setFontSize(20)
	doc.text('FACTURE', 15, y)

	doc.setFont('helvetica', 'normal')
	doc.setFontSize(10)
	doc.text(`Date: ${new Date().toLocaleDateString('fr-FR')}`, 150, y)
	y += 8

	doc.setDrawColor(180)
	doc.rect(15, y, 180, 35)
	doc.setFontSize(12)
	doc.setFont('helvetica', 'bold')
	doc.text('Client', 18, y + 7)

	doc.setFont('helvetica', 'normal')
	doc.setFontSize(10)
	doc.text(`Nom: ${invoiceData.customer}`, 18, y + 14)
	doc.text(`Adresse: ${invoiceData.customerAddress}`, 18, y + 20)
	doc.text(`Email: ${invoiceData.customerEmail}`, 18, y + 26)
	doc.text(`SIRET: ${invoiceData.customerSiret}`, 18, y + 32)
	y += 45

	doc.setFont('helvetica', 'bold')
	doc.setFontSize(12)
	doc.text('Lignes de facture', 15, y)
	y += 6

	doc.setFontSize(9)
	doc.setFont('helvetica', 'bold')
	doc.text('Article', 15, y)
	doc.text('Qte', 78, y)
	doc.text('Montant', 92, y)
	doc.text('Remise', 116, y)
	doc.text('TVA %', 138, y)
	doc.text('HT', 155, y)
	doc.text('TTC', 176, y)
	y += 3
	doc.setDrawColor(200)
	doc.line(15, y, 195, y)
	y += 4

	doc.setFont('helvetica', 'normal')
	;(invoiceData.lines || []).forEach((line) => {
		ensureSpace(8)
		const article = String(line.article || '-').slice(0, 25)
		doc.text(article, 15, y)
		doc.text(String(line.qty || '0'), 78, y)
		doc.text(formatAmount(line.amount), 92, y)
		doc.text(formatAmount(line.remise), 116, y)
		doc.text(String(Number(line.taxRate || 0).toFixed(2)), 138, y)
		doc.text(formatAmount(line.totalHt), 155, y)
		doc.text(formatAmount(line.totalTtc), 176, y)
		y += 6
	})

	ensureSpace(20)
	y += 2
	doc.setFont('helvetica', 'bold')
	doc.setFontSize(12)
	doc.text('Sous-totaux par TVA', 15, y)
	y += 6
	doc.setFontSize(10)
	doc.setFont('helvetica', 'normal')

	;(invoiceData.vatSummaries || []).forEach((summary) => {
		ensureSpace(7)
		doc.text(`TVA ${Number(summary.rate || 0).toFixed(2)}%`, 15, y)
		doc.text(`HT: ${formatAmount(summary.ht)}`, 60, y)
		doc.text(`TVA: ${formatAmount(summary.vat)}`, 110, y)
		doc.text(`TTC: ${formatAmount(summary.ttc)}`, 155, y)
		y += 6
	})

	ensureSpace(16)
	y += 2
	doc.setDrawColor(180)
	doc.line(15, y, 195, y)
	y += 7
	doc.setFont('helvetica', 'bold')
	doc.text(`Total global HT: ${formatAmount(invoiceData.globalTotals?.ht)}`, 15, y)
	y += 6
	doc.text(`Total global TVA: ${formatAmount(invoiceData.globalTotals?.vat)}`, 15, y)
	y += 6
	doc.text(`Total global TTC: ${formatAmount(invoiceData.globalTotals?.ttc)}`, 15, y)

	const now = new Date().toISOString().slice(0, 10)
	const resolvedFileName = fileName || `facture-${now}.pdf`
	const blob = doc.output('blob')

	if (download) {
		doc.save(resolvedFileName)
	}

	return { blob, fileName: resolvedFileName }
}