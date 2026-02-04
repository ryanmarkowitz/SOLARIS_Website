'use client'
import React, { useState } from 'react'
import PDFViewerModal from './PDFViewerModal'

interface PDFItem {
  id: string
  title: string
  filename: string
  description?: string
}

interface PDFCardsProps {
  pdfs: PDFItem[]
}

const PDFCards: React.FC<PDFCardsProps> = ({ pdfs }) => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  const openPdf = (filename: string) => {
    setSelectedPdf(filename)
  }

  const closePdf = () => {
    setSelectedPdf(null)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {pdfs.map((pdf) => (
          <div 
            key={pdf.id} 
            className="w-80 bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-colors cursor-pointer"
            onClick={() => openPdf(pdf.filename)}
          >
            <div className="relative h-48 bg-[var(--surface-2)] flex items-center justify-center">
              <iframe
                src={`${pdf.filename}#page=1`}
                className="w-full h-full border-0 pointer-events-none"
                title={`${pdf.title} preview`}
              />
            </div>
            <div className="p-4">
              <h3 className="text-[var(--text)] text-lg font-bold mb-2">{pdf.title}</h3>
              {pdf.description && (
                <p className="text-[var(--muted)] text-sm">{pdf.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <PDFViewerModal filename={selectedPdf} onClose={closePdf} />
    </>
  )
}

export default PDFCards