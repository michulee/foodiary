import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import { v4 as uuidv4 } from "uuid";

// takes in number items allowed per page
// let's say it takes only 3 per page (GLOBAL settings in redux?)
type Props = {
    itemsPerPage?: number,
    items?: number,
    max?: number
}

const Wrapper = styled.div`
display: flex;
justify-content: center;

a {
    padding: 1rem;
    // text-decoration: none;
    color: #000000;
    
    :hover, :focus {
        background-color: rgba(0,0,0,0.1)
    }
}
`

const Number = styled.a`
padding: 1rem;
// text-decoration: none;
color: #000000;

:hover, :focus {
    background-color: rgba(0,0,0,0.1)
}
`

const Pagination = ({itemsPerPage, items, max=5}: Props) => {
    const [page, setPages] = useState(0)
    const Pages = () => {
        let totalPages = 0;
        if(items! > 0 && itemsPerPage! > 0) {
            if(items!/itemsPerPage! === 0) {
                totalPages = items! / itemsPerPage!;
            }
            else {
                totalPages = items! / itemsPerPage! + 1;
            }
        }

        // FIXME clicking on link continues to add /pages/:pageID
        const pages = []
        for(let i = 0; i < totalPages; i++) {
            // pages.push(<Number href="javascript:void">{i+1}</Number>)
            pages.push(<Link key={uuidv4()} to={`/recipe/pages/${i+1}`}>{i+1}</Link>)
        }
        const maxPages = pages.slice(0,max) //max pages showing

        return(
            <>{maxPages}{(pages.length > max) ? <Number key={uuidv4()} href="#">Next</Number> : null}</>
        )
    }
    return(
        <Wrapper>
            <Pages/>
        </Wrapper>
    )
}

export default Pagination