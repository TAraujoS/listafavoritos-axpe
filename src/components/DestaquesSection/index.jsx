import React from 'react';

import { Container, Text, Image, Video } from './styles';

export default function DestaquesSection({ type, item, showHorizontalRule }) {
  return (
    <Container type={type}>
      {item.mediaType == 'video' && (
        <Video
          type={type}
          src={item.src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {item.mediaType == 'imagem' && <Image type={type} src={item.image} />}
      <Text type={type} item={item} showHorizontalRule={showHorizontalRule} />
    </Container>
  );
}
