import styled from "styled-components"

const CardWrapper = styled.div`
border-radius: 15px;
padding: 1rem;
border: 1px solid rgba(0,0,0,0.8);
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
    image?: string,
    caption?: string,
    text?: string
}
const Card = ({image, caption, text} : CardProps) => {
    return(
        <CardWrapper>
            <Header>
                <Image src={image}/>
                <Caption>{caption}</Caption>
            </Header>
            <Content>
                <Text>{text}</Text>
            </Content>
        </CardWrapper>
    )
}

export default Card