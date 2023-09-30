import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 0 82px; */
    width: 100vw;
    min-height: max-content;
    display: flex;
    justify-content: center;
    // background: #FFFBFB;
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
            width: 360px;
            /* background: red; */

            .first{
                font-size: 28px;
                font-weight: 500;
            }
            .second{
                font-size: 14px;
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
        margin-top: 60px;
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
                max-height: 250px;
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
            cursor: pointer;

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
                width: 100px;
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
                width: 240px;
                border-radius: 20px;
                padding: 10px 10px;
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
                    font-size: 15px;
                    padding-top: 30px;
                    font-weight: 500;
                }

                .text{
                    font-size: 13px;
                    // margin-top: -5px;
                }
            }
        }
    }
`