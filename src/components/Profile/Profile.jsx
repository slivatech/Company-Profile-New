import React from "react";
import BarHelper from "../BarHelper";
import Button from "../Button";
import { Container, LeftParents, Parents, RightParents, Title } from "./style";

const Profile = () => {
    return(
        <Container id="Home">
            <BarHelper />
            <Parents>
                <LeftParents>
                    <Title>Supercharge
                        <p>Your Business</p>
                    </Title>
                    <p className="text">Accelerate business performance using technologies.</p>
                    <Button 
                        text='Free Consultation' 
                        color='#7572E9'
                        textColor='#fff'
                        fontSize='12px'
                        width='120px'
                        height='32px'
                    />
                </LeftParents>
                <RightParents>
                    <div className="academy">
                        <a href="http://slivaacademy.com" target="_blank" rel="noopener noreferrer">
                            <img className="image" src="./assets/academy.png" alt="SlivaAcademy" />
                        </a>
                        <img className="line" src="./assets/lineA.png" alt="SlivaAcademy" />
                        <p className="text">Sliva Academy</p>
                    </div>
                    <div className="doc">
                        <a href="http://slivadoc.com" target="_blank" rel="noopener noreferrer">
                            <img className="image" src="./assets/doc.png" alt="SlivaDoc" />
                        </a>
                        <img className="line" src="./assets/lineD.png" alt="SlivaDoc" />
                        <p className="text">SlivaDoc</p>
                    </div>
                    <div className="traktor">
                        <a href="http://slivatraktor.com" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/traktor.png" alt="SlivaTraktor" />
                        </a>
                        <img className="line" src="./assets/lineT.png" alt="SlivaTraktor" />
                        <p className="text">Sliva Traktor</p>
                    </div>
                </RightParents>
            </Parents>
        </Container>
    )
}


export default Profile


