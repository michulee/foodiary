import { useState } from "react"
import styled from "styled-components/macro"
import Dropdown from "./Dropdown"

const Wrapper = styled.div`
// -webkit-box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);
// -moz-box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);
// box-shadow: 0px 8px 19px -13px rgba(0,0,0,0.75);

border-bottom: 1px solid rgba(0,0,0,0.3);

display: flex;
justify-content: end;
flex-wrap: wrap;
align-items: center;
gap: 1rem;

position: fixed;
top: 35px;
left: 0;
width: 100%;
// height: 100%;
z-index: 1;

background-color: #FFFFFF;
`

const Icon = styled.span`
cursor: pointer;

:hover, :focus {
    background-color: rgba(0,0,0,0.1)
}
`

const Fieldset = styled.fieldset`
border: none;
display: flex;
gap: 0.5rem;
align-items: center;
`

type Props = {

}
const FilterBar = () => {
    const [state, setState] = useState('default')

    const [sort, setSort] = useState('default')
    // TODO send the sort value as a parameter

    const handleSort = (event: any) => {
        setSort(event.target.value)
    }

    return(
        <Wrapper>
            {/* <Icon className="material-symbols-outlined">view_comfy</Icon> */}
            {/* <Dropdown/> */}
            <Fieldset>
                {/* <label htmlFor="sort">Sort</label> */}
                <select name="sort" title="Sort" id="sort" onChange={handleSort}>
                    {/* <option value="" selected disabled>Please choose a HTTP request</option> */}
                    <option value="default">Featured</option>
                    <option value="sort">A to Z</option>
                    <option value="reverseSort">Z to A</option>
                </select>
            </Fieldset>
        </Wrapper>
    )
}

export default FilterBar