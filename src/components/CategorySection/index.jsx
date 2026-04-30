import React, { useRef, useState } from 'react'
import { CardWrapper, Container, InfoGroup, SectionContainer, Slide } from './styles';
import Button from '../Button';
import BuildingCard from '../Building/Card';
import DotsPagination from '../DotsPagination';

const CategorySection = ({ items }) => {
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <SectionContainer>
      <Container
        {...settings}
        reference={sliderRef}
        afterChange={index => setCurrentSlide(index)}
        arrowsColor="white"
      >
        {items.map((item, index) => (
          <Slide key={`slide-${item.building.reference}-${index}`}>
            <InfoGroup>
              <h4>{item.titleGreen}</h4>
              <hr />
              <p>{item.titleWhite}</p>
              <Button
                route={`/${item.building.slug}`}
                className="holos-home-product"
                data-showcase="Carrossel de Produtos"
                data-product-id={item.building.reference}
              >
                Entre sem bater
              </Button>
            </InfoGroup>
           
            <CardWrapper key={`card-wrapper-${item.building.reference}-${index}`}>
              <BuildingCard
                key={`building-categoryitem-${item.building.reference}-${index}`}
                item={item}
                gtmShowcase={''}
                positionIndex={index + 1}
                showGallery={true}
                categorySection={true}
              />
            </CardWrapper>
          </Slide>
        ))}
    
      </Container>
      <DotsPagination
        currentSlide={currentSlide}
        slideCount={items ? items.length : 0}
        onDotClick={index => {
          setCurrentSlide(index);
          sliderRef.current.slickGoTo(index);
        }}
      />

    </SectionContainer>
  );
};

export default CategorySection;
