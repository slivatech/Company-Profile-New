import React, { useState } from "react";
import Button from "../Button";
import { Container, ContentWrapper, Wrapper } from "./style";

const Invitation = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // Menambahkan state untuk validasi

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail)); // Memeriksa validitas email saat perubahan
  };

  const validateEmail = (email) => {
    // Validasi email perusahaan (contoh: example.com)
    const companyEmailRegex = /@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return companyEmailRegex.test(email);
  };

  const handleSignUpClick = () => {
    if (isValidEmail) {
      const emailDomain = email.split('@')[1].toLowerCase();

      if (emailDomain === 'gmail.com') {
        // Menampilkan alert jika email berbasis Gmail
        alert("Silahkan masukkan email perusahaan Anda.");
      } else {
        // Hanya mengarahkan jika email valid dan bukan berbasis Gmail
        window.location.href = `mailto:${email}`;
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <div className="text">
            Freakishly simple. Downright useful. Ready to make the jump?
          </div>
          <div className="inputEmail">
            <input
              type="text"
              placeholder="Enter your work email"
              value={email}
              onChange={handleEmailChange}
            />
            {!isValidEmail && (
              <div className="error">
                Please enter a valid company email address.
              </div>
            )}
          </div>
          <div className="buttonWrap">
            <Button
              text="Sign me up"
              color="#7471e7"
              textColor="#fff"
              width="90px"
              height="34px"
              fontSize="12px"
              onClick={handleSignUpClick}
            />
          </div>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default Invitation;
