import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: ${({ color }) => color?  `1px solid ${color}` : ''};
    background-color: ${({ outline, color }) => !outline? color? color : '' : 'transparent'};
    border-radius: ${({ radius }) => radius? radius : '30px'};
    height: ${({ height }) => height? height : 'auto'};
    width: ${({ width }) => width? width : 'auto'};

    img{
        width: 15px;
        height: 15px;
        margin-left: 5px;
    }
`

const Button = ({text, color, outline, textColor, fontSize, radius, icon, ...rest}) => {
    return(
        <Container outline={outline} color={color} radius={radius} {...rest }>
            <p style={{color:textColor? textColor : '', fontSize:fontSize}}>{text}</p>
            {icon? (
                icon
            ) : ''}
        </Container>
    )
}



export default Button


