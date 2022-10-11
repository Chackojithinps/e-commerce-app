import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'
import './styles.css'
const Products = () => {
    const {productlist,loading} = useContext(ProductContext)
  return (
    <div>
       {
        !loading? (productlist.map((item)=>(
            <div>
                <h1>{item.price}</h1>
                <h1>{item.title}</h1>
            </div>
        ))):<h1>loading...</h1>
      }
    </div>
  )
}

export default Products
