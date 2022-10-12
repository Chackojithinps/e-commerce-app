import React, { useContext } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/ProductContext'
const Navbar = () => {
    const {categories,setCategory}=useContext(ProductContext)
  return (
    <nav className='navbar-container'>
        <Link to='/' >
           <h1 onClick={()=>setCategory("")}>All</h1>
        </Link>
        {
            categories && categories.map((item)=>(
                <div >
                    <Link className='navbar-link' to={`/${item}`}>
                        <h1 onClick={()=>{setCategory(item)}}>{item}</h1>
                    </Link>
                </div>
               
            ))
        }
    </nav>
  )
}

export default Navbar
