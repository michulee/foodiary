import { useState } from "react"
import styled from "styled-components/macro"
import Dropdown from "./Dropdown"

const Wrapper = styled.div`
-webkit-box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);
box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);

display: flex;
justify-content: end;
flex-wrap: wrap;
align-items: center;
gap: 1rem;
`

const Icon = styled.span`
cursor: pointer;

:hover, :focus {
    background-color: rgba(0,0,0,0.1)
}
`

type Props = {

}
const FilterBar = () => {
    const [state, setState] = useState('default')

    return(
        <Wrapper>
            <Icon className="material-symbols-outlined">view_comfy</Icon>
            <Dropdown/>
        </Wrapper>
    )
}

export default FilterBar