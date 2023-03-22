import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 0 82px; */
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #f6f4f9;
`

export const Wrapper = styled.div`
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 50px;
    /* background-color: red; */
    @media screen and (max-width: 450px) {
        max-width: 320px;
        padding-bottom: 20px;
        padding-top: 20px;
    }
`

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8e7df;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 100%;
    max-width: 1000px;
    padding: 20px;

    .quotes{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 10px;
        /* background-color: red; */

        img{
            max-width: 20px;
            max-height: 20px;
        }
    }

    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 820px;
    }

    .owners{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 10px;
    }
`