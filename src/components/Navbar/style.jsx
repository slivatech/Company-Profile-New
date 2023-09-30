import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 65px;
    background: transparent;
    // background: linear-gradient(180deg, rgba(34, 79, 121, 0) 0%, rgba(11, 31, 206, 0.11) 97.77%);
    // filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.25));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 82px;
    z-index: 100;

    @media screen and (max-width: 450px) {
        padding: 0 17px 0 17px ;
    }
`

export const Nav = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
` 

export const ImageContainer = styled.div`
    .logo{
        width: 55px;
        height: 55px;
    }
`

export const ListContainer = styled.div`
    display: flex;
    gap: 30px;
    
    a{
        cursor: pointer;
        font-size: 16px;
        /* font-family: 'Roboto'; */
        font-style: normal;
        font-weight: 400;
        text-decoration: none;
        color: black;
    }
`

export const MobileWrap = styled.div`
    img{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    .close{
        width: 14px;
        height: 14px;
        cursor: pointer;
    }
`

export const Overlay = styled.div`
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f6f4f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    gap: 20px;

    a{
        cursor: pointer;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        text-decoration: none;
        color: black;
    }
`