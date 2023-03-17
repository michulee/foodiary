import { ReactElement } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"

const Wrapper = styled.div`
`

const Button = styled.button`
`

const Menu = styled.ul`
`

type Props = {
    buttonName?: string,
    linkPath?: string,
    linkName?: string
}
const Dropdown = ({buttonName, linkPath, linkName} : Props) => {


    return(
        <Wrapper>
            <Button>{buttonName}</Button>
            <Menu>
                {/* <Link to={linkPath}>{linkName}</Link> */}
            </Menu>
        </Wrapper>
    )
}

export default Dropdown