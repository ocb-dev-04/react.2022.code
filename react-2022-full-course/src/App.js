import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AddItem from './AddItem'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SearchItem from './SearchItem'

function App() {
  const API_URL = "http://localhost:3500/items"

  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
      } catch (error) {
        setFetchError(error.message)
      }finally{
        setIsLoading(false)
      }
    }

    setTimeout(() => {(async () => await fetchItems())()}, 2000)
  }, [])

  const handleSumit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  const addItem = async (item) => {
    const newItem = { id: uuidv4(), item: item, checked: false, };
    try {
      const response = await fetch(API_URL,
        {
          method: "POST",
          body: JSON.stringify(newItem)
        })

      const created = await response.json()
      console.log(created)
      // const listItems = [...items, newItem]
      // setItems(listItems)
    } catch (error) {
      console.log(error.stack)
    }
  }

  const handleCheck = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
  }

  return (
    <div className="App">
      <Header
        title="Grocery App List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSumit={handleSumit} />

      <SearchItem
        search={search}
        setSearch={setSearch} />

      <main>
        {isLoading  && <p style={{ color: "lime" }}>Loading...</p>}
        
        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}

        {!fetchError && !isLoading && <Content
          items={items.filter(item => ((item.item.toLowerCase()).includes(search.toLowerCase())))}
          handleCheck={handleCheck}
          handleDelete={handleDelete} />}
      </main>

      <Footer
        itemsCount={items.length} />
    </div>
  )
}

export default App 
