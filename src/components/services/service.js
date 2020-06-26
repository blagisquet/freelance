import React from 'react';

import { layout, pxToRem, media } from '../../theme/helpers';

import styled from 'styled-components';

const Feature = ({ className, feature, odd }) => {
  return (
    <div className={className}>
      <div className="content container">
        <h3>{feature.title}</h3>
        <p>{feature.text}</p>
      </div>
      <div className="is-vcentered">
        <img className={odd ? 'odd' : ''} src={feature.img} alt={feature.title} />
      </div>
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
  h3 {
    text-decoration: none;
  }
  ${media.small`
    text-align: left;
    img {
      max-height: 20vh;
      width: 90px;
      height: 90px;
    }
    display: flex;
    align-items: center;
    .odd {
      order: -1 !important;
      background: red;
    }
  `};
`;