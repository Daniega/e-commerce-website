import React from "react";

import { FooterContainer } from "./footer.styles";

const Footer = () => {

    const getCurrentYear = new Date().getFullYear();

    return (
    <FooterContainer>
        <span>All rights reserved "e-commerce-website" by Daniel Gaishuber {getCurrentYear}</span>
    </FooterContainer>
    );
}

export default Footer;