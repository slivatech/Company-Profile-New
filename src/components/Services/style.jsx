import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 0 82px; */
    width: 100vw;
    min-height: max-content;
    display: flex;
    justify-content: center;
    background: #FFFBFB;
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
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;

    .textContainer{
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 380px;
            /* background: red; */

            .first{
                font-size: 22px;
                font-weight: 500;
            }
            .second{
                font-size: 12px;
                text-align: center;
                margin-top: -10px;
            }
        }

    }

    .serviceContainer{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
        margin-top: 30px;
        /* background-color: green; */
        /* position: relative; */
        /* height: 300px; */

        @media screen and (max-width: 490px) {
            justify-content: center;
        }

        .cardWrap{
            display: flex;
            align-items: center;
            justify-content: center;
            /* background-color: yellow; */
            position: relative;
            height: 300px;
            z-index: 4;

            @media screen and (max-width: 450px) {
                /* height: auto; */
                max-height: 240px;
                margin-top: 20px;
            }
        }

        .card{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* background: red; */
            flex: 1;

            @media screen and (max-width: 450px) {
                padding-top: 100px;
            }

            &:hover > div{
                background-color: #FAFAFA;
                box-shadow: 15px 10px 10px rgba(0, 0, 0, 0.2);
            }

            @media screen and (max-width: 450px) {
                &:hover > div{
                    background-color: #fff;
                    box-shadow: none;
                }
            }

            img{
                width: 90px;
                height: 100px;
                border-radius: 10px;
                position: absolute;
                top: 0;
                z-index:2;

                /* @media screen and (max-width: 450px) {
                    width: 110px;
                    height: 120px;
                } */
            }

            div{
                width: 200px;
                border-radius: 20px;
                padding: 10px 20px;
                z-index: 1;
                transition: 0.5s;
                
                /* &:hover{
                    background-color: #FAFAFA;
                    box-shadow: 15px 10px 10px rgba(0, 0, 0, 0.2);
                } */
                
                p{
                    text-align: center;
                }

                .title{
                    font-size: 13px;
                }

                .text{
                    font-size: 11.5px;
                    margin-top: -5px;
                }
            }
        }
    }
`