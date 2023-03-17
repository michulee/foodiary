import { ChangeEvent } from "react"
import styled from "styled-components/macro"

type InputProps = {
    label?: string,
    htmlFor?: string,
    name?: string,
    type?: string,
    value?: string,
    onChange?: React.ChangeEvent<HTMLInputElement>
}

const InputWrapper = styled.div`
display: flex;
max-width: 300px;
flex-wrap: wrap;
`
const Label = styled.label`
`
const NewInput = styled.input`
`
const Input = ({label, htmlFor, name, type, value, onChange} : InputProps) => {
    // const changeHandler = !onChange ? undefined : (event: React.ChangeEvent<HTMLInputElement>) => {
    //     onChange(event.target.value);
    // };
    return(
        <InputWrapper>
            <Label htmlFor={htmlFor}>{label}</Label>
            <NewInput name={name} type={type} value={value}/>
        </InputWrapper>
    )
}

export default Input