import React from 'react';

import './style.scss';

import { colors } from '../theme/helpers';

import styled from "styled-components";

const Ad = ({ className }) => {
  return (
    <section className={className}>
      <div className="has-background-grey-darker has-text-centered">
        <h3 className="title is-size-4 has-text-white has-text-centered-mobile">Une idée ? Un projet ?</h3>
        <p>N'hésitez pas à me contacter pour en discuter.</p>
        <p>Le devis est gratuit</p>
        <a href="#contact" className="button is-warning has-text-weight-bold">Contact</a>
      </div>
    </section>
  );
}

export default styled(Ad)`
  section {
    margin-top: 2rem;
  }
  div {
    color: ${colors.white};
  }
  h3 {
    padding-top: 2rem;
  }
  a {
    margin: 2rem 0;
  }
`;