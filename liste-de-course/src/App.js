import './App.css';
import Header from './components/Header';
import Items from './components/Items';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
        "id": 1,
        "name": "Carotte",
        "category": "aliment",
        "url": "https://sweetnitro.com/public/uploads/avatars/5030947003039744.jpg",
        "quantityAlreadyHave": 0,
        "quantityNeeded": 0,
        "wanted": true
    },
    {
      "id": 1,
      "name": "Carotte",
      "category": "aliment",
      "url": "https://sweetnitro.com/public/uploads/avatars/5030947003039744.jpg",
      "quantityAlreadyHave": 0,
      "quantityNeeded": 0,
      "wanted": true
  },
  {
    "id": 1,
    "name": "Carotte",
    "category": "aliment",
    "url": "https://sweetnitro.com/public/uploads/avatars/5030947003039744.jpg",
    "quantityAlreadyHave": 0,
    "quantityNeeded": 0,
    "wanted": true
  },
  {
    "id": 1,
    "name": "Carotte",
    "category": "aliment",
    "url": "https://sweetnitro.com/public/uploads/avatars/5030947003039744.jpg",
    "quantityAlreadyHave": 0,
    "quantityNeeded": 0,
    "wanted": true
  },
  {
    "id": 1,
    "name": "Carotte",
    "category": "aliment",
    "url": "https://sweetnitro.com/public/uploads/avatars/5030947003039744.jpg",
    "quantityAlreadyHave": 0,
    "quantityNeeded": 0,
    "wanted": false
  },
  ])

  return (
    <div className="container">
      <Header />
      <Items items={items}/>
    </div>
  );
}

export default App;
