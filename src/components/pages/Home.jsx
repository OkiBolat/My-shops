import React from 'react'
import Card from '../Card'

export default function Home({items, searchValue, setSearchValue, onAddToFavorites, onChangeSearchInput,img_map, removeBtn, searchIcon,onAddToCart ,setCartItems}) {
  return (
    <div className="content">
    <div className="inputDiv">
      <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все товары'}</h1>
      {searchValue && <img className="remove" onClick={() => setSearchValue('')} src={removeBtn} alt='a' />}
      <div className="search-block pos-r">
        <img className='pos-a' src={searchIcon} alt="search icon" />
        <input onChange={onChangeSearchInput} value={searchValue} className='clear' type="text" placeholder='Поиск...' />

      </div>

    </div>
    <img src="" alt="" />
    <div className='content-box flex-wrap'>

      {items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
        <Card
          key={index}
          setCartItems={setCartItems}
          name={item.name}
          image={img_map[item.image]}
          price={item.price}
          onPlus={(obj) => onAddToCart(obj)}
          onFavorite = {(obj) => onAddToFavorites(obj)}
        >


        </Card>
      ))}

    </div>
  </div>
  )
}
