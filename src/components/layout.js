import React from 'react';

import './style.scss';

import AboutMe from './aboutMe';
import Ad from './ad';
import Competences from './competences';
import Experiences from './experiences';
import Footer from './footer';
import Helmet from './helmet';
import Header from './header';
import Services from './services/services';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<AboutMe />
		<Services />
		<Ad />
		<Experiences />
		<Competences />
		<Footer />
	</div>
);

export default Layout;
