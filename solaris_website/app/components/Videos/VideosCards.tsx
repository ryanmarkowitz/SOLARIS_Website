'use client'
import React from 'react'

interface VideoItem {
  id: string
  title: string
  youtubeUrl: string
}

interface VideosCardsProps {
  videos: VideoItem[]
}

const getYouTubeId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/)
  return match ? match[1] : ''
}

const VideosCards: React.FC<VideosCardsProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {videos.map((video) => {
        const videoId = getYouTubeId(video.youtubeUrl)
        const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

        return (
          <a
            key={video.id}
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-80 bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-colors"
          >
            <div className="relative h-48 bg-[var(--surface-2)]">
              <img
                src={thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-black/60 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-[var(--text)] text-lg font-bold">{video.title}</h3>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default VideosCards
