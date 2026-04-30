import React from 'react';
import styled from 'styled-components';
import { Placeholder } from '../ResponsiveHeroImage';

const GalleryContainer = styled.div`
  margin: auto;
  position: relative;
  max-width: 1160px;
  margin-bottom: 2px;
  padding-top: 20px;

  @media (min-width: 768px) {
    padding-top: 20px;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SliderTrack = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.3s ease;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  position: relative;
  height: 470px;

  @media (min-width: 768px) {
    height: 525px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border: 2.5px solid white;
  border-top: none;
  border-bottom: none;
  height: 100%;
  width: 100%;
`;

// Componente de galeria otimizado para LCP sem layout shift
const LCPGallery = () => {
  return (
    <GalleryContainer>
      <SliderContainer>
        <SliderTrack>
          <Slide>
            <ImageWrapper>
              <Placeholder alt="Imagem Imóvel" priority />
            </ImageWrapper>
          </Slide>
        </SliderTrack>
      </SliderContainer>
    </GalleryContainer>
  );
};

export default LCPGallery;
