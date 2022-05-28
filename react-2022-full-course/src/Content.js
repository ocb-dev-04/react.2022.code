import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            item: 'Item 1',
            checked: true
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

    const handleCheck = (id) => {
        const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('todoListItems', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter(item => item.id !== id);
        setItems(listItems);
        localStorage.setItem('todoListItems', JSON.stringify(listItems));
    }

    return (
        <main>
            {items.length ? (<ul>
                {items.map(data => (
                    <li className='item' key={data.id}>
                        <input
                            type='checkbox'
                            checked={data.checked}
                            onChange={() => handleCheck(data.id)}
                        />
                        <label
                            onDoubleClick={() => handleCheck(data.id)}
                        >{data.item}</label>
                        <FaTrashAlt
                            onClick={() => handleDelete(data.id)}
                            role="button"
                            tabIndex="0" />
                    </li>
                ))}
            </ul>) : (<p>No items to show</p>)}
        </main>
    )
}
