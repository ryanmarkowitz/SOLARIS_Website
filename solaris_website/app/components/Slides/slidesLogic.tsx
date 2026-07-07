'use client'
import React from 'react'
import PDFCards from '../PDFuploads/PDFCards'
import { getAssetPath } from '../../utils/assetPath'

interface PDFItem {
  id: string
  title: string
  filename: string
  description?: string
}

const SlidesLogic = () => {
  const slidesList: PDFItem[] = [
    {
      id: '1',
      title: 'SOLARIS Critical Design Review Presentation',
      filename: getAssetPath('/Midterm_CDR.pdf'),
      description: 'Presentation for the CDR.'
    }
  ]

  return (
    <div className="pt-16 pb-16 w-[90%] max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--text)] mb-16 pb-8 relative">
        Presentation Slides
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 md:w-[22rem] lg:w-[24rem] h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] rounded-full shadow-lg shadow-[var(--accent)]/50" />
      </h1>
      <PDFCards pdfs={slidesList} />
    </div>
  )
}

export default SlidesLogic
