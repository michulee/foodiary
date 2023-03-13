import Container from "@components/elements/Container"
import Input from "@components/elements/Input"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"

const Login = () => {

    return(
        <Container>
            <Link to={'/register'}>Register</Link>
            <Input labelName="Username" type="text"/>
            <Input labelName="Password" type="password"/>
        </Container>
    )
}

export default Login