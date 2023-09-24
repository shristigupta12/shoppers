import styled from "styled-components"
// import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px; 
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})};
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})};
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shoppers</Logo>
            <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, mollitia. Eius suscipit veritatis architecto voluptas est necessitatibus hic officiis nisi! Esse dolore, error autem dicta odit consectetur dignissimos quod laborum!
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <i class="fa-brands fa-facebook"></i>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <i class="fa-brands fa-instagram"></i>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <i class="fa-brands fa-twitter"></i>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contacts</Title>
            <ContactItem>
                {/* <MapPin style={{marginRight: "10px"}}/> */}
                <i class="fa-solid fa-location-dot"></i>
                622 Dixie Path, South tukoganj 98336
            </ContactItem>
            <ContactItem>
                {/* <Phone style={{marginRight: "10px"}} /> */}
                <i class="fa-solid fa-phone"></i>
                +1 432 56 78
            </ContactItem>
            <ContactItem>
                {/* <Mail style={{marginRight: "10px"}}/> */}
                <i class="fa-regular fa-envelope"></i>
                contact@shopify.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer;