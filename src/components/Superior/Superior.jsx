import React from "react";
import { Card, CardWrap, Container, IconWrap, TextWrap, Wrapper } from "./style";
import super1 from '../../assets/super1.png'
import super2 from '../../assets/super2.png'
import super3 from '../../assets/super3.png'
import super4 from '../../assets/super4.png'


const List = [
    {
        title: 'Focus',
        desc: 'We specialise in technologies. This has allowed us to become the best at what we do.',
        img: super1
    },
    {
        title: 'Intelligent Design',
        desc: 'We take great pride in the usability, functionality and attention to detail that shows through in our work. Our applications are extremely intuitive and a pleasure to use.',
        img: super2
    },
    {
        title: 'Flexibility and Functionality',
        desc: "We can design and build you a custom application, or improve the one you're already using.",
        img: super3
    },
    {
        title: 'Simple',
        desc: 'Positive user experience and coupled with the latest technology for reliable performance, higher interactivity and longer service life.',
        img: super4
    },
]

const Superior = () => {
    return(
        <Container id="Superiority">
            <Wrapper>
                <TextWrap>
                    <p>What make us different?</p>
                    <p>At Sliva, we strive to improve the world of IT systems, through excellent customer support, intuitive features and ambitious goals.</p>
                </TextWrap>
                <CardWrap>
                    {List.map((data, idx) => (
                        <Card key={idx}>
                            <div>
                                <IconWrap>
                                    <img src={data.img} alt="" />
                                </IconWrap>
                                <p className="title">{data.title}</p>
                            </div>
                            <div>
                                <p className="desc">{data.desc}</p>
                            </div>
                        </Card>
                    ))}
                </CardWrap>
            </Wrapper>
        </Container>
    )
}


export default Superior


