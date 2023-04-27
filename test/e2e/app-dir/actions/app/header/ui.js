'use client'

import { useState } from 'react'

export default function UI({
  setCookie,
}) {
  const [result, setResult] = useState('')

  return (
    <div>
      <h1>{result}</h1>
      <button
        id="setCookie"
        onClick={async () => {
          // set cookie on server side
          const random = Math.random()
          const res = await setCookie('random-server', random)
          setResult(
            random +
              ':' +
              res.value +
              ':' +
              document.cookie.match(/random-server=([^;]+)/)?.[1]
          )
        }}
      >
        setCookie
      </button>
    </div>
  )
}
