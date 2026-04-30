import React from 'react';
import PropTypes from 'prop-types';
import { NextArrow, PrevArrow } from 'components/Arrow';

import { Container } from './styles';

export default function Slick({
  adaptiveHeight = false,
  initialSlide = 0,
  slidesPerRow = 1,
  slidesToShow = 1,
  slidesToScroll = 1,
  swipeToSlide = false,
  focusOnSelect = false,
  asNavFor = null,
  centerMode = false,
  rows = 1,
  fade = false,
  infinite = true,
  variableWidth = false,
  propsArrow,
  arrows = true,
  responsive = null,
  lazyLoad = true,
  beforeChange,
  afterChange,
  autoplay = false,
  reference = null,
  children,
  type,
  length,
  className
}) {
  const settings = {
    autoplay,
    autoplaySpeed: 3000,
    beforeChange,
    afterChange,
    adaptiveHeight,
    initialSlide,
    slidesPerRow,
    slidesToShow,
    slidesToScroll,
    swipeToSlide,
    focusOnSelect,
    asNavFor,
    rows,
    centerPadding: '0px',
    centerMode,
    variableWidth,
    responsive,
    fade,
    infinite,
    speed: 500,
    dots: false,
    lazyLoad,
    arrows,
    nextArrow: <NextArrow {...propsArrow} />,
    prevArrow: <PrevArrow {...propsArrow} />
  };

  return (
    <Container
      {...settings}
      className={className}
      type={type}
      length={length}
      ref={reference}
    >
      {children}
    </Container>
  );
}

Slick.propTypes = {
  slidesPerRow: PropTypes.number,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  swipeToSlide: PropTypes.bool,
  focusOnSelect: PropTypes.bool,
  asNavFor: PropTypes.object,
  rows: PropTypes.number,

  propsArrow: PropTypes.object,
  reference: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  type: PropTypes.string,
  length: PropTypes.number,
  className: PropTypes.string
};
