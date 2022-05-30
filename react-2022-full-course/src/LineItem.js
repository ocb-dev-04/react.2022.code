import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({
    data,
    handleCheck,
    handleDelete
}) => {
    return (
        <li className='item' key={data.id}>
            <input
                type='checkbox'
                checked={data.checked}
                onChange={() => handleCheck(data.id)}
            />
            <label
                onDoubleClick={() => handleCheck(data.id)}
                style={{ textDecoration: data.checked ? 'line-through' : 'none' }}
            >{data.item}</label>
            <FaTrashAlt
                onClick={() => handleDelete(data.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${data.item}`} />
        </li>
    )
}

export default LineItem