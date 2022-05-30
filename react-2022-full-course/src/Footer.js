import React from 'react'

const Footer = ({ itemsCount }) => {
  return (
    <footer>
      <p>Total {itemsCount === 1 ? "item" : "items"}: {itemsCount}</p>
    </footer>
  )
}
export default Footer