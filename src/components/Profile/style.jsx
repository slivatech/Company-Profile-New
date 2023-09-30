import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 0 82px; */
    width: 100vw;
    padding: 110px 1px 50px 1px;
    min-height: max-content;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 450px) {
        padding: 45px 1px 20px 1px;
    }
`

export const Wrapper = styled.div`
    width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 50px;
    margin-top: 60px;
    /* background-color: red; */
    @media screen and (max-width: 450px) {
        /* max-width: 340px; */
        margin-top: 0px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
`

export const Parents = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    /* min-width: 1100px; */

    @media screen and (max-width: 450px) {
        flex-direction: column;
    }

    div{
        flex: 1;
    }
`

export const Title = styled.h1`
    font-size: 45px;
    p{
        margin-top: -3px;
    }
    @media screen and (max-width: 450px) {
        font-size: 35px;
        margin-top: 50px;
    }
`

export const LeftParents = styled.div`
    .text{
        font-weight: 400;
        margin-top: -13px;
        margin-bottom: 30px;
        font-size: 18px;

        @media screen and (max-width: 450px) {
            margin-top: -12px;
            margin-bottom: 24px;
        }
    }
`

export const RightParents = styled.div`
    position: relative;

    @media screen and (max-width: 800px) {
        display: none;
    }

    .academy{
        position: absolute;
        cursor: pointer;
        z-index: 1;
        right: 315px;
        top: -20px;
        .image{
            width: 150px;
            height: 185px;
            transition: all .5s;
            &:hover{
                transform: scale(1.1);
            }
        }
        .line{
            position: absolute;
            bottom: 165px;
            right: 130px;
            height: 40px;
        }
        .text{
            position: absolute;
            font-style: italic;
            font-weight: 600;
            font-size: 14px;
            /* background-color:red; */
            width: 110px;
            right: 90px;
            bottom: 192px;
        }
        &:hover{
            z-index: 4;
        }
    }

    .doc{
        position: absolute;
        cursor: pointer;
        right: 1px;
        top: 38px;
        z-index: 2;
        .image{
            width: 370px;
            height: 205px;
            transition: all .5s;
            &:hover{
                transform: scale(1.1);
            }
        }
        .line{
            position: absolute;
            bottom: -25px;
            right: 95px;
            width: 45px;
            height: 40px;
        }
        .text{
            position: absolute;
            font-style: italic;
            font-weight: 600;
            font-size: 14px;
            right: 33px;
        }
        &:hover{
            z-index: 4;
        }
    }

    .traktor{
        position: absolute;
        cursor: pointer;
        right: 243px;
        top: 192px;
        z-index: 3;
        img{
            width: 125px;
            height: 175px;
            transition: all .5s;
            &:hover{
                transform: scale(1.1);
            }
        }
        .line{
            position: absolute;
            bottom: 44px;
            right: -44px;
            width: 50px;
            height: 15px;
        }
        .text{
            position: absolute;
            font-style: italic;
            font-weight: 600;
            font-size: 14px;
            bottom: 13px;
            right: -94px;
            /* left: 90px; */
        }
        &:hover{
            z-index: 4;
        }
    }
`