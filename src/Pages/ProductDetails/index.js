import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../Context/ProductContext';
import './styles.css'
const ProductDetails = () => {
    const {product_id} = useParams();
    const {loading,setProductId,product} =useContext(ProductContext)
    useEffect(()=>{
      setProductId(product_id)
    },[product_id])
  return (
    <div>
        {
          !loading&&product?.id?  //we can give either title or anything in product
          <div className='product-container'>
              <div className='left-sec'>
                 <div className='productImage'>
                    <img className='product-img' src={product.image}></img>
                  </div>
              </div>
              <div className='right-sec'>
                 <div className='product-brand'>
                     <h2>Brand</h2>
                 </div>
                 <div className='product-title'>
                     <h1>{product.title}</h1>
                 </div>
                 
                 <div className='product-rating'>
                       <div className='product-starIcon'>
                            <i className="fa-solid fa-star yellow-star"></i>
                            <i className="fa-solid fa-star yellow-star"></i>
                            <i className="fa-solid fa-star yellow-star"></i>
                            <i className="fa-solid fa-star yellow-star"></i>
                            <i className="fa-solid fa-star "></i>
                        </div>
                        <div className='product-count'>
                            <p>({product.rating.count})</p>
                          </div>
                  </div>
                 <div className='product-description'>
                     <p className='product-des'>{product.description}</p>
                  </div>
                  <div className='product-hrLine'>
                     <hr/>
                    </div>
                  <div className='product-footerSec'>
                      <div className='product-price'>
                          <p className='productprice'>${product.price}</p>
                      </div>
                      <div className='product-btn'>
                         <button className='product-button'>
                          <i class="fa-solid fa-cart-shopping"></i>
                          <span className='product-btntext'>Add to cart!</span>
                          </button>
                          
                      </div>
                      <div className='product-heartIcon'>
                      <i class="fa-sharp fa-solid fa-heart"></i>
                      </div>
                     
                  </div>
              </div>
          </div>
          :<h1>loading...</h1>
        }
    </div>
  )
}

export default ProductDetails
