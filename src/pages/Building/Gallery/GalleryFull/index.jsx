import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import OptimizedBuildingImage from 'components/OptimizedImage';

// styles
import {
  Container,
  Images,
  Slide
} from './styles';

function callPlayer(iframe, func, args) {
  if (iframe.src.indexOf('youtube.com/embed') !== -1) {
      iframe.contentWindow.postMessage( JSON.stringify({
          'event': 'command',
          'func': func,
          'args': args || []
      } ), '*');
  }
}

function toggleVideo() {
  setTimeout(function(){

    const slideIframe = document.querySelector('.slick-slider .slick-current iframe');
    if(slideIframe !== null) {

      setTimeout(function(){
        if(slideIframe.classList.contains('is-loaded')) {
          callPlayer(slideIframe, 'playVideo');
        } else {
          slideIframe.addEventListener('load', () => {
            setTimeout(function(){
              callPlayer(slideIframe, 'playVideo');
              slideIframe.classList.add('is-loaded');
            });
          });
        }
      }, 250);
      
    } else {
      
      const sliderIframes = document.querySelectorAll('.slick-slider .slick-slide:not(slick-current) iframe');
      if(document.querySelector('.slick-slider iframe') !== null) {
        [].forEach.call(sliderIframes, function(iframe) {
          callPlayer(iframe, 'stopVideo');
        });
      }

    }
  }, 200);
}

export default function GalleryFull({
  initialSlide,
  onClose,
  items,
  category,
  local
}) {

  return (
    <Container category={category} local={local} close={onClose}>
      <Images
        type="gallery"
        arrowsColor="greenDark"
        settings={{
          dots: false,
          infinite: true,
          speed: 800,
          lazyLoad: true,
          initialSlide: initialSlide,
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          beforeChange: (current, next) => { toggleVideo() },
          onInit: () => { toggleVideo() }
        }}
      >
      {items &&
        items.length > 0 &&
        items.map((item, itemIndex) => {
          switch (item.tipo) {
            case 'imagem':
              return (
                <Slide key={`galleryfull-item-${item.tipo}-${itemIndex}`}>
                  <TransformWrapper pan={{ disabled: true }} options={{ maxScale: 4, padding: false, centerContent: true, limitToBounds: true }}>
                    <TransformComponent>
                      <OptimizedBuildingImage
                        src={item.src}
                        alt="Foto do Imóvel"
                        layout="fill"
                        sizes="(max-width: 768px) 100vw, 100vw"
                        priority={itemIndex === 0}
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </Slide>
              );
            case 'video':
              return (
                <Slide key={`galleryfull-item-${item.tipo}-${itemIndex}`}>
                  <iframe
                    title="video"
                    src={`https://www.youtube.com/embed/${item.video}?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Slide>
              );
          }
      })}
      </Images>
    </Container>
  );
}
