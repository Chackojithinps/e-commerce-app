import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext=createContext();

export const Cart=({children})=>{
    const [productlist,setProductlist]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        const getProducts=async()=>{
            await axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res)
            setProductlist(res.data)
            setLoading(false)
        })
    }
      getProducts()
    },[])
    const values={
        productlist,loading
    }
    return(
        <ProductContext.Provider value={values} >{children}</ProductContext.Provider>
    )
}

// export const useProduct=()=>{
//     useContext(ProductContext)
// }
// export const useProduct=()=>{
//     useContext(ProductContext)
// }