import React, { useState, useEffect } from 'react'

export default function Login (props) {
  window.addEventListener('storage', (e) => {
    console.log(e.newValue)
  })

  return (
    <div>
      <button>点我</button>
    </div>
  )
}
