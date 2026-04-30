import styled from 'styled-components';
import media from 'styled-media-query';

export const FormContainer = styled.div`
  padding-bottom: 30px;

  ${media.greaterThan('768px')`
    display: block;
  `}
`;

export const Iframe = styled.iframe`
  display: block;
  width: 100%;
  height: 250px;
`;
