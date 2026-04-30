import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// components
import Slider from 'components/Slider';
import GalleryNav from './GalleryNav';
import GalleryFull from './GalleryFull';
import DotsPagination from 'components/DotsPagination';
import GalleryItem from './GalleryItem';
import OptimizedBuildingImage from 'components/OptimizedImage';

// assets
import I360 from 'assets/icons/360.svg';
import PlayIcon from 'assets/icons/play-button.svg';
// styles
import {
  Container,
  Tour360,
  PlayButton,
  SliderButton,
  Button360,
} from './styles';


function Gallery({
  items,
  center = true,
  tour360,
  showSizeGallery = true,
  className,
  propsArrow = { position: 'center', backgroundColor: 'white' },
  showClickImage = true,
  category,
  local,
  reference
}) {
  const [ showGalleryNav, setShowGalleryNav ] = useState(false);
  const [ showGalleryFull, setShowGalleryFull ] = useState(false);
  const [ imageSelected, setImageSelected ] = useState(null);
  const [ showTour, setShowTour ] = useState('');
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const sliderRef = useRef(null);

  const linkTour = (tour360) ? tour360 : `https://www.banibconecta.com/site/tour/axpe-imoveis-especiais/${reference}/autostart`;

  return (
    <Container className={className}>
      {tour360 && (
        <Button360 onClick={() => setShowTour(true)}>
          <OptimizedBuildingImage
            src={I360}
            alt="Tour 360"
            layout="fill"
            sizes="(max-width: 768px) 100vw, 50px"
            className="tour-360-icon"
          />
        </Button360>
      )}

      {showTour && (
        <Tour360
          close={() => setShowTour(false)}
          category={category}
          local={local}
        >
          <iframe title="tour360" src={linkTour}></iframe>
        </Tour360>
      )}

      <Slider
        reference={sliderRef}
        lazyLoad={false}
        propsArrow={propsArrow}
        slidesToShow={1}
        centerMode={true}
        className={center ? 'center' : ''}
        variableWidth={true}
        afterChange = {index => setCurrentSlide(index)}
        responsive={[
          {
            breakpoint: 769,
            settings: {
              centerMode: false,
              variableWidth: false
            }
          }
        ]}
      >
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <SliderButton
              type="button"
              onClick={() => {
                if (showClickImage) {
                  setImageSelected(index);
                  setShowGalleryFull(true);
                }
              }}
              key={`building-gallery-btn-${index}`}
            >
            
            {item.tipo == 'video' && (
              <PlayButton class="play-button" src={PlayIcon} alt="Assistir vídeo" />
            )}

            <GalleryItem item={item} />
          </SliderButton>
            ))}
      </Slider>

      <DotsPagination
        currentSlide={currentSlide}
        slideCount={items ? items.length : 0}
        onDotClick={index => sliderRef.current.slickGoTo(index)}
      />

      {showGalleryNav && (
        <GalleryNav
          items={items}
          onClose={() => setShowGalleryNav(false)}
          category={category}
          local={local}
        />
      )}

      {showGalleryFull && (
        <GalleryFull
          initialSlide={imageSelected}
          items={items}
          onClose={() => setShowGalleryFull(false)}
          category={category}
          local={local}
        />
      )}
    </Container>
  );
}

Gallery.propTypes = {
  items: PropTypes.array.isRequired
};

export default Gallery;
