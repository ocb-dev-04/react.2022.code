import React from 'react'

export const Content = () => {
    const handleNameChange = () => {
        const names = ['fulano', 'fulanito', 'fulanote']
        const randomName = names[Math.floor(Math.random() * names.length)]
        return randomName;
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
        <div>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!!!
            </p>
            <button onClick={handleClick} >Click me</button>
            <button onClick={() => callName('Oscar')} >Click me to show name</button>
            <button onClick={(e) => showEvents(e)} >Click me to show events</button>
        </div>
    )
}
