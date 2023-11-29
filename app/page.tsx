'use client'

import { useEffect, useRef } from 'react'

export default function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    let intersectionObserver: IntersectionObserver | null

    if (videoRef.current) {
      intersectionObserver = new IntersectionObserver(
        (entires) => {
          if (entires[0].isIntersecting) {
            videoRef.current?.play()
          } else {
            videoRef.current?.pause()
          }
        },
        {
          rootMargin: '0px 0px 0px 0px',
          threshold: 0.9,
        }
      )

      intersectionObserver.observe(videoRef.current)
    }

    return () => {
      intersectionObserver?.disconnect()
      intersectionObserver = null
    }
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="grow flex flex-col justify-center items-center">
        <div className="w-full h-[1200px] bg-rose-300"></div>
        <video
          ref={videoRef}
          className="w-1/2"
          muted
          playsInline
          controls
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
        <div className="w-full h-[1200px] bg-rose-300"></div>
      </div>
    </div>
  )
}
