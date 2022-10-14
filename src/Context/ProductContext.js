import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext();

export const Cart=({children})=>{
    const [productlist,setProductlist]=useState([])
    const [loading,setLoading]=useState(false)
    const [product,setProduct]=useState({})
    const [productId,setProductId]=useState("")
    const [categories,setCategories]=useState([])
    const [category,setCategory]=useState("")
    const [count,setCount]=useState(0)
   
    useEffect(()=>{
        setLoading(true)
        const getCategories=async()=>{
            await axios.get(`https://fakestoreapi.com/products/categories`).then((res)=>{
                setCategories(res.data)
                setLoading(false)
            })
        }
        getCategories()
    },[]) 

    useEffect(()=>{
        setLoading(true)
        const getProducts=async()=>{
            if(category && category.length>0){
               await axios.get(`https://fakestoreapi.com/products/category/${category}`).then((res)=>{
                  setProductlist(res.data)
                  setLoading(false)
               })
              
            }else{
                await axios.get("https://fakestoreapi.com/products").then((res)=>{
                    console.log(res)
                    setProductlist(res.data)
                    setLoading(false)
                })
            }
            
    }
      getProducts()
    },[category])

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
        productlist,loading,product,setProductId,categories,setCategory,count,setCount
    }
    return(
        <ProductContext.Provider value={values} >{children}</ProductContext.Provider>
    )
}
