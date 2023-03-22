import React from "react";
import {
  Container,
  TitleContainer,
  ContentWrap,
  LeftContent,
  RightContent,
  CardWrap,
  Wrapper,
  WrapperPhone,
  ImageWrapper,
  MobileContentWrap,
} from "./style";
import Button from "../Button";
import phone1 from "../../assets/phone1.png";
import phone2 from "../../assets/phone2.png";
import cphone2 from "../../assets/cphone2.png";
import phone3 from "../../assets/phone3.png";
import cphone3 from "../../assets/cphone3.png";

const Product = ({ width }) => {
  return (
    <Container id="Product">
      <Wrapper>
        <TitleContainer>
          <p className="first">OUR PRODUCT</p>
          <div className="second">
            <p>Built for the next generation of small business</p>
          </div>
          <div className="third">
            <p>
              Sliva is a service provider platform engaged in the technology
              sector with the concept of many products that have dependencies to
              be connected to each other.
            </p>
          </div>
        </TitleContainer>
        {width > 450 ? (
          <>
            <CardWrap isFirst={true}>
              <ContentWrap>
                <LeftContent>
                  <div>SlivaDoc</div>
                  <div>
                    Consult the best doctors and get good veterinary care. Make
                    a schedule for routine veterinary examinations with the best
                    choice of doctors, and all specialist doctors will be on the
                    slivadoc platform ready to help with all complaints about
                    your beloved pet.
                  </div>
                  <a
                    href="http://slivadoc.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      text="Website"
                      color="#7572E9"
                      textColor="#fff"
                      width="80px"
                      height="30px"
                      fontSize="12px"
                    />
                  </a>
                </LeftContent>

                <RightContent isRight={true}>
                  <div>
                    <img src={phone1} alt="SlivaDoc" />
                  </div>
                </RightContent>
              </ContentWrap>
            </CardWrap>

            <CardWrap>
              <ContentWrap blue={true}>
                <RightContent>
                  <div>
                    <img src={phone2} alt="SlivaDoc" />
                    <img src={cphone2} alt="" className="cphone2" />
                  </div>
                </RightContent>
                <LeftContent isRight={true}>
                  <div>Slivashop</div>
                  <div>
                    The Slivashop platform is the most complete animal
                    marketplace with many reliable features that can meet the
                    transaction needs of animal owners
                  </div>
                  <div>
                    <a href="#SlivaShop" rel="noreferrer">
                      <Button
                        text="Website"
                        color="#7572E9"
                        textColor="#fff"
                        width="80px"
                        height="30px"
                        fontSize="12px"
                      />
                    </a>
                    <a href="#SlivaShop/join" rel="noreferrer">
                      <Button
                        text="Join Reseller"
                        color="#000"
                        textColor="#000"
                        outline={true}
                        width="120px"
                        height="30px"
                        fontSize="12px"
                        icon={
                          <div>
                            <img src="./assets/addUser.png" alt="" />
                          </div>
                        }
                      />
                    </a>
                  </div>
                </LeftContent>
              </ContentWrap>
            </CardWrap>

            <CardWrap>
              <ContentWrap>
                <LeftContent>
                  <div>Dashboard</div>
                  <div>
                    Sliva provides a very complete dashboard feature for
                    business owner partners in developing their business
                  </div>
                  <a
                    href="http://slivadoc.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      text="Website"
                      color="#7572E9"
                      textColor="#fff"
                      width="100px"
                      height="30px"
                      fontSize="12px"
                    />
                  </a>
                </LeftContent>

                <RightContent isRight={true}>
                  <div>
                    <img src={phone3} alt="Dashboard" />
                    <img src={cphone3} alt="" className="cphone3" />
                  </div>
                </RightContent>
              </ContentWrap>
            </CardWrap>
          </>
        ) : (
          <WrapperPhone>
            <div className="wrapper" isFirst={true}>
              <ImageWrapper>
                <img src={phone1} alt="" />
              </ImageWrapper>
              <MobileContentWrap>
                <div className="title">SlivaDoc</div>
                <div className="text">
                  Consult the best doctors and get good veterinary care. Make a
                  schedule for routine veterinary examinations with the best
                  choice of doctors, and all specialist doctors will be on the
                  slivadoc platform ready to help with all complaints about your
                  beloved pet.
                </div>
                <a href="http://slivadoc.com" target="_blank" rel="noreferrer">
                  <Button
                    text="Website"
                    color="#7572E9"
                    textColor="#fff"
                    width="100%"
                    height="30px"
                    fontSize="12px"
                  />
                </a>
              </MobileContentWrap>
            </div>

            <div className="wrapper">
              <ImageWrapper>
                <img src={phone2} alt="" />
              </ImageWrapper>
              <MobileContentWrap>
                <div className="title">Slivashop</div>
                <div className="text">
                  The Slivashop platform is the most complete animal marketplace
                  with many reliable features that can meet the transaction
                  needs of animal owners
                </div>
                <div className="bttn">
                  <a href="#SlivaShop" rel="noreferrer">
                    <Button
                      text="Website"
                      color="#7572E9"
                      textColor="#fff"
                      width="100%"
                      height="30px"
                      fontSize="12px"
                    />
                  </a>
                  <a href="#SlivaShop/join" rel="noreferrer">
                    <Button
                      text="Join Reseller"
                      color="#000"
                      textColor="#000"
                      outline={true}
                      width="100%"
                      height="30px"
                      fontSize="12px"
                      icon={
                        <div>
                          <img src="./assets/addUser.png" alt="" />
                        </div>
                      }
                    />
                  </a>
                </div>
              </MobileContentWrap>
            </div>

            <div className="wrapper">
              <ImageWrapper>
                <img src={phone3} alt="" />
              </ImageWrapper>
              <MobileContentWrap>
                <div className="title">SlivaDoc</div>
                <div className="text">
                  Consult the best doctors and get good veterinary care. Make a
                  schedule for routine veterinary examinations with the best
                  choice of doctors, and all specialist doctors will be on the
                  slivadoc platform ready to help with all complaints about your
                  beloved pet.
                </div>
                <a href="http://slivadoc.com" target="_blank" rel="noreferrer">
                  <Button
                    text="Website"
                    color="#7572E9"
                    textColor="#fff"
                    width="100%"
                    height="30px"
                    fontSize="12px"
                  />
                </a>
              </MobileContentWrap>
            </div>
          </WrapperPhone>
        )}
      </Wrapper>
    </Container>
  );
};

export default Product;
