import React from 'react';
import styled, { keyframes } from 'styled-components';
import T from 'prop-types';

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const getSize = ({ size }) => size;

const getMargin = props => getSize(props) / 2;

const getColor = ({ color }) => color;

const getWidth = ({ width }) => width;

const Spinner = styled.span.attrs(() => ({ className: 'Spinner' }))`
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: ${getSize}px;
    height: ${getSize}px;
    margin-top: -${getMargin}px;
    margin-left: -${getMargin}px;
    top: 50%;
    left: 50%;
    z-index: 1;
    border-radius: 50%;
    border: ${getWidth}px solid ${getColor};
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: ${spinner} 0.8s ease infinite;
  }
`;

Spinner.propTypes = {
  size: T.number,
  width: T.number,
  color: T.string,
};

Spinner.defaultProps = {
  size: 20,
  width: 2,
  color: '#F9F9F9',
};

export default React.memo(Spinner);
