'use client'
import React from 'react'
import PDFCards from './PDFCards'
import { getAssetPath } from '../../utils/assetPath'

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
      filename: getAssetPath('/Divide_and_Conquer_Revised.pdf'),
      description: 'Revised report on the Divide and Conquer strategy.'
    },
    // Add more PDFs here as needed
    {
      id: '2',
      title: 'Midterm Report',
      filename: getAssetPath('/Midterm_Report.pdf'),
      description: 'Report for the midterm project. Includes progress on chapters 3, 4, 5, 6, and 7'
    },
    {
      id: '3',
      title: 'Revised Midtem Report',
      filename: getAssetPath('/Midterm_Report_Revised.pdf'),
      description: 'Revisions and additions made to the original Midterm Report.'
    },
    {
      id: '4',
      title: 'Fianl Report Rough Draft',
      filename: getAssetPath('/Final_Report_Rough_Draft.pdf'),
      description: 'Revisions and additions made to the original Midterm Report.'
    },
    {
      id: '5',
      title: 'Fianl Report With Revisions',
      filename: getAssetPath('/Group12_SD1_FinalReport.pdf'),
      description: 'Revisions and additions made to the original Midterm Report.'
    }
  ]

  return (
    <div className="pt-16 pb-16 w-[90%] max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--text)] mb-16 pb-8 relative">
        PDF Reports
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 md:w-[22rem] lg:w-[24rem] h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] rounded-full shadow-lg shadow-[var(--accent)]/50" />
      </h1>
      <PDFCards pdfs={pdfList} />
    </div>
  )
}

export default PdfUploadsLogic