import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ContactContainer, ContactName, ContactPart, ContactLink, ContactEmail } from './contact.styles';

const ContactPage = () => {
	return (
		<ContactContainer>
			<Grid container spacing={2} direction="column" justify="space-evenly">
				<Grid item xs={12} sm={4} md={3}>
					<ContactPart>
						<ContactName>Linkedin: </ContactName>
						<ContactLink href="https://www.linkedin.com/in/daniel-gaishuber/">
							<img
								src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
								alt="Linkedin"
								height="20px"
								width="20px"
							/>
						</ContactLink>
					</ContactPart>
				</Grid>
				<Grid item xs={12} sm={4} md={3}>
					<ContactPart>
						<ContactName>Github: </ContactName>
						<ContactLink href="https://github.com/Daniega">
							<img
								src="https://png2.cleanpng.com/sh/39d1b7e219f40c1a4fc1b973e32e2f6c/L0KzQYm3U8I3N5dofZH0aYP2gLBuTfdqfJl6ep9sb33zhcXskr1qa5Dzi591b3fyPbjwlPh2al46edQDYUO2SITpU8hnOl84SqkDNEm4SYK8UsIxPGo9TKo7NEK5PsH1h5==/kisspng-github-computer-icons-logo-github-5ab8a3383b38f2.3278495915220498482426.png"
								alt="Linkedin"
								height="20px"
								width="20px"
							/>
						</ContactLink>
					</ContactPart>
				</Grid>
				<Grid item xs={12} sm={4} md={3}>
					<ContactPart>
						<ContactName>Email: </ContactName>
						<ContactEmail href="mailto: daniel.gaishuber@gmail.com">
							daniel.gaishuber@gmail.com
						</ContactEmail>
					</ContactPart>
				</Grid>
			</Grid>
		</ContactContainer>
	);
};

export default ContactPage;
