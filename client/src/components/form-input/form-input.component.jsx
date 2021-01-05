import React from "react";

//without styled components
// import "./form-input.styles.scss";

//with styled components
import { GroupContainer, FormInputContainer, FormInputLabel } from "./form-input.styles";


const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<FormInputLabel className={`${otherProps.value.length ? "shrink" : "" } form-input-label`}>
                {label}
            </FormInputLabel>)
            : null
        }
    </GroupContainer>
)

export default FormInput;