import React from 'react';
 
import styled from 'styled-components';
import './style.scss';

const Services = ({ className }) => {
  return (
    <section className={className}>
      <h3 className="title is-size-4 has-text-centered">Mes services</h3>
      <img src="" alt="responsive web design" />
    </section>
  );
}

export default styled(Services)`
  h3 {
    margin-top: 2rem;
  }
`;
