import styled from "styled-components";


const Wrapper = styled.div`
border-radius: 15px;
background-color: rgba(0,0,0,0.3);
`

const Header = styled.div`
`

const Body = styled.div`
`

interface ICardData {
    title: string;
    caption?: string;
    person?: {
      firstName: string;
    }
}
const Card = ({title, person}: ICardData) => {
    return(
        <Wrapper>
            <Header>{title}</Header>
            <Body>Name: {person?.firstName}</Body>
        </Wrapper>
    )
}

export default Card;