/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useTaskContext } from '../../Hooks/useTaskContext'

import './msg.css'

export function Msg ({ message }) {
  const [showMsg, setShowMsg] = useState(false)
  const [tasks] = useTaskContext()
  const msgElement = document.getElementById('msg')

  useEffect(() => {
    if (msgElement) {
      msgElement.style.display = showMsg ? 'block' : 'none'
    }
  })

  useEffect(() => {
    setShowMsg(true)

    const timeout = setTimeout(() => { setShowMsg(false) }, 3000)
    return () => { clearTimeout(timeout) }
  }, [tasks])

  return (
    <div id='msg' className='msj'>
      <p>{message}</p>
    </div>
  )
}
