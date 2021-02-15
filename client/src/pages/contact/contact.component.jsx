import React from "react";

import {
    ContactPageContainer,
    ContactContainer,
    ContactLink,
    ContactImage,
    ContactName,
} from "./contact.styles";

const contacts = {
    linkedin: {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/daniel-gaishuber/",
        icon: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    },
    github: {
        name: "Github",
        link: "https://github.com/Daniega",
        icon:
            "https://png2.cleanpng.com/sh/907f6310b914f84d73ccc8849f5b17fc/L0KzQYm3VcI2N6V2epH0aYP2gLBuTfdqfJl6ep9ybnOwgrb3jCNqfJD3kZ98b4X1c7a0gB9lbV46eqIDN3K7R7O6UsM3QV88UaI8NEizRoK8UsczQGM6TqkCM0O7PsH1h5==/kisspng-github-inc-repository-source-code-5b087b87b32369.7903480615272825677338.png",
    },
};

const ContactPage = () => {
    return (
        <ContactPageContainer>
            <ContactContainer>
                <ContactName>{contacts.linkedin.name}</ContactName>
                <ContactLink href={contacts.linkedin.link}>
                    <ContactImage
                        src={contacts.linkedin.icon}
                        alt={contacts.linkedin.name}
                    />
                </ContactLink>
            </ContactContainer>
            <ContactContainer>
                <ContactName>{contacts.github.name}</ContactName>
                <ContactLink href={contacts.github.link}>
                    <ContactImage
                        src={contacts.github.icon}
                        alt={contacts.github.name}
                    />
                </ContactLink>
            </ContactContainer>
            <ContactContainer>
                <ContactName>Email:</ContactName>
                <ContactLink href="mailto:daniel.gaishuber@gmail.com">
                    <ContactName>daniel.gaishuber@gmail.com</ContactName>
                </ContactLink>
            </ContactContainer>
        </ContactPageContainer>
    );
};

export default ContactPage;
