import React from 'react';
import styled from 'styled-components';


// styledComponent iteration 처리확인
const gridColumnTitle = styled.th`
    ${props => props.sort && `
        text-decoration:underline;
    `}
`;

const GridHeader = ({ label }) => {
    return (
        <thead><tr>
             <gridColumnTitle>{ label }</gridColumnTitle>   
        </tr></thead>
    );
};

export default GridHeader;