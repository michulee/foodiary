import Container from "@components/elements/Container"
import Input from "@components/elements/Input"
import { Form, Link } from "react-router-dom"
import styled from "styled-components/macro"

const Register = () => {

    return(
        <Container>
            <Form>
                <Input labelName="Username" type="text"/>
                <Input labelName="Password" type="password"/>
            </Form>
        </Container>
    )
}

export default Register