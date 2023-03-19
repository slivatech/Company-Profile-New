import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 0 82px; */
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #FFFEF0;
`

export const Wrapper = styled.div`
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    /* background-color: red; */
`

export const InformationWrap = styled.div`
    width: 100%;
    /* width: 1000px; */
    display: flex;
`

export const LeftInfo = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    div{
        width: 300px;
        display: flex;
        flex-direction: column;

        .btt{
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #7572E9;
            max-width: 110px;
            font-size: 12px;
            height: 30px;
            border-radius: 30px;
            margin-top: 20px;
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
        font-size: 22px;
        font-weight: 500;
    }

    .second{
        font-size: 12px;
    }
    
`

export const RightInfo = styled.div`
    flex: 1;
    /* background-color: green; */
    display: flex;
    justify-content: center;

    img{
        width: 280px;
        height: 280px;
    }
`

export const EmailWrap = styled.div`
    width: 100%;
    /* width: 1000px; */
    display: flex;
    margin-top: 40px;
`

export const LeftEmail = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    img{
        width: 280px;
        height: 280px;
    }
`

export const Line = styled.hr`
    border: 1px solid #FFFEF0;
    width: 100%;
`

export const RightEmail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    div{
        width: 480px;
        display: flex;
        flex-direction: column;

        .first{
            font-size: 22px;
            font-weight: 500;
        }

        .second{
            font-size: 12px;
            margin-top: -10px;
        }
    }
`

export const Form = styled.div`
    
    .name{
        display: flex;
        flex-direction: row;
        gap: 10px;

        input{
            height: 35px;
            background-color: transparent;
            padding: 0 10px;
            width: 205px;
            border-color:#A9A547;
            /* background: #7F7C35; */
            ::placeholder{
                color: #A9A547;
            }
        }
    }

    .email{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        gap: 10px;

        input{
            height: 35px;
            background-color: transparent;
            padding: 0 10px;
            width: 205px;
            border-color:#A9A547;
            ::placeholder{
                color: #A9A547;
            }
            /* background: #7F7C35; */
        }
    }

    .message{
        margin-top: 20px;
        textarea{
            background: transparent;
            padding: 10px;
            border-color:#A9A547;
            ::placeholder{
                color: #A9A547;
            }
        }
    }
`