'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [isVisibilitychange, setIsVisibilitychange] = useState(false)

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      setIsVisibilitychange(true)
    })

    window.location.href = 'abc://'
  }, [])

  return (
    <div className="container h-full">
      <div className="h-full flex flex-col justify-center items-center text-3xl">
        <div>Invalid Url</div>
        {isVisibilitychange && <div>Page is hidden</div>}
      </div>
    </div>
  )
}
