import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import AddItem from './AddItem';

import Content from './Content';
import Footer from './Footer';
import Header from './Header'
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoListItems')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const handleSumit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  const addItem = (item) => {
    const listItems = [...items, { id: uuidv4(), item, checked: false, }];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id);
    setAndSaveItems(listItems);
  }

  const setAndSaveItems = (listItems) => {
    setItems(listItems);
    localStorage.setItem('todoListItems', JSON.stringify(listItems));
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

      <Content
        items={items.filter(item => ((item.item.toLowerCase()).includes(search.toLowerCase())))}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />

      <Footer
        itemsCount={items.length} />
    </div>
  )
}

export default App;
