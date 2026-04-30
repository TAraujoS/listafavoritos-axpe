import React from 'react';
import PropTypes from 'prop-types';
import { DotsContainer, DotItem, DotButton } from './styles';

const DotsPagination = ({ currentSlide, slideCount, onDotClick }) => {
  const maxDots = 4;
  const windowStart = slideCount > maxDots
    ? Math.min(Math.max(0, currentSlide - 2), slideCount - maxDots)
    : 0;
    
  const windowDots = [];
  for (let i = windowStart; i < Math.min(windowStart + maxDots, slideCount); i++) {
    windowDots.push(i);
  }
  return (
    <DotsContainer>
      {windowDots.map((dotIndex, idx) => {
        let size = 14;
        if (dotIndex < currentSlide) {
          size = 10;
        }
        if (
          idx === windowDots.length - 1 &&
          slideCount > windowDots[windowDots.length - 1] + 1
        ) {
          size = 10;
        }
        if (dotIndex === currentSlide) {
          size = 14;
        }
        return (
          <DotItem key={`dot-${dotIndex}`}>
            <DotButton
              size={size}
              active={dotIndex === currentSlide}
              onClick={() => onDotClick(dotIndex)}
              aria-label={`Ir para o slide ${dotIndex + 1}`}
            />
          </DotItem>
        );
      })}
    </DotsContainer>
  );
};
DotsPagination.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  slideCount: PropTypes.number.isRequired,
  onDotClick: PropTypes.func.isRequired,
};
export default DotsPagination;