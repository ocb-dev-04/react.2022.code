import React, { useState } from 'react'

export const Content = () => {
    const [name, setName] = useState('Oscar')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ['fulano', 'fulanito', 'fulanote']
        const randomName = names[Math.floor(Math.random() * names.length)]
        setName(randomName)
    }

    const handleClick = () => {
        console.log('You clicked me!')
    }

    const callName = (name) => {
        console.log(`${name} was called!`)
    }

    const showEvents = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!!! and count is {count}
            </p>
            <button onClick={handleNameChange} >Click me</button>
            <button onClick={() => setCount(count + 1)} >Click me to show name</button>
            <button onClick={(e) => showEvents(e)} >Click me to show events</button>
        </main>
    )
}
