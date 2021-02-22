import React from 'react';

import {
	ContactPageContainer,
	ContactContainer,
	ContactLink,
	ContactImage,
	ContactName,
} from './contact.styles';

const contacts = {
	linkedin: {
		name: 'Linkedin',
		link: 'https://www.linkedin.com/in/daniel-gaishuber/',
		icon: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg',
	},
	github: {
		name: 'Github',
		link: 'https://github.com/Daniega',
		icon:
			'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==',
	},
};

const ContactPage = () => {
	return (
		<ContactPageContainer>
			<ContactContainer>
				<ContactName>{contacts.linkedin.name}</ContactName>
				<ContactLink href={contacts.linkedin.link}>
					<ContactImage src={contacts.linkedin.icon} alt={contacts.linkedin.name} />
				</ContactLink>
			</ContactContainer>
			<ContactContainer>
				<ContactName>{contacts.github.name}</ContactName>
				<ContactLink href={contacts.github.link}>
					<ContactImage src={contacts.github.icon} alt={contacts.github.name} />
				</ContactLink>
			</ContactContainer>
			<ContactContainer>
				<ContactName>Email:</ContactName>
				<ContactLink href='mailto:daniel.gaishuber@gmail.com'>
					<ContactName>daniel.gaishuber@gmail.com</ContactName>
				</ContactLink>
			</ContactContainer>
			<ContactContainer>
				<ContactName>Portfolio:</ContactName>
				<ContactLink href='https://www.daniega.com'>
					<ContactName>www.daniega.com</ContactName>
				</ContactLink>
			</ContactContainer>
		</ContactPageContainer>
	);
};

export default ContactPage;
