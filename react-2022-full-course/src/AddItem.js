import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({
  newItem,
  setNewItem,
  handleSumit,
}) => {

  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSumit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required />
      <button
        type='submit'
        aria-label='Add Item'
        onClick={(e) => inputRef.current.focus()}><FaPlus /></button>
    </form>
  )
}

export default AddItem