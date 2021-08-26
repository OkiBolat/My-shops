import React, {useState} from 'react'
import unliked from '../assets/img/unliked.svg'
import liked from '../assets/img/liked.svg'
import btnPlus from '../assets/img/btn-plus.svg'
import btnCheked from '../assets/img/btnCardGreen.svg'
import MyLoader from './MyLoader'


import './card.scss'
export default function Card({id ,name, price, image, onPlus, onFavorite, favorited=false, loading=false}) {

  
  const[isAdded, setIsAdded] = useState(false)
  const[isLiked, setIsLiked] = useState(favorited)


  const onClickPlus=() => {
      setIsAdded(!isAdded)
      onPlus({id, name, price, image})

      
  }
  const onChangeFavorite = () => {
    setIsLiked(!isLiked)
    onFavorite({id, name, price, image})
  }
  

  return (
    loading ? <MyLoader className="content__cards  cards" ></MyLoader> :  <div className="content__cards  cards">
    <div>
      <div className='favorite'>
        <img onClick={() => onChangeFavorite()} className='content__cards-like' src={isLiked ? liked : unliked} alt="unliked" />
      </div>
      <img className='content__cards-images' src={image? image : ''} alt="card images" />
    </div>
    <p className="content__cards-text">
      {name}</p>
    <div>
      <div>
        <span>Цена:</span>
        <p>{price}</p>
      </div>
      
      <button  onClick={()=> onClickPlus()} ><img src={!isAdded ? btnPlus: btnCheked} alt="checked" /></button>
      
    </div>

  </div>
    
   

  );


}