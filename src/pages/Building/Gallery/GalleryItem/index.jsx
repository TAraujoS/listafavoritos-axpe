import { useState } from 'react';
import Image from 'next/image';
import OptimizedBuildingImage from 'components/OptimizedImage';
import { ImageWrapper } from '../styles';


export default function GalleryItem({ item }) {
  const [ isVertical, setIsVertical ] = useState(false);

  const handleImageLoad = ({ naturalWidth, naturalHeight }) => {
    setIsVertical(naturalHeight > naturalWidth);
  };

  return (
    <ImageWrapper isVertical={isVertical}>
      <OptimizedBuildingImage
        src={item.src}
        alt="Imagens imóvel"
        layout="fill"
        priority={true}
        className="next-image"
        sizes="(max-width: 768px) 100vw, 780px"
      />
    </ImageWrapper>
  );
}