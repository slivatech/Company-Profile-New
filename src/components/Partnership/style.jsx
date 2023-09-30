import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 0 82px; */
    width: 100vw;
    display: flex;
    justify-content: center;
    /* background-color: #f6f4f9; */
`

export const Wrapper = styled.div`
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    /* background-color: red; */

    .title{
        font-size: 28px;
        font-weight: 500;
    }

    @media screen and (max-width: 450px) {
        padding-bottom: 20px;
    }
`

export const ContentWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    border-radius: 10px;
    width: 100%;
    max-width: 1000px;
    gap: 10px;
    
    div{
        width: 30%;
        min-width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
        cursor: pointer;
        
        &:hover{
            background: #BEFFF7 ;
            box-shadow: 15px 20px 50px rgba(0, 0, 0, 0.03);
            border-radius: 5px;
        }

        @media screen and (max-width: 450px) {
            min-width: 100px;
            height: 100px;
        }

        /* img{
            width: 50px;
            height: 50px;

            @media screen and (max-width: 450px) {
                width: ${({width}) => width ? width : '40px'};
                height: ${({height}) => height ? height : '40px'};
            }
        } */
    }
`

export const Image = styled.img`
    width: ${({width}) => width ? width : '50px'};
    height: ${({height}) => height ? height : '50px'};

    @media screen and (max-width: 450px) {
        width: ${({width}) => width ? width : '40px'};
        height: ${({height}) => height ? height : '40px'};
    }
`