import styled from "styled-components/macro"

// padding: 1rem;

const CardWrapper = styled.div`
// border-radius: 15px;
overflow: hidden;
height: 100%;
// border: 1px solid rgba(0,0,0,0.3);
// -webkit-box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);
// -moz-box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);
// box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);
`
const Header = styled.div`
position: relative;
`
const HeaderContent = styled.div`
// position: absolute;
width: 100%;
bottom: 0;
left: 0;
display: flex;
align-items: center;
`

const Image = styled.img`
display: block;
max-height: 250px;
width: 100%;
object-fit: cover;
`

const Caption = styled.h3`
padding: 0.5rem 1rem;
margin: 0;
`

const Content = styled.div`
padding: 0 1rem 0.5rem 1rem;
`

const Text = styled.p`
margin: 0;
display: none;

@media screen and (min-width: 600px) {
    display: block;
}
`

const Author = styled.div`
    padding: 0.1rem 0;
`
const Badge = styled.div`
    background-color: rgb(181, 0, 0);
    color: white;
    width: fit-content;
    padding: 0.1rem 0.5rem;
`
const Info = styled.div`
display: flex;
// align-items: end
// justify-content: end;
gap: 0.5rem;
`

type CardProps = {
    title?: string,
    image?: string,
    caption?: string,
    type?: string,
    author?: string,
    body?: string
}
const CardGradient = ({type, author, title, image, caption, body} : CardProps) => {
    return(
        <CardWrapper>
            <Header>
                <Image src={image}/>
                <HeaderContent>
                    <Caption>{title}</Caption>
                </HeaderContent>
            </Header>
        </CardWrapper>
    )
}

export default CardGradient