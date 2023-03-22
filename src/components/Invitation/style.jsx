import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 0 82px; */
    width: 100vw;
    display: flex;
    justify-content: center;
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
        padding-top: 20px
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    background: linear-gradient(180deg, #7893F4 0%, rgba(50, 58, 86, 0) 100%);
    filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
    padding: 20px;

    @media screen and (max-width: 450px) {
        flex-direction: column;
    }

    .text{
        color: white;
        max-width: 300px;
    }

    .inputEmail{
        input{
            height: 30px;
            width: 200px;
            border-radius: 30px;
            padding: 4px 10px;
            border: none;
            outline: none;

            ::placeholder {
                color: black;
                font-size: 12px;
            }

            @media screen and (max-width: 450px) {
                width: 90%;
            }

        }
        @media screen and (max-width: 450px) {
            width: 100%;
            margin-top: 10px;
        }
    }

    .buttonWrap{
        @media screen and (max-width: 450px) {
            margin-top: 15px;
        }
    }
`