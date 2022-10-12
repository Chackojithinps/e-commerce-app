import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext();

export const Cart=({children})=>{
    const [productlist,setProductlist]=useState([])
    const [loading,setLoading]=useState(false)
    const [product,setProduct]=useState({})
    const [productId,setProductId]=useState("")
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

    useEffect(()=>{
        setLoading(true)
        const getProduct=async()=>{
            await axios.get(`https://fakestoreapi.com/products/${productId}`).then((res)=>{
                setProduct(res.data)
                setLoading(false)
            })
        }
        getProduct()
    },[productId])
    const values={
        productlist,loading,product,setProductId
    }
    return(
        <ProductContext.Provider value={values} >{children}</ProductContext.Provider>
    )
}
