import React from "react";
import { Container, ContentWrap, Image, Wrapper } from "./style";
import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";
import sponsor4 from "../../assets/sponsor4.png";
import sponsor5 from "../../assets/sponsor5.png";
import sponsor6 from "../../assets/sponsor6.png";

const Partnership = ({ width }) => {
  const Partner = [
    {
      img: sponsor1,
    },
    {
      img: sponsor2,
    },
    {
      img: sponsor3,
    },
    {
      img: sponsor4,
    },
    {
      img: sponsor5,
    },
    {
      img: sponsor6,
      width: width < 450 ? "45px" : "60px",
      height: width < 450 ? "20px" : "30px",
    },
  ];
  return (
    <Container id="Partnership">
      <Wrapper>
        <div className="title">Trusted Partnership</div>
        <ContentWrap>
          {Partner?.map((data, idx) => (
            <div key={idx}>
              <Image
                src={data.img}
                alt=""
                width={data.width}
                height={data.height}
              />
            </div>
          ))}
        </ContentWrap>
      </Wrapper>
    </Container>
  );
};

export default Partnership;
