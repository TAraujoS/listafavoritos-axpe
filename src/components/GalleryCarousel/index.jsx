import React, { useState } from 'react';
import OptimizedBuildingImage from 'components/OptimizedImage';

// styles
import {
  Container,
  Images,
  ImagesItem,
  Items,
  ItemsCarousel,
  Item,
} from './styles';

function GalleryCarousel({ items }) {
  const [ carouselCurrentSlideIndex, setCarouselCurrentSlideIndex ] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onChangeCarousel = (index) => {
    setCarouselCurrentSlideIndex(index);
  };

  if (!items || !items.length) {
    return null
  }

  return (
    <Container>
      <Images>
        {items.map((item, index) => (
          <ImagesItem
            key={`gallerycarousel-item-${index}`}
            active={carouselCurrentSlideIndex === index}
          >
            <a href={item.link}>
              {item.images.mobile && (
                <OptimizedBuildingImage
                  src={item.images.mobile}
                  alt={item.title}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="mobile"
                />
              )}
              {item.images.desktop && (
                <OptimizedBuildingImage
                  src={item.images.desktop}
                  alt={item.title}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="desktop"
                />
              )}
            </a>
          </ImagesItem>
        ))}
      </Images>
      <Items>
        <ItemsCarousel
          type="full"
          arrowsColor="white"
          hasVerticalBar={true}
          onChange={onChangeCarousel}
          settings={settings}
        >
          {items.map((item, index) => (
            <Item key={`gallerycarousel-item-${index}`}>
              <a href={item.link}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </a>
            </Item>
          ))}
        </ItemsCarousel>
      </Items>
    </Container>
  );
}

export default GalleryCarousel;
