import React, { useState } from 'react';

// components
import Around from 'pages/Building/Around';
import HowWeLove from 'pages/Building/HowWeLove';
import BlockHighlighted from 'components/BlockHighlighted';
import DestaquesSection from 'components/DestaquesSection';
import SlickText from 'components/SlickText';
import Section from 'components/Section';
import GalleryNav from './Gallery/GalleryNav';

// styles
import { Module } from './styles';

function Modules({ property }) {
  const [ showGallery, setshowGallery ] = useState(false);

  const renderModule = (type, component) => {
    // porque-adoramos
    // destaque-1
    // destaque-2
    // destaque-3
    // galeria-imagens-texto
    // imagem-destaque
    // destaque-texto
    // destaque-texto-bullets
    // plantas

    switch (type) {
      case 'porque-adoramos':
        return (
          <HowWeLove reasons={component.data ? component.data : component} />
        );
      case 'destaque-1':
      case 'destaque-2':
      case 'destaque-3':
        return <DestaquesSection type={type} item={component.data} />;
      case 'galeria-imagens-texto':
        return <SlickText type={type} items={component.data} />;
      case 'imagem-destaque':
        return (
          <DestaquesSection
            showHorizontalRule={false}
            type={type}
            item={component.data}
          />
        );
      case 'destaque-texto':
      case 'destaque-texto-bullets':
        return <Section type={type} item={component.data} />;
      case 'plantas':
        return component.data.length > 0 ? (
          <>
            <BlockHighlighted
              type="planta"
              onClick={() => setshowGallery(true)}
            />
            {showGallery && (
              <GalleryNav
                items={component.data}
                onClose={() => setshowGallery(false)}
                category={property.category}
                local={property.address.local}
                reference={property.reference}
                planta
              />
            )}
          </>
        ) : (
          <BlockHighlighted type="planta" href={component.data.file} />
        );
      case 'vizinhanca':
        return (
          <Around
            local={property.address.local}
            cep={component.data.cep}
            text={component.data.texto || component.data.text}
            latitude={+component.data.latitude}
            longitude={+component.data.longitude}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {Array.isArray(property.components) &&
        property.components.map((component, index) => (
          <Module key={`building-module-0-${index}`} type={component.module.slug}>
            {renderModule(component.module.slug, component)}
          </Module>
        ))}

      {!Array.isArray(property.components) &&
        Object.keys(property.components).map((componentKey, index) => (
          <Module key={`building-module-1-${index}-${componentKey}`} type={componentKey}>
            {renderModule(componentKey, property.components[componentKey])}
          </Module>
        ))}
    </>
  );
}

export default Modules;