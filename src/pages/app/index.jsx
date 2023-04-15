import React, { useRef, useImperativeHandle, useEffect, forwardRef } from 'react'
import './styles.less'

const Person = forwardRef(function (props, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    abc () {
      console.log(inputRef.current)
    },
    xxx () {
      console.log(2222)
    }
  }))
  return <input ref={inputRef} />
})

export default function App () {
  const ref = useRef()

  useEffect(() => {
    ref.current.abc()
  })

  return (
    <Person ref={ref} />
  )
}