'use client'
import VideosCards from './VideosCards'

interface VideoItem {
  id: string
  title: string
  youtubeUrl: string
}

const VideosUploadsLogic = () => {
  const videoList: VideoItem[] = [
    {
      id: '1',
      title: 'SOLARIS Phone App with BLE Demonstration',
      youtubeUrl: 'https://youtu.be/NsRaMGlr8M8',
    },
    {
      id: '2',
      title: 'SOLARIS Light Sensor Demonstration',
      youtubeUrl: 'https://youtu.be/WU5yMIAAkhU',
    },
    {
      id: '3',
      title: 'SOLARIS Power Sensor Demonstration',
      youtubeUrl: 'https://youtu.be/Z0BdR1CbTsc',
    },
    {
      id: '4',
      title: 'SOLARIS Ultrasonic Sensor Demonstration',
      youtubeUrl: 'https://youtu.be/QWuNQE30TkI',
    },
    // Add more videos here as needed
  ]

  return (
    <div className="pt-16 pb-16 w-[90%] max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--text)] mb-16 pb-8 relative">
        Videos
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 md:w-[22rem] lg:w-[24rem] h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] rounded-full shadow-lg shadow-[var(--accent)]/50" />
      </h1>
      <VideosCards videos={videoList} />
    </div>
  )
}

export default VideosUploadsLogic
