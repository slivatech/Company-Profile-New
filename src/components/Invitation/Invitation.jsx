import React from "react";
import Button from "../Button";
import { Container, ContentWrapper, Wrapper } from "./style";

const Invitation = () => {
    return(
        <Container>
            <Wrapper>
                <ContentWrapper>
                    <div className="text">
                        Freakishly simple. Downright useful. Ready to make the jump?
                    </div>
                    <div className="inputEmail">
                        <input type="text" placeholder="Enter your work email" />
                    </div>
                    <div className="buttonWrap">
                        <Button 
                            text='Sign me up'
                            color='#7471e7'
                            textColor='#fff'
                            width='90px'
                            height='34px'
                            fontSize='12px'
                        />
                    </div>
                </ContentWrapper>
            </Wrapper>
        </Container>
    )
}


export default Invitation


