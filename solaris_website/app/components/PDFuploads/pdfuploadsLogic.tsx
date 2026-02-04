'use client'
import React from 'react'
import PDFCards from './PDFCards'

interface PDFItem {
  id: string
  title: string
  filename: string
  description?: string
}

const PdfUploadsLogic = () => {
  // Add your PDFs here - just update this list when you add new PDFs to public folder
  const pdfList: PDFItem[] = [
    {
      id: '1',
      title: 'Divide and Conquer Report',
      filename: 'Divide_and_Conquer.pdf',
      description: 'First sample report'
    }
    // Add more PDFs here as needed
  ]

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[var(--text)] text-3xl font-bold mb-8 text-center">PDF Reports</h1>
        <PDFCards pdfs={pdfList} />
      </div>
    </div>
  )
}

export default PdfUploadsLogic