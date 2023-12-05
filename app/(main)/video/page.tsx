'use client'

import { useEffect, useRef } from 'react'

export default function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    let intersectionObserver: IntersectionObserver | null

    if (videoRef.current) {
      intersectionObserver = new IntersectionObserver(
        (entires) => {
          entires.forEach((entry) => {
            if (entry.isIntersecting) {
              videoRef.current?.play()
            } else {
              videoRef.current?.pause()
            }
          })
        },
        {
          rootMargin: '-10% 0px -10% 0px',
          threshold: 0.99,
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
    <div className="container">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-[1200px] bg-rose-300"></div>
        <video
          ref={videoRef}
          className="w-1/2"
          muted
          playsInline
          controls
          loop
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
        <div className="w-full h-[1200px] bg-rose-300"></div>
      </div>
    </div>
  )
}
