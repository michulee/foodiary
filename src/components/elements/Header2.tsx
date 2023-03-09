import styled from "styled-components/macro"

const Header = styled.h2`
font-size: 1.25rem;
`
type HeaderProps = {
    value: string
}
const Header2 = ({value} : HeaderProps) => {
    return(
        <Header>{value}</Header>
    )
}

export default Header2