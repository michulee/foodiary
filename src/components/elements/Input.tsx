import styled from "styled-components/macro"

type InputProps = {
    labelName?: string,
    name?: string,
    type?: string,
    value?: string
}
const Input = ({labelName, name, type, value} : InputProps) => {
    const InputWrapper = styled.div`
    display: flex;
    max-width: 300px;
    flex-wrap: wrap;
    `
    const Label = styled.label`
    `
    const Input = styled.input`

    `
    return(
        <InputWrapper>
            <Label>{labelName}</Label>
            <Input name={name} type={type} value={value}/>
        </InputWrapper>
    )
}

export default Input