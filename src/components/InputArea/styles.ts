import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
`;

export const InputCampArea = styled.label`
    flex: 1;
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Input = styled.input<{error: boolean}>`
    padding: 8px 10px;
    width: 85%;
    border: ${props => props.error ? '1px solid red' : '1px solid #CCC'};
    border-radius: 5px;
    
    &:focus{
        outline: none;
        border: 1px solid #1AA7EC;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
     margin: 0;
}
`;

export const InputSelect = styled.select<{error: boolean}>`
    padding: 8px 10px;
    width: 90%;
    border: ${props => props.error ? '1px solid red' : '1px solid #CCC'};
    border-radius: 5px;
    transition: .3s;
    
    &:focus{
        outline: none;
        border: 1px solid #1AA7EC;
    }
`;

export const Button = styled.button`
    flex: 1;
    display: inline-block;
    border: none;
    padding: 10px 10px;
    background-color: #1AA7EC;
    color: #FFF;
    font-weight: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: .4s;

    &:hover{
        background-color: #5B9AF8;
    }
`