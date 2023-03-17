import Container from "@components/elements/Container"
import styled from "styled-components/macro"

const Image = styled.img`
max-width: 600px;
max-height: 600px;
margin: 0 auto;
display: block;
`
const Page404 = () => {
    return(
        <Container>
            <Image src="https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=727&q=80" alt="yellow triangle sign that says 'Imagine Art Here'"/>
        </Container>
    )
}

export default Page404