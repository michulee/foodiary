import Container from "@components/elements/Container"
import Input from "@components/elements/Input"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"

const Login = () => {

    return(
        <Container>
            <Link to={'/register'}>Register</Link>
            <Input label="Username" type="text"/>
            <Input label="Password" type="password"/>
        </Container>
    )
}

export default Login