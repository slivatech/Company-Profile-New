import styled from 'styled-components';

export const Header = styled.header`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 60px;
    /* background: #F6F4F9; */
    background: linear-gradient(180deg, rgba(34, 79, 121, 0) 0%, rgba(11, 31, 206, 0.11) 97.77%);
    filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 82px;
`

export const ImageContainer = styled.div`
    .logo{
        width: 70px;
        height: 70px;
    }
`

export const ListContainer = styled.div`
    display: flex;
    gap: 30px;
    
    a{
        cursor: pointer;
        font-size: 14px;
        /* font-family: 'Roboto'; */
        font-style: normal;
        font-weight: 400;
        text-decoration: none;
        color: black;
    }
`