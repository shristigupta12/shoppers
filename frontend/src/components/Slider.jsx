import styled from 'styled-components';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useState } from 'react';
import { sliderItems } from '../data';
import {mobile} from "../responsive"
import {Link} from "react-router-dom"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})};
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left"&&"10px"};
    right: ${props=> props.direction === "right"&&"10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.75;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform : translateX(${props=>props.slideIndex* -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    max-width: 100%;
    height: auto;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction=="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2);
        }else{
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0);
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <KeyboardArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}>  
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>

                    <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>
                        {item.desc}
                    </Desc>
                    <Link to="/products">
                        <Button>Shop now</Button>
                    </Link>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <KeyboardArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider