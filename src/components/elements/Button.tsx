import styled from "styled-components/macro"

const ButtonElement = styled.button`
border-radius: 15px;
border: 1px solid rgba(0,0,0,0.8);
padding: 0.5rem 1rem;
cursor: pointer;
`

type ButtonProps = {
    value: string
}

// Not recommended in Typescript docs
// const Button: React.FC<ButtonProps> = ({value}) => {
    // return <></>
// }


const Button: React.FC<ButtonProps> = ({value} : ButtonProps) => {
    return(
        <ButtonElement>{value}</ButtonElement>
    )
}

export default Button