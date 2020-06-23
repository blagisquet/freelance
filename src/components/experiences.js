import React from 'react';

import './style.scss';

import { colors } from '../theme/helpers';

import styled from 'styled-components';


const Experiences = ({ className }) => {
  return (
    <section className={className}>
      <div className="columns">
        <div className="column exp is-one-third">
          <h3 className="has-text-weight-bold is-pulled-right-tablet has-text-centered-mobile">Expériences</h3>
        </div>
        <div className="column experiences">
          <div>
            <h4 className="has-text-weight-bold">Freelance</h4>
            <p><span>Développeur Web</span> • Mars 2020 - Aujourd'hui</p>
            <p>Réalisation d'un site web en GatsbyJs pour le studio Septième Sens, conception d'interfaces (Adobe XD), UX Design, méthodologie Agile. </p>
          </div>
          <div>
            <h4 className="has-text-weight-bold">OpenClassrooms</h4>
            <p><span>Autoformation</span> • Septembre 2018 - Aujourd'hui</p>
            <p>Multiples certifications notamment en HTML/CSS, UX Design, Wordpress, Gestion de projets (cascade, agile), DevOps...</p>
          </div>
          <div>
            <h4 className="has-text-weight-bold">Syndis</h4>
            <p><span>Développeur Angular8</span> • Août 2019 - Novembre 2019</p>
            <p>Conception d'interface (Figma), création des spécifications (OpenAPI), diagramme UML, développement des interfaces sur le site (syndis.fr) ainsi que sur l'application de gestion de copropriété.</p>
          </div>
          <div>
            <h4 className="has-text-weight-bold">Wild Code School Nantes</h4>
            <p><span>Formation développeur web</span> • Février 2019 - Juillet 2019</p>
            <p>Formation intensive en développement Front-end Javascript et la librairie React. Réalisation de trois projets dont un avec un client.</p>
          </div>
          <div>
            <h4 className="has-text-weight-bold">IMIE Nantes</h4>
            <p><span>Formation développeur Java/JEE</span> • Octobre 2018 - Janvier 2019</p>
            <p>Formation intensive sur les technologies: Java, JEE, Angular.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default styled(Experiences)`
  h3 {
    margin-top: 2rem;
  }
  @media (min-width: 768px) {
    h3 {
      float: right;
    }
    .experiences {
      margin-top: 2.2rem;
    }
  }
  span {
    font-style: italic;
  }
  .experiences div:not(:first-child) {
    margin-top: 1rem;
  }
`;