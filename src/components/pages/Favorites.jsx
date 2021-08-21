import React from 'react'
import Card from '../Card'


export default function Favorites({items, onAddToFavorites}) {
  return (
    <div className="content">
    <div className="inputDiv">
      <h1>Мои закладки</h1>
      </div>
    <div className='content-box flex-wrap'>
    {items.map((item, index) => (
        <Card
          key={index}
          favorited={true}
          onFavorite={onAddToFavorites}
          {...item}
        
        >


        </Card>
      ))}

      

    </div>
  </div>
  
  )
}
