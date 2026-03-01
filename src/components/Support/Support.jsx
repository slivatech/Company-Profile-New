import React, { useState } from "react";
import Button from "../Button";
import {
  Container,
  EmailWrap,
  InformationWrap,
  LeftInfo,
  RightInfo,
  Wrapper,
  LeftEmail,
  RightEmail,
  Form,
} from "./style";

const Support = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    // Validasi formulir di sini, memeriksa apakah semua field yang diperlukan terisi
    return (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.email !== "" &&
      formData.phone !== "" &&
      formData.message !== ""
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      // Hanya mengirim email jika formulir valid
      const emailBody = `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Message: ${formData.message}
      `;

      window.location.href = `mailto:slivatechnology1@gmail.com?subject=New Email&body=${encodeURIComponent(
        emailBody
      )}`;
    } else {
      alert("Harap lengkapi semua field yang diperlukan.");
    }
  };

  return (
    <Container id="Support">
      <Wrapper>
        <InformationWrap>
          <LeftInfo>
            <div>
              <p className="first">World class support is available 24/7</p>
              <p className="second">
                Customer satisfaction is our main goal. We give our best for
                our customers and always try to make our clients happy. We can
                provide support in various languages.
              </p>
              <div className="btt">
                <a
                  href="https://api.whatsapp.com/send?phone=6281977388341"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p style={{ marginTop: "10px" }}>Contact Support</p>
                </a>
              </div>
            </div>
          </LeftInfo>
          <RightInfo>
            <img src="./assets/support1.png" alt="" />
          </RightInfo>
        </InformationWrap>

        <EmailWrap>
          <LeftEmail>
            <img src="./assets/support2.png" alt="" />
          </LeftEmail>
          <RightEmail>
            <div>
              <p className="first">Connect With Our Support Team</p>
              <p className="second">
                Our support team is always active to assist you. They can answer any questions you have about our product.
              </p>
            </div>

            <Form onSubmit={handleSubmit}>
              <div className="name">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                  required 
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="email">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                  required 
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="message">
                <textarea
                  name="message"
                  rows="3"
                  cols="10"
                  placeholder="Your Message"
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Button
                  text="Send Email"
                  color="#7572E9"
                  textColor="#fff"
                  width="100px"
                  height="35px"
                  fontSize="12px"
                  radius={"10px"}
                  onClick={handleSubmit}
                  disabled={!isFormValid()} 
                />
              </div>
            </Form>
          </RightEmail>
        </EmailWrap>
      </Wrapper>
    </Container>
  );
};

export default Support;
