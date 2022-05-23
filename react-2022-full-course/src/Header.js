import React from 'react'

function Header() {
    const headerStyle = {
        backgroundColor: 'royalblue',
        color: 'white',
    };

    return (
        <header style={headerStyle}>
            <h1>Groceries List</h1>
        </header>
    )
}

export default Header