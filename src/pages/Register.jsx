import axios from "axios";
import {useState} from "react"
import { useNavigate } from "react-router";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  const [name, setName] = useState("");
  const [phoneno, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      name: name,
      phoneno: phoneno,
      password: password
    }

    if(name !== "" || phoneno !== "" || password !== ""){
      axios.post("http://localhost:3001/ecom/signup", payload)
      .then((res) => {
           if(res.data.statusCode === 200){
             window.alert("Login Successfull");
             navigate('/home')
           }
      })
      .catch((error) => {
        console.log(error)
      })
     
    }
       
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input required value = {name} onChange = {(e) => {setName(e.target.value)}} placeholder="name" />
          <Input required value = {phoneno} onChange = {(e) => {setPhone(e.target.value)}}  placeholder="phoneo" />
          <Input required type="password" value = {password} onChange = {(e) => {setPassword(e.target.value)}} placeholder="password" />
          <button >CREATE</button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
