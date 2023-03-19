import React from "react";
import { Header, ImageContainer, ListContainer } from "./style";

const list = [
    {
        id: 1,
        name: 'Home'
    },
    {
        id: 2,
        name: 'Service'
    },
    {
        id: 3,
        name: 'Product'
    },
    {
        id: 4,
        name: 'Superiority'
    },
    {
        id: 5,
        name: 'Support'
    },
    {
        id: 6,
        name: 'Partnership'
    },
]

const Navbar = () => {
    return(
        <Header>
            <ImageContainer>
                <img className="logo" src='./assets/logo.svg' alt="Logo" />
            </ImageContainer>
            <ListContainer>
                {list.map((data) => (
                    <a href={`#${data.name}`} key={data.id}>{data.name}</a>
                ))}
            </ListContainer>
        </Header>
    )
}


export default Navbar


