import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AddItem from './AddItem'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SearchItem from './SearchItem'

import apiRequest from './apiRequest'

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
        setItems(listItems)
      } catch (error) {
        setFetchError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000)
  }, [])

  const handleSumit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  const addItem = async (item) => {
    const newItem = { id: uuidv4(), item, checked: false, };
    const postOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    };

    try {
      const response = await apiRequest(API_URL, postOptions)
      if (response) {
        setFetchError(response)
        return
      }

      const listItems = [...items, newItem]
      setItems(listItems)
    } catch (error) {
      alert(error.message)
    }
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
    
    const deleteOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
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
        {isLoading && <p style={{ color: "lime" }}>Loading...</p>}

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
