import React, { useEffect, useState } from "react";
import axios from "axios";
const Store = () =>{

    const [products,setProducts] =  useState([]);
    const [loading,setLoading] = useState(false);

    const getProducts = async()=>{ 
        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            const responseData = response.data;
            console.log(responseData);
        }
        catch(error){
            console.log("Getting Error",error);
        }
    }
    useEffect(()=>{
        getProducts();
    },[]);

    const getData = async()=>{
        try{
        const response = await axios.get('https://fakestoreapi.com/products');
        // const responseData = await response.json();
        const responseData = response.data;
        console.log(responseData);
        setProducts(responseData);
        setLoading(true);
        }
        catch(error){
            console.log("Getting Error",error);
        }
    }
    return(
        <>
        <div>Store</div>
        {!loading && <button onClick={getData}>Get Products</button>}
        <ul>
            {products.map(product=>(
                <div>
                    <li>{product.id}</li>
                    <li>{product.title}</li>
                    <li>{product.description}</li>
                    <img src = {product.image} width="100"></img>
                </div>
            ))}
        </ul>
        </>
    );
}

export default Store;