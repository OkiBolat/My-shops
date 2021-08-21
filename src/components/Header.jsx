import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.png'
import basketSvg from '../assets/img/basket.svg'
import likeSvg from '../assets/img/like.svg'
import unionSvg from '../assets/img/Union.svg'

import './header.scss'

export default function Header({ onBasketClick }) {


  return (
    <header className="header">
      <Link to='/'>
        <div className='header__logo'>
          <img src={logo} alt="logo" />
          <div className='header__logo-name'>
            <h3>Magazin</h3>
            <p id='name'>Магазин одежды с национальной символикой</p>
          </div>
        </div>
      </Link>

      <ul className='header__logIn'>
        <li onClick={onBasketClick} >
          <img onClick={onBasketClick} src={basketSvg} alt="" />
          <span>123 руб</span>
        </li>
        <li>
          <Link to='/favorites'>
            <img src={likeSvg} alt="" />
          </Link>
          <img src={unionSvg} alt="" />
        </li>
      </ul>
    </header>
  )


}