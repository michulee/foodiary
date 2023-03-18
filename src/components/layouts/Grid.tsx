import { ReactElement } from "react"
import styled from "styled-components/macro"

const GridWrapper = styled.div`
display: grid;
gap: 1rem;
grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));

@media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
`

type GridProps = {
    column?: number,
    row?: number,
    max?: number,
    list: ReactElement,
}
const Grid = ({column, row, max, list} : GridProps) => {

    return(
        <GridWrapper>
            {list}
        </GridWrapper>
    )
}

export default Grid