import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";
import { useState } from 'react';

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})};
`

const FilterText = styled.span`
  font-size: 20px;
  margin-right: 20px;
  font-weight: 600;
  ${mobile({marginRight: "0px"})};
`

const Select = styled.select` 
  padding: 10px;
  margin-right: 20px;
  padding: 5px;
  ${mobile({margin: "10px 0px"})};
`
const Option = styled.option``

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSorts] = useState("newest");

  const handleFilters = (e)=>{
    const value  = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>beige</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products</FilterText>
          <Select onChange={e=>setSorts(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price low-high</Option>
            <Option value="desc">Price high-low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList