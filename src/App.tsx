import React, { useState } from "react"

function App() {
  
  const [data, setData] = useState('');

  const calculations = (a: number, b: number) => {
    const result = a + b
    return result
  }

  return (
    <>
      <h1 className='text-3xl font-bold underline'>
      Hello world! {data}
      </h1>
    </>
  )
}

export default App
