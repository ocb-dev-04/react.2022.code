import React, { useState } from 'react'

import Content from './Content';
import Footer  from './Footer';
import Header from './Header'

function App() {
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
  ]);

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
    <div className="App">
      <Header
        title="Grocery App List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      <Footer
        itemsCount={items.length} />
    </div>
  );
}

export default App;
