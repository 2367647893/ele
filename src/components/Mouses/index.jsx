import React, { useState, useEffect } from 'react'

export default function useMouses (props) {
  const [xy, setXy] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.addEventListener('mousemove', ({ clientX, clientY}) => {
      setXy({
        x: clientX,
        y: clientY,
      })
    })
  }, [])

  return xy
}