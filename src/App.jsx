import React, { useState } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'


// import Card from './components/Card'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'
import Header from './components/Header'
import Drawer from './components/Drawer'


import cardImg from './assets/img/2.jpeg'
import cardImg2 from './assets/img/3.jpeg'
import cardImg3 from './assets/img/4.jpeg'
import cardImg4 from './assets/img/kozyapapaha.jpeg'
import removeBtn from './assets/img/remove__btn.svg'

import 'macro-css'

import searchIcon from './assets/img/search-icon.png'

const img_map = {
  cardImg4: cardImg4,
  cardImg: cardImg,
  cardImg2: cardImg2,
  cardImg3: cardImg3
}





function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isFavorites, setIsFavorites] = useState([])
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)



  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get('https://6118e8a19bcfb40017168953.mockapi.io/items');
      const cartResponse = await axios.get('https://6118e8a19bcfb40017168953.mockapi.io/cart')
      const favoriteResponse = await axios.get('https://6118e8a19bcfb40017168953.mockapi.io/favorites')
      setIsLoading(false)

      setCartItems(cartResponse.data);
      setIsFavorites(favoriteResponse.data)
      
      
      setItems(itemsResponse.data);
      


    }
    fetchData()
  }, []);
  /////

  const onAddToCart = (obj) => {
    axios.post('https://6118e8a19bcfb40017168953.mockapi.io/cart', obj)
    const isContain = cartItems.find(o => o.id === obj.id)
    if (!isContain) {
      setCartItems(prev => [...prev, obj]);
      console.log(obj)
    } else {
      setCartItems(prev => prev.filter(item => item.id !== obj.id));
      axios.delete(`https://6118e8a19bcfb40017168953.mockapi.io/cart/${obj.id}`);
    }
  }

  /////
  const onRemoveItem = (id) => {
    axios.delete(`https://6118e8a19bcfb40017168953.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  //////
  const onAddToFavorites = async (obj) => {
    try {
      if (isFavorites.find(o => obj.id === o.id)) {
        axios.delete(`https://6118e8a19bcfb40017168953.mockapi.io/favorites/${obj.id}`);
        // setIsFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://6118e8a19bcfb40017168953.mockapi.io/favorites', obj);
        setIsFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки')
    }
  }
  /////

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
    console.log(searchValue)
  }

  /////
  return (

    <div className="wrapper clear">
      {isBasketOpen && <Drawer onRemove={onRemoveItem} cartItems={cartItems}
        onClose={() => setIsBasketOpen(false)}
      ></Drawer>}
      <Header onBasketClick={() => setIsBasketOpen(true)}></Header>
      <Route path="/" exact>
        <Home
          items={items}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorites={onAddToFavorites}
          img_map={img_map}
          removeBtn={removeBtn}
          searchIcon={searchIcon}
          onAddToCart={onAddToCart}
          setCartItems={setCartItems}
          loading = {isLoading}


        >

        </Home>
      </Route>
      <Route path="/favorites" exact>
        <Favorites
          items={isFavorites}
          img_map={img_map}
          onAddToFavorites={onAddToFavorites}
        >

        </Favorites>
      </Route>

    </div>
  );
}

export default App;
