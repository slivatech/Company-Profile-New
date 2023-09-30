import React from "react";
import { Container, ContentWrap, Wrapper } from "./style";
// import { Link, NavLink } from "react-router-dom";

import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'
import Logo from '../../assets/logoutama.png'

const contact = [
    {
        name:'linkedin',
        img: linkedin,
        url: 'https://www.linkedin.com/company/sliva-technology-indonesia/mycompany/?viewAsMember=true'
    },
    {
        name:'instagram',
        img: instagram,
        url: 'https://www.instagram.com/slivatech.id/'
    },
    {
        name:'whatsapp',
        img: whatsapp,
        url: 'https://api.whatsapp.com/send?phone=6281255072243'
    }
]

const product = [
    {
        name:'Sliva Academy',
        url: ''
    },
    {
        name:'SlivaDoc',
        url: ''
    },
    {
        name:'Sliva Jakers',
        url: ''
    },
    {
        name:'Sliva Traktor',
        url: ''
    },
    {
        name:'Sliva Shop',
        url: ''
    },
]

const jump = [
    {
        name:'Home',
        url: ''
    },
    {
        name:'Services',
        url: ''
    },
    {
        name:'Pricing',
        url: ''
    },
    {
        name:'About Us',
        url: ''
    },
    {
        name:'Contact',
        url: ''
    },
]

const collab = [
    {
        name:'Partnership',
        url: ''
    },
    {
        name:'Corporate',
        url: ''
    },
    {
        name:'Logistic',
        url: ''
    },
]

const legal = [
    {
        name:'Terms of Use',
        url: ''
    },
    {
        name:'Privacy Policy',
        url: ''
    },
]

const Footer = () => {
    return(
        <Container>
            <Wrapper>
                <ContentWrap>
                    <div className="sec1">
                        <div>
                            <img className="logoss" src={Logo} alt="" />
                            <div className="brand">
                                PT. Sliva Technology Indonesia
                            </div>
                            <div className="desc">The company is engaged in IT service & IT Consulting</div>
                            <div className="icon">
                                <div>Follow and Connect with Sliva</div>
                                <div className="iconWrap">
                                {contact.map((data, idx) => (
                                    <a href={data.url} target="_blank" rel="noreferrer" key={idx}>
                                        <img className="iconSoc" src={data.img} alt="" />
                                    </a>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div></div> */}
                    <div className="sec2">
                        <div className="header">
                            Product
                        </div>
                        <div>
                            {product?.map((data, idx) => (
                                <a href={data.url} target="_blank" rel="noreferrer">
                                    {data.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="sec3">
                        <div className="header">
                            Jump To
                        </div>
                        <div>
                            {jump?.map((data, idx) => (
                                <a href={`#Home`} key={idx}>
                                    {data.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="sec4">
                        <div className="header">
                            Collaboration
                        </div>
                        <div>
                            {collab?.map((data, idx) => (
                                <a href={data.url} target="_blank" rel="noreferrer">
                                    {data.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="sec5">
                        <div className="header">
                            Legal
                        </div>
                        <div>
                            {legal?.map((data, idx) => (
                                <a href={data.url} target="_blank" rel="noreferrer">
                                    {data.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </ContentWrap>
            </Wrapper>
        </Container>
    )
}


export default Footer


