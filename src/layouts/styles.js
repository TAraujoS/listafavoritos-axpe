import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 70px;
  background: ${({ theme }) => theme.colors.greyLight5};

  ${media.greaterThan('large')`
    width: calc(100% - 200px);
    margin-left: 200px;
    padding-top: 0;
  `}
`;
