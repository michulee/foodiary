import { ReactElement } from "react"
import styled from "styled-components"



type GridProps = {
    column?: number,
    row?: number,
    max?: number,
    list: ReactElement,
}
const Grid = ({column, row, max, list} : GridProps) => {
    const GridWrapper = styled.div`
    display: grid;
    grid-template-rows: ${row};
    grid-template-columns: repeat(${column}, 1fr);
    `
    return(
        <GridWrapper>
            {list}
        </GridWrapper>
    )
}

export default Grid