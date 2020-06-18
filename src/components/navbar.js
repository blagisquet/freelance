import React, { useState } from 'react';
import {slide as Menu} from 'react-burger-menu';

import { colors } from '../theme/helpers';

import './style.scss';
import styled from 'styled-components';

const Navbar = ({ className }) => {
	return (
		<section className={className} id="accueil">
      <Menu right>
        <a className="menu-item" href="#home">Accueil</a>
        <a className="menu-item" href="#about">Qui suis-je ?</a>
        <a className="menu-item" href="#services">Mes services</a>
				<a className="menu-item" href="#competences">Mes compétences</a>
				<a className="menu-item" href="#certifications">Mes certifications</a>
				<a className="menu-item" href="#contact">Contact</a>
      </Menu>
		</section>
	);
}
export default styled(Navbar)`
	section {
		position: fixed;
	}
	.menu-item {
		font-size: 26px;
		color: ${colors.white};
		margin-bottom: 1rem;
		&:hover {
			color: ${colors.primary};
		}
	}
	a:focus {
		outline: none;
	}
`;
