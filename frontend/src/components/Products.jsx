import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import axios from "axios"
import { useState, useEffect } from "react"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get("http://localhost:5000/api/products")
        console.log(res)
      }catch(err){
        console.log("error while fetching api")
    }
    }
    getProducts()
  })



  return (
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products;