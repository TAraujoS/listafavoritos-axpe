import React, { useState } from 'react';
import OptimizedBuildingImage from 'components/OptimizedImage';
import {
  Container,
  Body,
  SliderNav1,
  BodySlider,
  ImagesSecundary,
  InfoPlanta,
  Category,
  Title,
  Info
} from './styles';

function GalleryNav({
  className,
  items = [],
  onClose,
  category,
  local,
  planta = false,
  reference
}) {
  const [ plantaSelect, setPlantaSelect ] = useState(0);
  const slider1 = React.createRef();

  return (
    <Container
      close={onClose}
      category={category}
      local={local}
      planta={planta}
    >
      <Body>
        {planta && (
          <InfoPlanta>
            <div>
              <Category>{category}</Category>
              <hr />
            </div>
            <Info>
              <p>{local}</p>
              <p>{reference}</p>
              <p>{items[plantaSelect] && `${items[plantaSelect].area}m²`}</p>
            </Info>
            <hr />
            <Title>{items[plantaSelect] && items[plantaSelect].title}</Title>
          </InfoPlanta>
        )}
        <div className={className}>
          <SliderNav1
            reference={slider => {
              return (slider1.current = slider);
            }}
            arrows={planta}
            propsArrow={planta ? { position: 'outside' } : false}
            slidesToShow={1}
            beforeChange={(current, next) => {
              setPlantaSelect(next);
            }}
            planta={planta}
          >
            {items &&
              items.length > 0 &&
              items.map((item, itemIndex) => (
                <BodySlider key={`building-gallerynav1-${itemIndex}`}>
                  {item.image || item.src ? (
                    <OptimizedBuildingImage
                      src={item.src || item.image}
                      alt="Imóvel"
                      layout="fill"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : item.video ? (
                    <iframe
                      title="video"
                      src={`https://www.youtube.com/embed/${item.video}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : null}
                </BodySlider>
              ))}
          </SliderNav1>

          <ImagesSecundary>
            {items &&
              items.length > 0 &&
              items.map((item, itemIndex) => (
                <OptimizedBuildingImage
                  key={`building-gallerynav2-${itemIndex}`}
                  src={item.src || item.image}
                  alt="Imóvel"
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className={plantaSelect === itemIndex ? 'active' : ''}
                  onClick={() => slider1.current.slickGoTo(itemIndex)}
                />
              ))}
          </ImagesSecundary>
        </div>
      </Body>
    </Container>
  );
}

export default GalleryNav;