import React from 'react';
import data from '../../data/data';
import Service from './Service';

const Services = () => {
  return (
    <div>
      { data.features.map((feature, i) => <Service key={feature.title} feature={feature} odd={i % 2 !== 0}></Service>)}
    </div>
  );
}

export default Services;
