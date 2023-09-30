import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 0 82px; */
    width: 100vw;
    display: flex;
    justify-content: center;
    // background-color: #FFFEF0;
    `

export const Wrapper = styled.div`
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 50px;
    /* background-color: red; */
`

export const InformationWrap = styled.div`
    width: 100%;
    /* width: 1000px; */
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 450px) {
        flex-direction: column-reverse;
    }
`

export const LeftInfo = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    div{
        width: 300px;
        /* background-color: red; */
        display: flex;
        flex-direction: column;

        .btt{
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            background-color: #7572E9;
            max-width: 130px;
            font-size: 12px;
            height: 35px;
            border-radius: 30px;
            margin-top: 20px;

            @media screen and (max-width: 450px) {
                width: 100%;
                max-width: 100%;
                margin-top: 10px;
            }

            a{
                /* margin-top: 25px;
                width: 100px; */
                display: flex;
                color: #fff;
                flex-direction: column;
                align-items: center;
                text-decoration: none;
                /* background: green; */
                height: 100%;
            }
        }
    }

    .first{
        font-size: 28px;
        font-weight: 500;

        @media screen and (max-width: 450px) {
            text-align: center;
        }
    }

    .second{
        font-size: 14px;

        @media screen and (max-width: 450px) {
            text-align: center;
            margin-top: -10px;
        }
    }
    
`

export const RightInfo = styled.div`
    flex: 1;
    /* background-color: green; */
    display: flex;
    justify-content: center;
    margin: 20px 0;

    img{
        width: 300px;
        height: 300px;
    }
`

export const EmailWrap = styled.div`
    width: 100%;
    /* width: 1000px; */
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    /* height: 280px; */

    @media screen and (max-width: 450px) {
        flex-direction: column;
        margin-top: 60px;
    }
`

export const LeftEmail = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;

    img{
        width: 280px;
        height: 280px;
    }

    /* @media screen and (max-width: 450px) {
        display: none;
    } */
`

export const Line = styled.hr`
    border: 1px solid #FFFEF0;
    width: 100%;
`

export const RightEmail = styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    @media screen and (max-width: 450px) {
        align-items: center;
    }

    /* background-color: red; */
    
    div{
        width: 480px;
        display: flex;
        flex-direction: column;
        /* background-color: green; */
        @media screen and (max-width: 450px) {
            width: 350px;
        }

        .first{
            font-size: 28px;
            font-weight: 500;
        }

        .second{
            font-size: 14px;
            margin-top: -10px;
        }
        
    }
`

export const Form = styled.div`
    
    .name{
        display: flex;
        width: 100%;
        flex-direction: row;
        gap: 10px;

        input{
            height: 35px;
            background-color: transparent;
            border-radius: 5px;
            padding: 0 10px;
            width: 50%;
            // border-color:#A9A547;
            /* background: #7F7C35; */
            ::placeholder{
                color: #A9A547;
            }
        }
    }

    .email{
        display: flex;
        width: 100%;
        flex-direction: row;
        margin-top: 20px;
        gap: 10px;

        input{
            height: 35px;
            background-color: transparent;
            padding: 0 10px;
            width: 50%;
            // border-color:#A9A547;
            border-radius: 5px;
            ::placeholder{
                color: #A9A547;
            }
            /* background: #7F7C35; */
        }
    }

    .message{
        margin-top: 20px;
        max-width: 460px;

        @media screen and (max-width: 450px) {
            max-width: 328px;
        }
        textarea{
            width: 100%;
            background: transparent;
            padding: 10px;
            border-color: #transparent;
            border-radius: 5px;
            ::placeholder{
                color: #A9A547;
            }
        }
    }
`