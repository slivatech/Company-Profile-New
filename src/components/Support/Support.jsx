import React from "react";
import Button from "../Button";
import { Container, EmailWrap, InformationWrap, LeftInfo, RightInfo, Wrapper, LeftEmail, RightEmail, Line, Form } from "./style";

const Support = () => {
    return(
        <Container id="Support">
            <Wrapper>
                <InformationWrap>
                    <LeftInfo>
                        <div>
                            <p className="first">World class support is available 24/7</p>
                            <p className="second">Customers satisfations is our main goal. We give our best for our cutomers and always try to make our clients happy. We can give you any kind of support with any languages.</p>
                            <div className="btt">
                                <a href={{pathname:'mailto:vellamyclarence@gmail.com'}} target="_blank" rel="noreferrer">
                                    <p style={{marginTop:'5px'}}>Contact Support</p>
                                </a>
                            </div>
                        </div>
                    </LeftInfo>
                    <RightInfo>
                        <img src="./assets/support1.png" alt="" />
                    </RightInfo>
                </InformationWrap>

                {/* <Line /> */}

                <EmailWrap>
                    <LeftEmail>
                        <img src="./assets/support2.png" alt="" />
                    </LeftEmail>
                    <RightEmail>
                        <div>
                            <p className="first">Connect With Our Support Team.</p>
                            <p className="second">Our support team always active to support you. Any kind of questions about our product they can answer you</p>
                        </div>

                        <Form>
                            <div className="name">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>

                            <div className="email">
                                <input type="text" placeholder="Email Address" />
                                <input type="text" placeholder="Phone" />
                            </div>

                            <div className="message">
                                <textarea name="" id="" cols="25" rows="3" placeholder="Your Message"></textarea>
                            </div>
                            <div style={{marginTop:'20px'}}>
                                <a href="http://slivadoc.com" target="_blank" rel="noreferrer" style={{marginTop:'20[x'}}>
                                    <Button 
                                        text='Website'
                                        color='#7572E9'
                                        textColor='#fff'
                                        width='100px'
                                        height='35px'
                                        fontSize='12px'
                                        radius={'10px'}
                                    />
                                </a>
                            </div>
                        </Form>
                    </RightEmail>
                </EmailWrap>
            </Wrapper>
        </Container>
    )
}


export default Support


