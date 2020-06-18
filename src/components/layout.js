import React from 'react';

import './style.scss';

import AboutMe from './aboutMe';
import Footer from './footer';
import Helmet from './helmet';
import Header from './header';
import Services from './services';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<AboutMe />
		<Services />
		<Footer />
	</div>
);

export default Layout;
