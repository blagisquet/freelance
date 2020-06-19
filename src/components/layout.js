import React from 'react';

import './style.scss';

import AboutMe from './aboutMe';
import Ad from './ad';
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
		<Footer />
	</div>
);

export default Layout;
