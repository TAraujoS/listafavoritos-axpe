import React from 'react';

// components
import Slider from 'components/Slider';
import OptimizedBuildingImage from 'components/OptimizedImage';

// styles
import {
  Container,
  GroupText,
  Title,
  Text
} from './styles';

function SlickText({ items }) {
  return (
    <Container
      propsArrow={{
        type: 'galeria-imagens-texto',
        position: 'inside',
        backgroundColor: 'white'
      }}
    >
      {items.map((item, itemIndex) => (
        <div key={`item-slicktext-${itemIndex}`}>
          <Slider propsArrow={{ type: 'building', backgroundColor: 'white' }}>
            {item.gallery &&
              item.gallery.length > 0 &&
              item.gallery.map((media, mediaIndex) => {
                return !media.mediaType || (media.mediaType !== 'imagem' && media.mediaType !== 'video') ?
                  null :  media.mediaType === 'imagem' ? (
                  <div key={`item-gallery-${media.mediaType}-${mediaIndex}`}>
                    <OptimizedBuildingImage
                      src={media.image}
                      alt="Imóvel"
                      layout="fill"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : media.mediaType === 'video' ? (
                  <iframe
                    key={`item-gallery-${media.mediaType}-${mediaIndex}`}
                    title="video"
                    src={`https://www.youtube.com/embed/${media.src}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : null;
              })}
          </Slider>
          <GroupText>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
          </GroupText>
        </div>
      ))}
    </Container>
  );
}

export default SlickText;