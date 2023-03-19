import React from "react";
import { Container } from "./style";
import service1 from '../../assets/service1.png'
import service2 from '../../assets/ser2.png'
import service3 from '../../assets/service3.png'
import service4 from '../../assets/service4.png'

const list = [
    {
        id: 1,
        Title: 'Software Quality and Testing',
        Text: "The focus of Performance & Functional Testing is checking a software program's",
        img: service1,
        margin: '-18px'
    },
    {
        id: 2,
        Title: 'Business Application Development',
        Text: 'There can be various types of business applications built to solve specific needs. We can rapidly build and deploy web based business applications that solve of the most common pain points for business.',
        img: service2,
        margin: '30px'
    },
    {
        id: 3,
        Title: 'Mobile Application Development',
        Text: 'React Native Is the Future of Hybrid App Development',
        img: service3,
        margin:'-26px'
    },
    {
        id: 4,
        Title: 'StarUp Consultasion',
        Text: 'Sliva Business provides high quality startup consultancy services for your business to help you succeed on the market.',
        img: service4,
        margin: '3px'
    },
]

const Service = () => {
    return(
        <Container id="Service">
            <div className="textContainer">
                <div>
                    <p className="first">Services</p>
                    <p className="second">Positive user experience and coupled with the latest technology for reliable performance, higher interactivity and longer service life.</p>
                </div>
            </div>
            <div className="serviceContainer">
                {list.map((data) => (
                    <div key={data.id} className='cardWrap'>
                        <div className='card' style={{marginTop: data.margin? data.margin: ''}}>
                            {/* <div className="shadow">p</div> */}
                            <img src={data.img} alt="" />
                            <div>
                                <p className="title">{data.Title}</p>
                                <p className="text">{data.Text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}


export default Service


