import { ReactElement } from "react"
import styled from "styled-components/macro"
type Props = {
    label?: string,
    list: ReactElement,
}
const Dropdown = ({label, list} : Props) => {
    const Wrapper = styled.div`
    `
    return(
        <Wrapper>
            <button>{label}</button>
            <ul></ul>
        </Wrapper>
    )
}

export default Dropdown