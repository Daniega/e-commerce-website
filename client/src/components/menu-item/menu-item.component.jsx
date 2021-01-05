import React from "react";
import { withRouter } from "react-router-dom";

//without styled components
// import "./menu-item.styles.scss";

//with styled components
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );

export default withRouter(MenuItem);


