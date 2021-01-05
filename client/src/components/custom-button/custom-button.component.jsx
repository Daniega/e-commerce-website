import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

// import "./custom-button.styles.scss";

//implemented with styled components
const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);


//implemented without styled components
// const CustomButton = ({ children, isGoogleSignIn , inverted ,...otherProps}) => (
//     <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
//         {children}
//     </button>
// )

export default CustomButton;