import styled from "styled-components"
import {mobile} from "../responsive"
import { useState } from "react";	
import { login } from "../redux/apiCalls";	
import { useDispatch, useSelector } from "react-redux";	

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.4)
        ), 
        url("https://www.kresent.com/wp-content/uploads/2022/07/periwinkle-blue-vintage-dress-with-puff-sleeves.jpg") center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center -100px;
    display: flex;
    align-items: center;
    justify-content: center;
 
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({width: "75%"})};
`
const Title = styled.p`
    font-size: 24px;
    font-weigth: 100;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px ;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;

`
const Error = styled.span`	
  color: red;	
`;

const Login = () => {
    const [username, setUsername] = useState("");	
    const [password, setPassword] = useState("");	
    const dispatch = useDispatch();	
    const { isFetching, error } = useSelector((state) => state.user);	
    const handleClick = (e) => {	
    e.preventDefault();	
        login(dispatch, { username, password });	
    };
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input 
                placeholder="username" 
                onChange={(e) => setUsername(e.target.value)}
                />
                <Input placeholder="password" type="password"	
                onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                {error && <Error>Something went wrong</Error>}
                <Link>Forgot password?</Link>
                <Link>Create a new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login