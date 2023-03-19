import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 82px;
    background: #FFFBFB;

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
        height: 300px;

        .cardWrap{
            display: flex;
            align-items: center;
            /* background-color: yellow; */
            position: relative;
            height: 300px;
            z-index: 4;
        }

        .card{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* background: red; */
            flex: 1;

            &:hover > div{
                background-color: #FAFAFA;
                box-shadow: 15px 10px 10px rgba(0, 0, 0, 0.2);
            }

            img{
                width: 90px;
                height: 100px;
                border-radius: 10px;
                position: absolute;
                top: 0;
                z-index:2;
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