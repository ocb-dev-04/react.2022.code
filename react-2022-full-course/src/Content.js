import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            item: 'Item 1',
            checked: false
        },
        {
            id: 2,
            item: 'Item 2',
            checked: false
        },
        {
            id: 3,
            item: 'Item 3',
            checked: false
        },
    ])



    return (
        <main>
            <ul>
            {items.map(data => (
                <li className='item' key={data.id}>
                    <input type='checkbox' checked={data.checked} onChange={() => {}} />
                    <label>{data.item}</label>
                    <FaTrashAlt role="button" tabIndex="0" />
                </li>
            ))}
            </ul>
        </main>
    )
}
