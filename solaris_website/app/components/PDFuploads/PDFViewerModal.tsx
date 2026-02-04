'use client'
import React from 'react'

interface PDFViewerModalProps {
  filename: string | null
  onClose: () => void
}

const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ filename, onClose }) => {
  if (!filename) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg w-full h-full m-4 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-[var(--border)] bg-[var(--surface)] relative z-10">
          <h3 className="text-[var(--text)] text-lg font-bold">PDF Viewer</h3>
          <button
            onClick={onClose}
            className="text-[var(--muted)] hover:text-[var(--text)] text-2xl bg-[var(--surface-2)] hover:bg-[var(--border)] rounded px-2 py-1"
          >
            ×
          </button>
        </div>
        <div className="flex-1">
          <iframe
            src={filename}
            className="w-full h-full border-0"
            title="PDF Viewer"
          />
        </div>
      </div>
    </div>
  )
}

export default PDFViewerModal