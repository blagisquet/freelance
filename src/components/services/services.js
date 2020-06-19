import React from 'react';
 
import styled from 'styled-components';
import './style.scss';

const Services = ({ className }) => {
  return (
    <section className={className}>
      <h3 className="title is-size-4 has-text-centered">Mes services</h3>
      <img src="" alt="responsive web design" />
      <div className="is-hidden">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
    </section>
  );
}

export default styled(Services)`
  h3 {
    margin-top: 2rem;
  }
`;
