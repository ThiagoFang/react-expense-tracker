import styled from 'styled-components';


export const TableLine = styled.tr`

`;

export const TableColumn = styled.td<{pointer?: boolean}>`
    padding: 10px 0;
    cursor: ${props => props.pointer ? 'pointer' : 'normal'};
`;

export const Category = styled.div<{color: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{color: string}>`
    color: ${props => props.color};
`;