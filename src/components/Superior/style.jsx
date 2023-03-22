import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 50px 0; */
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    /* background-color: brown; */
`

export const Wrapper = styled.div`
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */
`

export const TextWrap = styled.div`
    max-width: 380px;

    @media screen and (max-width: 450px) {
        max-width: 320px;
    }

    p:first-child{
        font-size: 22px;
        font-weight: 500;
        text-align: center;
    }

    p:nth-child(2){
        font-size: 12px;
        text-align: center;
        margin-top: -10px;
    }
`

export const CardWrap = styled.div`
    /* display: grid;
    grid-template-columns: auto auto;
    column-gap: 100px;
    row-gap: 40px; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
    row-gap: 50px;
    column-gap: 50px;
    max-width: 1000px;

    @media screen and (max-width: 450px) {
        row-gap: 15px;
    }
`

// export const HoverWrap = styled.div`
//     position: relative;

//     .shadow{
//         position: absolute;
//     }
// `

export const IconWrap = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    background: #C9ECDC;
    border-radius:5px;
    transition: 0.5s;

    img{
        width: 15px;
        height: 15px;
    }
`

export const Card = styled.div`
    width: 40%;
    height: auto;
    min-height: 140px;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 0 12px;
    background: #FAFAFA;
    transition: 0.5s;

    @media screen and (max-width: 450px) {
        width: 70%;
    }

    &:hover{
        background: #C9ECDC ;
    }

    &:hover ${IconWrap}{
        background: #FAFAFA;
    }

    div{
        /* margin-top: -10px; */
        display: flex;
        align-items: center;
    }

    .title{
        font-size: 18px;
    }

    .desc{
        font-size: 12px;
        margin-top: -5px;
    }
`