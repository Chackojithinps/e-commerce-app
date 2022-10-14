import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/ProductContext'
import './styles.css'
const Card = ({items}) => {
  const {count,setCount}=useContext(ProductContext)
  const handleCart=()=>{
    setCount(count+1)
   
  }
  return (
    
    <div className='card'>
       <div className='cardLink'>
          <div className='likeIcon'> 
            <svg className='likeicon' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="0" stroke="grey">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            
          </div>
         
         <div className='cardImage'>
          <Link to={`/product/${items.id}`}>
            <img className='cardImg' src={items.image}></img>
          </Link>
             
         </div>
         <div className='cardBody'>
             <>
                <p className='cardTitle'>
                    <span className='brand'>Brand,</span>
                    {items.title}
                </p>
             </>
         </div>
         <div className='rating'>
            <div className='startIcon'>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
              </div>
              <div className='rate'>
                  <p>({items.rating.count})</p>
              </div>
          </div>
          <div className='price'>
              <p>${items.price}</p>
          </div>
          <div className='add-to-cart'>
             <button className='cart-button' onClick={handleCart}>
             <i class="fa-solid fa-cart-shopping"></i>
              <span className='cartbtn-text'>Add to cart!</span></button>
          </div>
       </div>
    </div>
  
  )
}

export default Card
