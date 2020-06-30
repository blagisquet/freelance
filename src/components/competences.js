import React from 'react';
import data from '../data/data';

import './style.scss';

import styled from 'styled-components';

const Competences = ({ className }) => {
  return (
    <section className={className}>
      <div className="container">
        <h3 className="title is-size-3 has-text-centered">Mes compétences</h3>
        {/*Mobile*/}
        <div className="columns is-mobile is-multiline is-centered">
          {data.competences.map((competence, i) => <img key={competence.alt} className="column is-one-fifth" src={competence.img} alt={competence.alt} />)}
        </div>
      </div>
    </section>
  );
}

export default styled(Competences)`
  h3 {
    margin-top: 2rem;
  }
  .columns {
    margin-top: 1.5rem;
  }
  img {
    margin: 0.5rem;
    max-width: 150px;
    max-height: 150px;
  }
`;