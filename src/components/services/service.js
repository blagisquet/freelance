import React from 'react';

import { layout, pxToRem, media } from '../../theme/helpers';

import styled from 'styled-components';

const Feature = ({ className, feature, odd }) => {
  return (
    <div className={className}>
      <div className="content">
        <h3>{feature.title}</h3>
        <p>{feature.text}</p>
      </div>
      <img className={odd ? 'odd' : ''} src={feature.img} alt={feature.title} />
    </div>
  )
}

export default styled(Feature)`
  ${layout()};
  text-align: center;
  * {
    margin: ${pxToRem(24)} ${pxToRem(8)}; 
  }
  img {
    max-height: 30vh;
  }
  ${media.small`
    text-align: left;
    img {
      max-height: 20vh;
    }
    display: flex;
    align-items: center;
    .odd {
      order: -1;
    }
  `};
`;