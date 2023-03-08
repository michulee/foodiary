import styled from "styled-components"

const CardWrapper = styled.div`
border-radius: 15px;
padding: 1rem;
border: 1px solid rgba(0,0,0,0.8);
height: 100%;
// width: 100%;
`
const Header = styled.div`
`

const Image = styled.img`
`

const Caption = styled.div`
`

const Content = styled.div`
`

const Text = styled.p`
`
type CardProps = {
    title?: string,
    image?: string,
    caption?: string
}
const Card = ({title, image, caption} : CardProps) => {
    return(
        <CardWrapper>
            <Header>
                <Image src={image}/>
                <Caption>{title}</Caption>
            </Header>
            <Content>
                <Text>{caption}</Text>
            </Content>
        </CardWrapper>
    )
}

export default Card