import React, { useEffect, useMemo, useState } from 'react'
import './invoice.css'
import { generateInvoicePdf } from '../../api/pdf/pdf'
import { ClientSelect } from "./ClientSelect.jsx";

const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '')

const getPdfHref = (invoice) => `${API_BASE}/invoices/${invoice.id}/pdf`

const InvoiceTable = ({ refreshTrigger }) => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchInvoices = async () => {
    setLoading(true);
    try {
            const res = await fetch(`${API_BASE}/invoices`);
      if (!res.ok) throw new Error("Erreur API");
      const data = await res.json();
      setInvoices(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  useEffect(() => {
    if (refreshTrigger) {
      fetchInvoices();
    }
  }, [refreshTrigger]);

  if (loading) return <p>Chargement…</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className="table_corps table_invoice">
      <table className="table_first table_invoice_table">
        <thead>
          <tr>
            <th>ID Schema</th>
            <th>Id facture</th>
            <th>Numéro facture</th>
            <th>Date facture</th>
            <th>Date d'envoi</th>
            <th>Numéro BDC</th>
            <th>Numéro BDL</th>
            <th>Numéro Devis</th>
            <th>Client</th>
            <th>Id article</th>
            <th>Nom article</th>
            <th>Montant unitaire HT</th>
            <th>Quantité</th>
            <th>Montant HT</th>
            <th>Id réduction</th>
            <th>Montant réduction</th>
            <th>Montant HT global</th>
            <th>Id taxe article</th>
            <th>Montant taxe article</th>
            <th>Id type article</th>
            <th>Type article</th>
            <th>Montant HT facture</th>
            <th>Pourcentage réduction HT facture</th>
            <th>Montant réduction HT facture</th>
            <th>Montant HT global facture</th>
            <th>Id taxe facture</th>
            <th>Montant taxe facture</th>
            <th>Montant TTC facture</th>
            <th>Montant HT final facture</th>
            <th>Montant TVA final facture</th>
            <th>Pourcentage réduction TTC facture</th>
            <th>Montant réduction TTC facture</th>
            <th>Montant TTC final facture</th>
            <th>Id taxe final</th>
            <th>Montant taxe final</th>
            <th>Id type paiement</th>
            <th>Type paiement</th>
            <th>Id délai paiement</th>
            <th>Délai paiement</th>
            <th>Date paiement</th>
            <th>Id frais</th>
            <th>Frais délai</th>
            <th>Id pénalité</th>
            <th>Pénalité paiement</th>
            <th>Id escompte</th>
            <th>Escompte paiement</th>
            <th>Id mention</th>
            <th>Mention facture</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
                <td>{invoice.id_schema}</td>
                <td>{invoice.id}</td>
                <td>{invoice.num_invoice}</td>
                <td>{invoice.date_invoice}</td>
                <td>{invoice.selling_invoice}</td>
                <td>{invoice.num_bdc}</td>
                <td>{invoice.num_bdl}</td>
                <td>{invoice.num_devis}</td>
                <td>{invoice.id_customer}</td>
                <td>{invoice.id_item}</td>
                <td>{invoice.name_item}</td>
                <td>{invoice.ht_unit_item}</td>
                <td>{invoice.quantity_item}</td>
                <td>{invoice.ht_item}</td>
                <td>{invoice.reduce_id}</td>
                <td>{invoice.reduce_ht_item}</td>
                <td>{invoice.ht_global_item}</td>
                <td>{invoice.id_tax_item}</td>
                <td>{invoice.tax_amount_item}</td>
                <td>{invoice.id_type_item}</td>
                <td>{invoice.type_item}</td>
                <td>{invoice.ht_invoice}</td>
                <td>{invoice.reduce_percent_ht_invoice}</td>
                <td>{invoice.reduce_amount_ht_invoice}</td>
                <td>{invoice.ht_invoice_global}</td>
                <td>{invoice.id_tax_invoice}</td>
                <td>{invoice.tax_amount_invoice}</td>
                <td>{invoice.ttc_invoice}</td>
                <td>{invoice.ht_invoice_final}</td>
                <td>{invoice.tva_invoice_final}</td>
                <td>{invoice.reduce_percent_ttc_invoice}</td>
                <td>{invoice.reduce_amount_ttc_invoice}</td>
                <td>{invoice.ttc_invoice_final}</td>
                <td>{invoice.id_tax_final}</td>
                <td>{invoice.tax_amount_final}</td>
                <td>{invoice.id_type_payment}</td>
                <td>{invoice.type_payment}</td>
                <td>{invoice.id_delay_payment}</td>
                <td>{invoice.delay_payment}</td>
                <td>{invoice.date_payment}</td>
                <td>{invoice.id_fees}</td>
                <td>{invoice.fees_delay}</td>
                <td>{invoice.id_penalty}</td>
                <td>{invoice.penalty_payment}</td>
                <td>{invoice.id_escompte}</td>
                <td>{invoice.escompte_payment}</td>
                <td>{invoice.id_mention}</td>
                <td>{invoice.invoice_mention}</td>
                                <td>
                                    {invoice.invoice_pdf ? (
                                        <a href={getPdfHref(invoice)} target="_blank" rel="noreferrer">
                                            Voir PDF
                                        </a>
                                    ) : ('-')}
                                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const uploadPdfBlob = async (blob, fileName) => {
    const formData = new FormData()
    const pdfFile = new File([blob], fileName, { type: 'application/pdf' })
    formData.append('file', pdfFile)

    const uploadRes = await fetch(`${API_BASE}/invoices/upload`, {
        method: 'POST',
        body: formData,
    })

    if (!uploadRes.ok) {
        const uploadError = await uploadRes.text()
        throw new Error(
            `Erreur upload PDF (${uploadRes.status})${uploadError ? `: ${uploadError}` : ''}`,
        )
    }

    const uploadData = await uploadRes.json()
    return uploadData?.url || null
}

const CreateInvoiceForm = ({ onCreated, onClose }) => {
    const [qty, setQty] = useState('')
    const [amount, setAmount] = useState('')
    const [remPercent, setRemPercent] = useState('')
    const [manualRemise, setManualRemise] = useState('')
    const [taxRate, setTaxRate] = useState(20)
    const [additionalLines, setAdditionalLines] = useState([])
        const [submitError, setSubmitError] = useState('')
        const [submitting, setSubmitting] = useState(false)

    const parseNumber = (value) => {
        const normalized = String(value || '').replace(',', '.').trim()
        const parsed = Number(normalized)
        return Number.isFinite(parsed) ? parsed : 0
    }

    const amountNumber = useMemo(() => parseNumber(amount), [amount])
    const qtyNumber = useMemo(() => parseNumber(qty), [qty])
    const remPercentNumber = useMemo(() => parseNumber(remPercent), [remPercent])

    const isRemPercentFilled = remPercent.trim() !== ''
    const computedRemise = isRemPercentFilled
        ? (remPercentNumber / 100) * (qtyNumber * amountNumber)
        : parseNumber(manualRemise)

    const totalHt = qtyNumber * amountNumber - computedRemise

    const taxRateNumber = parseNumber(taxRate)
    const taxe = totalHt * taxRateNumber / 100
    const totalTtc = totalHt + taxe

    const formatNumber = (value) => {
        if (!Number.isFinite(value)) {
            return ''
        }
        return value.toFixed(2)
    }

    const addInvoiceLine = () => {
        setAdditionalLines((previousLines) => [
            ...previousLines,
            {
                article: '',
                qty: '',
                amount: '',
                remPercent: '',
                manualRemise: '',
                taxRate: '20',
            },
        ])
    }

    const updateInvoiceLine = (lineIndex, field, value) => {
        setAdditionalLines((previousLines) =>
            previousLines.map((line, index) =>
                index === lineIndex ? { ...line, [field]: value } : line,
            ),
        )
    }

    const computeInvoiceLine = (line) => {
        const lineQty = parseNumber(line.qty)
        const lineAmount = parseNumber(line.amount)
        const lineTaxRate = parseNumber(line.taxRate)
        const lineRemPercent = parseNumber(line.remPercent)
        const remPercentFilled = line.remPercent.trim() !== ''
        const lineRemise = remPercentFilled
            ? (lineRemPercent / 100) * lineAmount
            : parseNumber(line.manualRemise)
        const lineTotalHt = lineQty * lineAmount - lineRemise
        const lineTaxe = lineTotalHt * lineTaxRate / 100
        const lineTotalTtc = lineTotalHt + lineTaxe

        return {
            remPercentFilled,
            lineRemise,
            lineTaxRate,
            lineTotalHt,
            lineTaxe,
            lineTotalTtc,
        }
    }

    const vatSummaries = useMemo(() => {
        const groupedByRate = new Map()
        const invoiceLines = [
            {
                hasData: qty.trim() !== '' || amount.trim() !== '',
                rate: taxRateNumber,
                ht: totalHt,
                vat: taxe,
                ttc: totalTtc,
            },
            ...additionalLines.map((line) => {
                const lineQty = parseNumber(line.qty)
                const lineAmount = parseNumber(line.amount)
                const lineTaxRate = parseNumber(line.taxRate)
                const lineRemPercent = parseNumber(line.remPercent)
                const remPercentFilled = line.remPercent.trim() !== ''
                const lineRemise = remPercentFilled
                    ? (lineRemPercent / 100) * lineAmount
                    : parseNumber(line.manualRemise)
                const lineTotalHt = lineQty * lineAmount - lineRemise
                const lineTaxe = lineTotalHt * lineTaxRate / 100
                const lineTotalTtc = lineTotalHt + lineTaxe

                return {
                    hasData: line.qty.trim() !== '' || line.amount.trim() !== '',
                    rate: lineTaxRate,
                    ht: lineTotalHt,
                    vat: lineTaxe,
                    ttc: lineTotalTtc,
                }
            }),
        ]

        invoiceLines.forEach((line) => {
            if (!line.hasData) {
                return
            }

            const rateKey = String(line.rate)
            const previous = groupedByRate.get(rateKey) || { rate: line.rate, ht: 0, vat: 0, ttc: 0 }
            groupedByRate.set(rateKey, {
                rate: line.rate,
                ht: previous.ht + line.ht,
                vat: previous.vat + line.vat,
                ttc: previous.ttc + line.ttc,
            })
        })

        return Array.from(groupedByRate.values()).sort((a, b) => a.rate - b.rate)
    }, [additionalLines, amount, qty, taxRateNumber, taxe, totalHt, totalTtc])

    const globalTotals = useMemo(() => (
        vatSummaries.reduce(
            (accumulator, summary) => ({
                ht: accumulator.ht + summary.ht,
                vat: accumulator.vat + summary.vat,
                ttc: accumulator.ttc + summary.ttc,
            }),
            { ht: 0, vat: 0, ttc: 0 },
        )
    ), [vatSummaries])

        const handleInvoicePdf = async (event) => {
                event.preventDefault()
            setSubmitError('')
            setSubmitting(true)

                const form = event.currentTarget
                if (!form.checkValidity()) {
                        form.reportValidity()
                        return
                }

                const mainLine = {
                    article: document.getElementById('invoice-item-name')?.value || '',
                    qty: qtyNumber,
                    amount: amountNumber,
                    remise: computedRemise,
                    taxRate: taxRateNumber,
                    totalHt,
                    totalTtc,
                }

                const otherLines = additionalLines
                    .map((line) => {
                        const computedLine = computeInvoiceLine(line)
                        return {
                            article: line.article,
                            qty: parseNumber(line.qty),
                            amount: parseNumber(line.amount),
                            remise: computedLine.lineRemise,
                            taxRate: computedLine.lineTaxRate,
                            totalHt: computedLine.lineTotalHt,
                            totalTtc: computedLine.lineTotalTtc,
                            hasData: line.qty.trim() !== '' || line.amount.trim() !== '' || line.article.trim() !== '',
                        }
                    })

                const allLines = [
                    {
                        ...mainLine,
                        hasData: qty.trim() !== '' || amount.trim() !== '' || mainLine.article.trim() !== '',
                    },
                    ...otherLines,
                ]
                    .filter((line) => line.hasData)
                    .map((line) => {
                        const sanitizedLine = { ...line }
                        delete sanitizedLine.hasData
                        return sanitizedLine
                    })

                const pdfPayload = {
                        customer: document.getElementById('customer')?.value || '',
                        customerAddress: document.getElementById('customer-adress')?.value || '',
                        customerEmail: document.getElementById('customer-email')?.value || '',
                        customerSiret: document.getElementById('customer-siret')?.value || '',
                        lines: allLines,
                        vatSummaries,
                        globalTotals,
                }

                try {
                    const numInvoice = document.getElementById('num-invoice')?.value || `FAC-${Date.now()}`
                    
                    let pdfUrl = null
                    let pdfFileName = `${numInvoice}.pdf`
                    
                    try {
                        const pdfResult = generateInvoicePdf(pdfPayload, {
                            download: false,
                            fileName: pdfFileName,
                        })
                        console.log('📄 PDF généré:', { hasBlob: !!pdfResult?.blob, blobSize: pdfResult?.blob?.size })
                        
                        if (pdfResult?.blob) {
                            pdfUrl = await uploadPdfBlob(pdfResult.blob, pdfFileName)
                            console.log('☁️ PDF uploadé:', { hasUrl: !!pdfUrl, url: pdfUrl })
                        }
                    } catch (pdfErr) {
                        console.warn('⚠️ Erreur génération PDF:', pdfErr.message)
                    }

                    const res = await fetch(`${API_BASE}/invoices`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            num_invoice: numInvoice,
                            date_invoice: new Date().toISOString(),
                            name_item: mainLine.article,
                            quantity_item: qtyNumber,
                            ht_unit_item: amountNumber,
                            ht_item: totalHt,
                            tax_amount_item: taxe,
                            ttc_invoice_final: globalTotals.ttc,
                            ht_invoice_final: globalTotals.ht,
                            tva_invoice_final: globalTotals.vat,
                            invoice_mention: 'Facture generee depuis la modale',
                            ...(pdfUrl && { invoice_pdf: pdfUrl }),
                        }),
                    })

                    if (!res.ok) {
                        const errorText = await res.text()
                        throw new Error(
                            `Erreur creation facture (${res.status})${errorText ? `: ${errorText}` : ''}`,
                        )
                    }

                    generateInvoicePdf(pdfPayload, { download: true, fileName: pdfFileName })
                    onCreated?.()
                    onClose?.()
                } catch (error) {
                    setSubmitError(error.message || 'Erreur inconnue')
                } finally {
                    setSubmitting(false)
                }
        }
        
        const [clientSelectionne, setClientSelectionne] = useState(null);

        const handleSubmit = () => {
        console.log("Client choisi :", clientSelectionne);
        // clientSelectionne = { id, nom, email, telephone }
  };

    return (
    <div>
        <form method="get" className="invoice-create" action="traitement-formulaire.php" onSubmit={handleInvoicePdf}>
            <fieldset className="invoice">
                <div className = "customer-field">
                    <p className="invoice-head">
                        <label htmlFor="num-invoice" className="required">Numero facture</label>
                        <input type="text" name="num-invoice" id="num-invoice" placeholder="FAC-2026-001" required></input>
                    </p>
                    <p className="invoice-head">
                        <label htmlFor="customer" className="required">Nom du client</label>
                        <ClientSelect
                        value={clientSelectionne}
                        onChange={setClientSelectionne}
                        placeholder="Rechercher un client..."
                        />
                        <button type="button" onClick={handleSubmit}>Valider</button>
                    </p>
                    <p className="invoice-head">
                        <label htmlFor="customer-adress" className="required">Adresse du client</label>
                        <input type="text" name="customer-adress" id="customer-adress" placeholder="Ex: 123 Rue de la paix, 75001 Paris" required></input>
                    </p>
                    <p className="invoice-head">
                        <label htmlFor="customer-email" className="required">Mail du client</label>
                        <input type="text" name="customer-email" id="customer-email" placeholder="Ex: abcdef@ghijk.fr" required></input>
                    </p>
                    <p className="invoice-head">
                        <label htmlFor="customer-siret" className="required">SIRET du client</label>
                        <input type="text" name="customer-siret" id="customer-siret" placeholder="12345678900099" required></input>
                    </p>
                </div>
                <div className="item-field">
                    <div className="first-invoice">
                        <p className="invoice-item">
                            <label htmlFor="invoice-item-name" className="required">Articles / Services</label>
                            <input type="text" name="invoice-item-name" id="invoice-item-name" placeholder="Description" required></input>
                        </p>
                        <p className="invoice-item">
                            <label htmlFor="invoice-item-qty" className="required">Quantitée</label>
                            <input
                                type="text"
                                name="invoice-item-qty"
                                id="invoice-item-qty"
                                placeholder="1"
                                value={qty}
                                onChange={(event) => setQty(event.target.value)}
                                required
                            ></input>
                        </p>
                        <p className="invoice-item">
                            <label htmlFor="invoice-item-amount" className="required">Montant HT</label>
                            <input
                                type="text"
                                name="invoice-item-amount"
                                id="invoice-item-amount"
                                placeholder="Montant HT"
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}
                                required
                            ></input>
                        </p>
                        <p className="invoice-item">
                            <label htmlFor="invoice-item-rem" className="non-required">Remise (en %)</label>
                            <input
                                type="text"
                                name="invoice-item-rem"
                                id="invoice-item-rem"
                                placeholder="%"
                                value={remPercent}
                                onChange={(event) => setRemPercent(event.target.value)}
                            ></input>
                        </p>
                        <p className="invoice-item">
                            <label htmlFor="invoice-item-remise" className="non-required">Remise</label>
                            <input
                                type="text"
                                name="invoice-item-remise"
                                id="invoice-item-remise"
                                placeholder="Remise"
                                value={isRemPercentFilled ? formatNumber(computedRemise) : manualRemise}
                                onChange={(event) => setManualRemise(event.target.value)}
                                disabled={isRemPercentFilled}
                            ></input>
                        </p>
                        <p className="invoice-item">
                            <label htmlFor="invoice-item-ht-total" className="required">Total HT</label>
                            <input
                                type="text"
                                name="invoice-item-ht-total"
                                id="invoice-item-ht-total"
                                placeholder="Total HT"
                                value={formatNumber(totalHt)}
                                readOnly
                                required
                                disabled
                            ></input>
                        </p>
                        <p className="invoice-item">
                            <label htmlFor="invoice-item-tax" className="required">Taux de TVA</label>
                            <input 
                                type="text" 
                                name="invoice-item-tax" 
                                id="invoice-item-tax" 
                                placeholder="20%" 
                                value={taxRate}
                                onChange={(event) => setTaxRate(event.target.value)}
                                required></input>
                        </p>
                        <p className="invoice-item">
                            <label htmlFor="invoice-item-total" className="required">Total TTC</label>
                            <input 
                                type="text" 
                                name="invoice-item-total" 
                                id="invoice-item-total" 
                                placeholder="Total TTC" 
                                value={formatNumber(totalTtc)}
                                required
                                disabled
                                readOnly
                            ></input>  
                        </p>
                    </div>
                    <div className="other-invoice">
                        {additionalLines.map((line, index) => {
                            const computedLine = computeInvoiceLine(line)
                            return (
                                <div className="invoice-line" key={`line-${index}`}>
                                    <p className="invoice-item">
                                        <input
                                            type="text"
                                            name={`invoice-item-name-${index}`}
                                            id={`invoice-item-name-${index}`}
                                            placeholder="Description"
                                            value={line.article}
                                            onChange={(event) => updateInvoiceLine(index, 'article', event.target.value)}
                                        ></input>
                                    </p>
                                    <p className="invoice-item">
                                        <input
                                            type="text"
                                            name={`invoice-item-qty-${index}`}
                                            id={`invoice-item-qty-${index}`}
                                            placeholder="1"
                                            value={line.qty}
                                            onChange={(event) => updateInvoiceLine(index, 'qty', event.target.value)}
                                        ></input>
                                    </p>
                                    <p className="invoice-item">
                                        <input
                                            type="text"
                                            name={`invoice-item-amount-${index}`}
                                            id={`invoice-item-amount-${index}`}
                                            placeholder="Montant HT"
                                            value={line.amount}
                                            onChange={(event) => updateInvoiceLine(index, 'amount', event.target.value)}
                                        ></input>
                                    </p>
                                    <p className="invoice-item">
                                        <input
                                            type="text"
                                            name={`invoice-item-rem-${index}`}
                                            id={`invoice-item-rem-${index}`}
                                            placeholder="%"
                                            value={line.remPercent}
                                            onChange={(event) => updateInvoiceLine(index, 'remPercent', event.target.value)}
                                        ></input>
                                    </p>
                                    <p className="invoice-item">
                                        <input
                                            type="text"
                                            name={`invoice-item-remise-${index}`}
                                            id={`invoice-item-remise-${index}`}
                                            placeholder="Remise"
                                            value={computedLine.remPercentFilled ? formatNumber(computedLine.lineRemise) : line.manualRemise}
                                            onChange={(event) => updateInvoiceLine(index, 'manualRemise', event.target.value)}
                                            disabled={computedLine.remPercentFilled}
                                        ></input>
                                    </p>
                                    <p className="invoice-item">
                                        <input
                                            type="text"
                                            name={`invoice-item-ht-total-${index}`}
                                            id={`invoice-item-ht-total-${index}`}
                                            placeholder="Total HT"
                                            value={formatNumber(computedLine.lineTotalHt)}
                                            readOnly
                                            disabled
                                        ></input>
                                    </p>
                                    <p className="invoice-item">
                                        <input
                                            type="text"
                                            name={`invoice-item-tax-${index}`}
                                            id={`invoice-item-tax-${index}`}
                                            placeholder="20%"
                                            value={line.taxRate}
                                            onChange={(event) => updateInvoiceLine(index, 'taxRate', event.target.value)}
                                        ></input>
                                    </p>
                                    <p className="invoice-item">
                                        <input
                                            type="text"
                                            name={`invoice-item-total-${index}`}
                                            id={`invoice-item-total-${index}`}
                                            placeholder="Total TTC"
                                            value={formatNumber(computedLine.lineTotalTtc)}
                                            readOnly
                                            disabled
                                        ></input>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <button id="addLineBtn" type="button" onClick={addInvoiceLine}>Ajouter une ligne</button>
                    <div className="invoice-summary">
                        <h3>Sous-totaux par TVA</h3>
                        {vatSummaries.length === 0 && <p>Aucune ligne chiffrée.</p>}
                        {vatSummaries.map((summary) => (
                            <div className="invoice-summary-row" key={`vat-${summary.rate}`}>
                                <span>TVA {formatNumber(summary.rate)}%</span>
                                <span>HT: {formatNumber(summary.ht)} €</span>
                                <span>TVA: {formatNumber(summary.vat)} €</span>
                                <span>TTC: {formatNumber(summary.ttc)} €</span>
                            </div>
                        ))}
                        <div className="invoice-summary-total">
                            <strong>Total global HT: {formatNumber(globalTotals.ht)} €</strong>
                            <strong>Total global TVA: {formatNumber(globalTotals.vat)} €</strong>
                            <strong>Total global TTC: {formatNumber(globalTotals.ttc)} €</strong>
                        </div>
                    </div>
                    </div>
            <div>   
            </div>
            <div className="invoice-payment">
            </div>
            <div className="invoice-mentions">
            </div>

                        {submitError && <p className="error" style={{ color: 'red' }}>{submitError}</p>}
                        <p>
                                <input id="createInvoice" className="btn" type="submit" value={submitting ? 'Enregistrement...' : 'Generer la facture'} disabled={submitting}></input>
            </p>
            </fieldset>
        </form>
    </div>
    )
}

const CreateInvoice = ({ onCreated }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <p className="create_invoice">
                <input
                    id="createInvoiceOpen"
                    className="invoice-btn create-btn btn"
                    type="button"
                    value="Creer une facture"
                    onClick={() => setIsOpen(true)}
                ></input>
            </p>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Creation de facture</h2>
                        <button type="button" onClick={() => setIsOpen(false)} style={{ float: 'right' }}>
                            x
                        </button>
                        <CreateInvoiceForm onCreated={onCreated} onClose={() => setIsOpen(false)} />
                    </div>
                </div>
            )}
        </div>
    )
}

const InvoicePage = () => {
    const [refreshTrigger, setRefreshTrigger] = useState(0)

    return (
        <div>
            <CreateInvoice onCreated={() => setRefreshTrigger((prev) => prev + 1)} />
            <InvoiceTable refreshTrigger={refreshTrigger} />
        </div>
    )
}

export default InvoicePage;