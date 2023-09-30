import React from "react";
import { Container, ContentWrap, Wrapper } from "./style";

const Quotes = () => {
    return(
        <Container>
            <Wrapper>
                <ContentWrap>
                    <div className="quotes">
                        <img src="./assets/quotes.png" alt="quotes" />
                    </div>
                    <div className="text">“I founded the name sliva to be able to meet the needs of global business owners in developing their business by providing technical and non-technical solutions in a professional manner. Sliva products cover various areas of scope that are currently the core needs of all global internet users.”</div>
                    <div className="owners">
                        <div className="owname">Evans Moris Cheahn</div>
                        <div className="owdesc">Founder & CEO - PT. Sliva Technology Indonesia</div>
                    </div>
                </ContentWrap>
            </Wrapper>
        </Container>
    )
}


export default Quotes


