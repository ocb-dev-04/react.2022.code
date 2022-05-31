import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('')

  return (
    <div className='App'>
      <div className='colorDiv'>
        {color ? (<div className='colorDiv' style={{ backgroundColor: `${color}` }}></div>) : (<h1>Empty color</h1>)}
      </div>

      <input
        autoFocus
        type='text'
        placeholder='Enter a color'
        onChange={(e) => setColor(e.target.value)}
        required />
    </div>
  )
}

export default App