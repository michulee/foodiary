import { useState } from "react"
import styled from "styled-components/macro"
import Dropdown from "./Dropdown"

const Wrapper = styled.div`
padding: 1rem;
-webkit-box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);
box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);
`

type Props = {

}
const FilterBar = () => {
    const [state, setState] = useState('default')

    return(
        <Wrapper>
            <Dropdown/>
        </Wrapper>
    )
}

export default FilterBar