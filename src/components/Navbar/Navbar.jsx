import React, { useEffect, useState } from "react";
import {
  Header,
  ImageContainer,
  ListContainer,
  MobileWrap,
  Nav,
  Overlay,
} from "./style";

const list = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Service",
  },
  {
    id: 3,
    name: "Product",
  },
  {
    id: 4,
    name: "Superiority",
  },
  {
    id: 5,
    name: "Support",
  },
  {
    id: 6,
    name: "Partnership",
  },
];

const Navbar = ({ width }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [y, setY] = useState(0);

  const handleNavigation = (e) => {
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since it's going to run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <>
      {isOverlay && (
        <Overlay>
          {list.map((data) => (
            <a
              href={`#${data.name}`}
              key={data.id}
              onClick={() => {
                setIsOverlay(false);
              }}
            >
              {data.name}
            </a>
          ))}
        </Overlay>
      )}
      <Header style={y !== 0 ? { background: "#fff" } : {}}>
        <Nav>
          <ImageContainer>
            <img className="logo" src="./assets/logoutama.png" alt="Logo" />
          </ImageContainer>
          {width > 450 ? (
            <ListContainer>
              {list.map((data) => (
                <a href={`#${data.name}`} key={data.id}>
                  {data.name}
                </a>
              ))}
            </ListContainer>
          ) : (
            <MobileWrap>
              {!isOverlay ? (
                <img
                  src="./assets/hamburger.png "
                  alt=""
                  onClick={() => {
                    setIsOverlay(true);
                  }}
                />
              ) : (
                <img
                  src="./assets/close.png "
                  alt=""
                  className="close"
                  onClick={() => setIsOverlay(false)}
                />
              )}
            </MobileWrap>
          )}
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
