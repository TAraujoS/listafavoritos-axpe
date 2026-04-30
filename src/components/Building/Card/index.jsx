import React, { useCallback, useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import OptimizedBuildingImage from 'components/OptimizedImage';

// helpers
import Link from 'next/link';
import { formatCurrency } from 'helpers/utils';

// assets
import EmojiIconSVG from 'assets/icons/emoji.svg';

// styles
import {
  Container,
  LinkTag,
  Wrapper,
  Gallery,
  Column,
  Text,
  Inactive,
  GallerySlider
} from './styles';

function BuildingCard({
  layout = 'vertical',
  gtmShowcase = '',
  positionIndex = 1,
  item,
  showGallery = false,
  categorySection = false,
  searchPage = false
}) {
  const [ gtmObj, setGtmObj ] = useState(null);
  const itemData =
  item && item.building && Object.keys(item.building).length > 0
  ? item.building
  : item;

  const { category, values, infos, address, status } = itemData;

  const infoDescription = infos && infos.shortDescription || infos && infos.titleSite;
  const charDescriptionLimit = 70;

  const sell =
    values && Object.keys(values).length > 0 && values.sell
      ? parseInt(values.sell)
      : '';

  const release =
    values && Object.keys(values).length > 0 && values.release
      ? parseInt(values.release)
      : '';

  const rent =
    values && Object.keys(values).length > 0 && values.rent
      ? parseInt(values.rent)
      : '';

  const renderGalleryImages = useCallback(() => {
    const urlImageDesktop =
      itemData.images && itemData.images.desktop
        ? itemData.images.desktop
        : itemData.imageFeatured
        ? itemData.imageFeatured.desktop
        : '';

    const urlImageMobile =
      itemData.images && itemData.images.mobile
        ? itemData.images.mobile
        : itemData.imageFeatured
        ? itemData.imageFeatured.mobile
        : '';

        if (showGallery && itemData.gallery && itemData.gallery.length > 0) {
          return (
            <GallerySlider layout={layout}>
              {itemData.gallery.map((image, index) => (
                <React.Fragment key={index}>
                  <div className="image-mobile">
                    <OptimizedBuildingImage
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                      layout="fill"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0} // Prioridade para primeira imagem
                    />
                  </div>
                  <div className="image-desktop">
                    <OptimizedBuildingImage
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                      layout="fill"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0} // Prioridade para primeira imagem
                    />
                  </div>
                </React.Fragment>
              ))}
            </GallerySlider>
          );
        } else if (urlImageDesktop || urlImageMobile) {
          return (
            <Gallery layout={layout}>
              {status === 'inactive' && (
                <Inactive>
                  <SVG src={EmojiIconSVG} uniquifyIDs={true} />
                  <p>
                    <strong>Ops!</strong>
                    <br />
                    Esse imóvel não está mais disponível
                  </p>
                </Inactive>
              )}

              {urlImageMobile && (
                <div className="image-mobile">
                  <OptimizedBuildingImage
                    src={urlImageMobile}
                    alt="Imagem do imóvel mobile"
                    layout="fill"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              {urlImageDesktop && (
                <div className="image-desktop">
                  <OptimizedBuildingImage
                    src={urlImageDesktop}
                    alt="Imagem do imóvel desktop"
                    layout="fill"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
            </Gallery>
          );
        } else {
          return null;
        }
      }, [ showGallery, layout, itemData, status ]);

  const renderHTML = useCallback(() => {
    return (
      <Wrapper layout={layout}>
        {renderGalleryImages()}
        <Column layout={layout}>
          <Text layout={layout}>
            <span>
              {sell
                ? formatCurrency.format(sell)
                : release ? formatCurrency.format(release) : rent ? formatCurrency.format(rent) : ' '}
            </span>
            <p>{category}</p>
            <h4>{address && address.local ? address.local : ''}</h4>
            <div>
              <span>{infos && infos.areaUseful &&`${infos.areaUseful} m² |`} </span>
              <span>{infos && infos.suites && `${infos.suites} Suítes |`}</span>
              <span>{infos && infos.bedrooms && `${infos.bedrooms} Quartos |`}</span>
              <span>{infos && infos.parking && `${infos.parking} Vagas`}</span>
            </div>
            <p>{infoDescription.length > charDescriptionLimit
              ? `${infoDescription.slice(0, charDescriptionLimit)}...`
              : infoDescription}
            </p>
            
          </Text>
        </Column>
      </Wrapper>
    );
  }, [ layout, itemData ]);

  useEffect(() => {
    const obj = gtmShowcase
      ? {
          className: 'holos-home-product',
          showcase: gtmShowcase,
          productId: itemData.reference
        }
      : null;

    if (gtmShowcase) {
      if(gtmShowcase === 'Imóvel Recente') {
        obj.className = 'holos-account-product';
      } else if(gtmShowcase.search('pronto para morar') >= 0) {
        obj.className = 'holos-search-product';
        obj.showcase = 'Imóveis Prontos';
      } else if(gtmShowcase.search('não estão prontos') >= 0) {
        obj.className = 'holos-search-product';
        obj.showcase = 'Imóveis Lançamentos';
      } else if(gtmShowcase.search('bairros vizinhos') >= 0) {
        obj.className = 'holos-search-product';
        obj.showcase = 'Imóveis Bairros Vizinhos';
      } else if(gtmShowcase.search('valor passou um pouco') >= 0) {
        obj.className = 'holos-search-product';
        obj.showcase = 'Imóveis Preço Acima';
      }
    }

    setGtmObj(obj);
  }, [ gtmShowcase ]);

  return (
    <Container layout={layout} categorySection={categorySection} searchPage={searchPage}>
      {status !== 'inactive' ? (
        <Link href={`/${itemData.slug}`} passHref>
          <LinkTag
            layout={layout}
            className={gtmObj ? gtmObj.className : ''}
            data-showcase={gtmObj ? gtmObj.showcase : ''}
            data-product-id={gtmObj ? gtmObj.productId : ''}
            data-position={positionIndex}
          >
            {renderHTML()}
          </LinkTag>
        </Link>
      ) : (
        renderHTML()
      )}
    </Container>
  );
}

export default BuildingCard;
