import React from 'react'

function Header({ title }) {
    const headerStyle = {
        backgroundColor: 'royalblue',
        color: 'white',
    };

    return (
        <header style={headerStyle}>
            <h1>{title}</h1>
        </header>
    )
}

export default Header