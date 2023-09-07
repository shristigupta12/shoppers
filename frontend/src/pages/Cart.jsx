import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from "../responsive"


const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})};
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center; 
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
    color: ${props=>props.type==="filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({display: "none"})};
`
const TopText = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    margin-right: 20px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 5px 0px;
`
const ProductSize = styled.span`
    
`
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})};
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})};
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
margin: 15px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.div`
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText >Your Whishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7adsA8KN3E2EwDoLop8_vCdgP_cCECVZ5bg&usqp=CAU"></Image>
                            <Details>
                                <ProductName> <b>Product:</b> ALLEN SOLLY PURSE</ProductName>
                                <ProductId> <b>ID:</b> 394857918323</ProductId>
                                <ProductColor color="black" />
                                <ProductSize> <b>Size:</b> M </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 10</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyln4ddsguCb2VYAr-ZillTjVcnm5EhlmtcM1Pm5gg-XYJAoUJmsBYG60cKLXcqRQLcg&usqp=CAU"></Image>
                            <Details>
                                <ProductName> <b>Product:</b> HAKURA T-SHIRT</ProductName>
                                <ProductId> <b>ID:</b> 394857918323</ProductId>
                                <ProductColor color="gray" />
                                <ProductSize> <b>Size:</b> 37.5 </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart