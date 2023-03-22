import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    /* padding: 0 82px; */
    width: 100vw;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, rgba(40, 177, 207, 0) 1.8%, #807ED6 93.55%);
    box-shadow: inset 0px 5px 4px rgba(0, 0, 0, 0.25);
`

export const Wrapper = styled.div`
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    padding-top: 40px;
    /* background-color: red; */
    @media screen and (max-width: 450px) {
        max-width: 320px;
    }
`

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    /* gap: 40px; */
    width: 100%;
    max-width: 1000px;

    /* @media screen and (max-width: 450px) {
        flex-direction: column;
    } */

    .sec1{
        /* height: 100%; */

        @media screen and (max-width: 450px) {
            width: 100%;
        }
        img{
            width: 50px;
            height: 50px;
        }

        .brand{
            font-weight: 500;
            font-size: 20px;
        }

        .desc{
            width: 55%;
            font-size: 14px;
            margin-top: 12px;
        }

        .icon{
            display: flex;
            flex-direction: column;
            margin-top: 8px;
            div{
                font-size: 12px;
                font-weight: 500;
                font-style: italic;
            }

            .iconWrap{
                display: flex;
                margin-top: 10px;
                gap: 10px;

                img{
                    width: 18px;
                    height: 18px;
                }
            }
        }
    }

    .sec2{
        margin-top: 40px;

        @media screen and (max-width: 450px) {
            margin-top: 20px;
        }

        .header{
            margin-bottom: 12px;
        }

        div{
            display: flex;
            flex-direction: column;
            a{
                text-decoration: none;
                color: black;
                font-size: 14px;
                margin-bottom: 4px;
            }
        }
    }

    .sec3{
        margin-top: 40px;

        @media screen and (max-width: 450px) {
            margin-top: 20px;
        }

        .header{
            margin-bottom: 12px;
        }

        div{
            display: flex;
            flex-direction: column;
            margin-bottom: 4px;
            a{
                text-decoration: none;
                color: black;
                font-size: 14px;
                margin-bottom: 4px;
            }
        }
    }

    .sec4{
        margin-top: 40px;

        @media screen and (max-width: 450px) {
            margin-top: 20px;
        }

        .header{
            margin-bottom: 12px;
        }

        div{
            display: flex;
            flex-direction: column;
            
            a{
                text-decoration: none;
                color: black;
                font-size: 14px;
                margin-bottom: 4px;
            }
        }
    }

    .sec5{
        margin-top: 40px;

        @media screen and (max-width: 450px) {
            margin-top: 20px;
        }

        .header{
            margin-bottom: 12px;
        }

        div{
            display: flex;
            flex-direction: column;
            a{
                text-decoration: none;
                color: black;
                font-size: 14px;
                margin-bottom: 4px;
            }
        }
    }
    
`

export const CopyrightWrap = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #c3e8ea;
    font-size: 12px;
    font-style: italic;
`

// export const IconWrap = styled(Link)`
//     display: flex;
//     width: 100%;
//     img{
//         width: 15px;
//         height: 15px;
//     }
// `