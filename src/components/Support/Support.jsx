import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Container, EmailWrap, InformationWrap, LeftInfo, RightInfo, Wrapper, LeftEmail, RightEmail, Line, Form } from "./style";

const Support = () => {
    const [errorMsg, setErrorMsg] = useState()
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })

    const {firstName, lastName, email, phone, message} = form

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }

    const handleSubmit = () => {
        if(!firstName || !lastName || !email || !phone || !message){
            setErrorMsg('All field are required!')
        }
    }

    useEffect(() => {
        console.log({form})
    }, [form])

    return(
        <Container id="Support">
            <Wrapper>
                <InformationWrap>
                    <LeftInfo>
                        <div>
                            <p className="first">World class support is available 24/7</p>
                            <p className="second">Customers satisfations is our main goal. We give our best for our cutomers and always try to make our clients happy. We can give you any kind of support with any languages.</p>
                            <div className="btt">
                                <a href='https://api.whatsapp.com/send?phone=6281255072243' target="_blank" rel="noreferrer">
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
                                <input 
                                    type="text" 
                                    placeholder="First Name" 
                                    name="firstName"
                                    onChange={handleChange}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Last Name" 
                                    name='lastName'
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="email">
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    name="email"
                                    onChange={handleChange}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Phone"
                                    name="phone"
                                    onChange={handleChange} 
                                />
                            </div>

                            <div className="message">
                                <textarea 
                                    name="message" id="" 
                                    rows="3" cols='10'
                                    placeholder="Your Message"
                                    onChange={handleChange}
                                >
                                </textarea>
                            </div>
                            <div style={{marginTop:'20px'}}>
                                <Button 
                                    text='Website'
                                    color='#7572E9'
                                    textColor='#fff'
                                    width='100px'
                                    height='35px'
                                    fontSize='12px'
                                    radius={'10px'}
                                    onClick={handleSubmit}
                                />
                            </div>
                        </Form>
                    </RightEmail>
                </EmailWrap>
            </Wrapper>
        </Container>
    )
}


export default Support


