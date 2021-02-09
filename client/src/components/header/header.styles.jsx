import styled /* { css } */ from 'styled-components';

import { Link } from 'react-router-dom';

// const OptionsContainerStyles = css`
//     padding: 10px 15px;
//     cursor: pointer;
// `;

export const HeaderContainer = styled.div`
   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;

   @media screen and (max-width: 800px) {
      height: 60px;
      padding: 10px;
      margin-bottom: 20px;
   }
`;

export const CurrentUserContainer = styled.div`padding: 10px 15px;`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
      display:none
   }
`;

export const OptionsContainer = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   @media screen and (max-width: 800px) {
      width: 100%;
      font-size: 14px;
   }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

// export const OptionLink = styled(Link)`
//     ${OptionsContainerStyles}
// `;

// export const OptionDiv = styled.div`
//     ${OptionsContainerStyles}
// `;
