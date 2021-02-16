import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin: 30px auto;
    flex-wrap: wrap;
    align-content: center;

    @media screen and (max-width: 850px) {
        width: 90%;
    }
`;
