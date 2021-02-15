import styled /* { css } */ from "styled-components";

export const ContactPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
`;

export const ContactContainer = styled.div`
    margin: 10px 20px;
    padding: auto 10px;
`;

export const ContactName = styled.h3`
    text-align: center;
`;

export const ContactLink = styled.a`
    cursor: pointer;
`;

export const ContactImage = styled.img`
    margin: auto;
    display: block;
    height: 40px;
    &:hover {
        transform: scale(1.1);
        transition: 0.2s;
    }
`;

// export const ContactDetails = styled.span``;
