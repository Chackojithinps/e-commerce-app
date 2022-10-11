import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext=createContext();

export const Cart=({children})=>{
    const [productlist,setProductlist]=useState([])
    useEffect(()=>{
        const getProducts=async()=>{
            await axios.get("https://fakestoreapi.com/products").then((res)=>{
            // console.log(res)
            setProductlist(res.data)
        })
    }
      getProducts()
    },[])
    const values={
        productlist
    }
    return(
        <ProductContext.Provider value={values} >{children}</ProductContext.Provider>
    )
}

export const useProduct=()=>{
    useContext(ProductContext)
}