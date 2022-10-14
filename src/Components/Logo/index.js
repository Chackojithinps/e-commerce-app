import React, { useContext } from 'react'

import { ProductContext } from '../../Context/ProductContext'
import './styles.css'
const Logo = () => {
    const {count}=useContext(ProductContext)
  return (
    <div className='Logo-container'>
        <div className='image-logo'>
           <i class="fa-solid fa-cart-shopping logo-cart-button"></i>
        </div>
        <div className='logo-name'>
           <h1 className='logo-text'>Jithin's Shopping App</h1>
        </div>
        <div className='logo-icons'>
            <div  className='like-Icon'>
                <svg className='first-likeicon' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="0" stroke="grey">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
          
            <div className='cart-Icon'>
                
                <svg className='first-cartIcon' xmlns="http://www.w3.org/2000/svg" fill="none"  stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
               
            </div>
         


        </div>
        <div className='count-logo'>{count}</div>
       
    </div>
  )
}

export default Logo
