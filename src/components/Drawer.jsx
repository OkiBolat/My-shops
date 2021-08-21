import React from 'react'

// import cardImg from '../assets/img/kozyapapaha.jpeg'
import removeBtn from '../assets/img/remove__btn.svg'
import arrow from '../assets/img/arrow.svg'

import './drawer.scss'

export default function Drawer({ onClose, cartItems, onRemove }) {



  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className='mb-30'>Корзина <img onClick={onClose} src={removeBtn} alt="removecart" /></h2>
        {cartItems.length > 0 ?
          <div>
            <div className='items'>


              {cartItems.map(obj => (



                <div className="cartItem mb-20">
                  <img className='cartImg' src={obj.image} alt="card images" />
                  <div>
                    <p>{obj.name}</p>
                    <b>{obj.price}</b>

                  </div>
                  <img onClick={() => onRemove(obj.id)} className='remove__btn' src={removeBtn} alt="remove" />
                </div>
              ))}


            </div>
            <div className="drawer__add mb-2">
              <div className="d-flex align-center justify-between">
                <p>Итого:</p>
                <div></div>
                <b>21 497</b>
              </div>
              <div className="d-flex align-center justify-between">
                <p>Налог 5%:</p>
                <div></div>
                <b>1074</b>
              </div>
              <button className=' drawer__add-button add-button'>Оформить заказ <img src={arrow} alt="arrow" /></button>
            </div>
          </div>
          : <div>
            <h1>Корзина пустая</h1>
            <button onClick={onClose} className="back-button">Вернуться назад</button>
          </div>}







      </div>
    </div>
  )

}