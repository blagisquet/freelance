import React from 'react';
import photo from '../images/profilepic.jpg';

import { colors } from '../theme/helpers';

import './style.scss';

import styled from 'styled-components';

const AboutMe = ({ className }) => {
  return (
    <section className={className}>
      <div className="has-background-grey-darker is-vcentered columns">
        <div className="column is-one-third is-hidden-touch">
          <figure className="image is-pulled-right is-128x128">
            <img className="is-rounded" src={photo} alt="photo de baptiste lagisquet" />
          </figure>
        </div>
        <div className="column about">
          <h3 className="title is-size-3 has-text-white has-text-centered-touch">Qui suis-je ?</h3>
          <p className="has-text-white">Passionné de développement et en particulier de Front-end, 
            je m'intéresse aussi énormément à l'UX/UI Design. 
            J'ai lancé ma micro-entreprise en 2020 et suis donc disponible pour vos projets.
            Je me forme continuellement en JavaScript, React, Gatbsy et j'ai pu travailler en Angular8 lors de mon stage de fin d'études dans la <a href="https://syndis.fr" target="_blank" re="noreferrer noopener">société Syndis.</a></p>
          {/* <h3 className="title is-size-4 has-text-white has-text-centered-mobile">Contact</h3>
          <p className="has-text-white">Baptiste Lagisquet</p>
          <p className="has-text-white">Téléphone:<a href="tel:+33658400008"> 06 58 40 00 08</a></p>
  <p className="has-text-white">Mail:<a href="mailto:b.lagisquet@gmail.com"> b.lagisquet@gmail.com</a></p>*/}
        </div>
      </div>
    </section>
  );
}

export default styled(AboutMe)`
  section {
    margin: 5rem 0;
  }
  h3 {
    margin-top: 2rem;
  }
  a {
    color: ${colors.primary};
  }
  .about {
    padding-bottom: 3rem;
  }
  
  @media (min-width:769px) {
  .about {
    margin-right: 20vh;
  }
}
  @media (max-width:768px) {
  .about{
    text-align: justify;
    margin: 0 1rem;
  }
}
  .image {
    margin-right: 3rem;
  }
`;