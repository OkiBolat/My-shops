import React from 'react'
import Card from '../Card'


export default function Home({loading, items, searchValue, setSearchValue, onAddToFavorites, onChangeSearchInput,img_map, removeBtn, searchIcon,onAddToCart ,setCartItems}) {


  const renderSkeletone = () => {
    return (
      [...Array(10)]).map((item, index) => (
        <Card
          key={index}
          item = {item}
          
        >


        </Card>
      ))

  }




  const renderItems = () => {
    const filtredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    return (
      loading ? renderSkeletone() : filtredItems).map((item, index) => (
        <Card
          key={index}
          setCartItems={setCartItems}
          name={item.name}
          image={img_map[item.image]}
          price={item.price}
          onPlus={(obj) => onAddToCart(obj)}
          loading = {loading}
          onFavorite = {(obj) => onAddToFavorites(obj)}
          
        >


        </Card>
      ))

  }



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
      
{renderItems()}

    </div>
  </div>
  )
}
