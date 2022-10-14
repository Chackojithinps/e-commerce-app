import React, { useContext } from 'react'
import Card from '../../Components/Card'
import Loader from '../../Components/Loader'
import { ProductContext } from '../../Context/ProductContext'
import './styles.css'
const Products = () => {
    const {productlist,loading} = useContext(ProductContext)
  return (
    <div className='main-card'>
       {
        !loading? (productlist.map((item)=>(
          
               <Card items={item} />

        ))):<Loader/>
      }
    </div>
  )
}

export default Products
