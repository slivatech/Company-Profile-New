import styled from 'styled-components';

export const Container = styled.div`
    padding-bottom: 100px;
    width: 100vw;
    display: flex;
    justify-content: center;
    /* background-color: #f6f4f9; */

    @media screen and (max-width: 450px) {
        padding-bottom: 40px;
    }
`

export const Wrapper = styled.div`
    width: 1400px;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    /* padding-bottom: 50px;
    padding-top: 50px; */
    /* background-color: red; */
    @media screen and (max-width: 450px) {
        max-width: 350px;
    }
`

// export const Container = styled.div`
//     padding: 0 82px;
//     margin-bottom: 100px;
    
//     /* position: relative; */
//     /* background: #F6F4F9; */
// `

export const CardWrap = styled.div`
    /* background-color: red; */
    position: relative;
    padding: 10px 0;
    margin-top: ${({first}) => first? '50px':'20px'};
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    /* background-color: red; */

    .first{
        font-size: 13px;
    }

    .second{
        width: 30%;
        font-size: 28px;
        text-align: center;
        margin-top: -35px;
        font-weight: 500;

        @media screen and (max-width: 450px) {
            width: 100%;
        }
    }

    .third{
        width: 40%;
        font-size: 14px;
        text-align: center;
        margin-top: -20px;
        @media screen and (max-width: 450px) {
            width: 95%;
        }
    }
`

export const ContentWrap = styled.div`
    display: flex;
    align-items: center;
    /* width: 942px;
    height: 200px; */
    background: ${({blue}) => blue? '#EEF2FB':'#E1F5EB'};
    border-radius: 20px;
    /* margin-top: 40px; */
    margin: 40px 130px;
    padding: 30px;
`

export const LeftContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: ${( {isRight} ) => isRight? '0 0 0 220px' : '0 190px 0 0'};

    div:first-child{
        font-size: 25px;
        margin-bottom: 10px;
        font-weight: 500;
    }

    div:nth-child(2){
        font-size: 14px;
    }

    a{
        margin-top: 25px;
        text-decoration: none;
    }

    div:nth-child(3){
        /* margin-top: 25px; */
        display: flex;
        gap: 10px;

        a{
            text-decoration: none;
        }
    }
`

export const RightContent = styled.div`
    flex: 1;

    div{
        position: absolute;
        top: 0;
        right: ${( {isRight} ) => isRight? '200px' : ''};

        .cphone2{
            position: absolute;
            left: 120px;
            bottom: 94px;
            width: 260px;
            height: auto;
        }

        .cphone3{
            position: absolute;
            right: 155px;
            bottom: 103px;
            width: 150px;
            height: 150px;
            filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.15));
        }
        
        img{
            width: 180px;
            height: 340px;
        }
    }
`

export const WrapperPhone = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-top: 50px; */

    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: ${({isFirst}) => isFirst? '1px' : '40px'}
    }
`

export const ImageWrapper = styled.div`
    img{
        width: 120px;
        height: 200px;
    }
`

export const MobileContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;

    .title{
        font-size: 20px;
    }

    .text{
        text-align: center;
        font-size: 11.5px;
    }

    .bttn{
        display: flex;
        width: 100%;
        gap: 10px;

        a{
            width: 100%;
            margin-top: 20px;
            text-decoration: none;
            /* background: red; */
        }
    }

    a{
        margin-top: 20px;
        width: 100%;
    }
`