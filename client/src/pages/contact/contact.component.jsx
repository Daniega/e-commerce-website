import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ContactContainer, ContactName, ContactPart, ContactLink, ContactEmail } from './contact.styles';

const ContactPage = () => {
   return (
      <ContactContainer>
         <Grid container spacing={2} direction='column' justify='space-evenly'>
            <Grid item xs={12} sm={4} md={3}>
               <ContactPart>
                  <ContactName>Linkedin: </ContactName>
                  <ContactLink href='https://www.linkedin.com/in/daniel-gaishuber/'>
                     <img
                        src='https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg'
                        alt='Linkedin'
                        height='20px'
                        width='20px'
                     />
                  </ContactLink>
               </ContactPart>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
               <ContactPart>
                  <ContactName>Github: </ContactName>
                  <ContactLink href='https://github.com/Daniega'>
                     <img
                        src='https://png2.cleanpng.com/sh/907f6310b914f84d73ccc8849f5b17fc/L0KzQYm3VcI2N6V2epH0aYP2gLBuTfdqfJl6ep9ybnOwgrb3jCNqfJD3kZ98b4X1c7a0gB9lbV46eqIDN3K7R7O6UsM3QV88UaI8NEizRoK8UsczQGM6TqkCM0O7PsH1h5==/kisspng-github-inc-repository-source-code-5b087b87b32369.7903480615272825677338.png'
                        alt='Github'
                        height='20px'
                        width='20px'
                     />
                  </ContactLink>
               </ContactPart>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
               <ContactPart>
                  <ContactName>Email: </ContactName>
                  <ContactEmail href='mailto: daniel.gaishuber@gmail.com'>daniel.gaishuber@gmail.com</ContactEmail>
               </ContactPart>
            </Grid>
         </Grid>
      </ContactContainer>
   );
};

export default ContactPage;
