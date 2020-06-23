import React from 'react';
import data from '../../data/data';
import Service from './Service';

import styled from "styled-components";

const Services = ({ className }) => {
  return (
    <section className={className}>
      <h3 className="title is-size-3 has-text-centered">Mes services</h3>
      <div>
        {data.features.map((feature, i) => <Service key={feature.title} feature={feature} odd={i % 2 !== 0}></Service>)}
      </div>
    </section>
  );
}

export default styled(Services)`
  h3 {
    margin-top: 2rem;
  }
`;
