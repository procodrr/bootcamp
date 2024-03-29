import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log('hii')
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return <h1 className="text-xl">Welcome to Our Home</h1>
}
