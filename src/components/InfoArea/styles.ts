import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #FFF;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: -35px;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;