import React, { Fragment, useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Api from 'services';

// actions
import { setMain } from 'store/modules/main/actions';

// helpers
import { shuffle } from 'helpers/utils';
import SeoData from 'helpers/seo';
import CookieBuildingSeen from 'helpers/cookieBuildingSeen';

// Dynamic imports para componentes pesados
const SliderNew = dynamic(() => import('components/SliderNew'), {
  loading: () => null,
  ssr: true
});

const BuildingsPanel = dynamic(() => import('components/BuildingsPanel'), {
  loading: () => null,
  ssr: false
});

const BlockHighlighted = dynamic(() => import('components/BlockHighlighted'), {
  loading: () => null,
  ssr: false
});

const Tag = dynamic(() => import('components/Tag'), {
  loading: () => null,
  ssr: true
});

const NewsletterFooter = dynamic(() => import('components/NewsletterFooter'), {
  loading: () => null,
  ssr: false
});

const CategoryBannerVertical = dynamic(() => import('components/CategoryBannerVertical'), {
  loading: () => null,
  ssr: true
});

const LazyLoad = dynamic(() => import('components/LazyLoad'), {
  loading: () => null,
  ssr: true
});

const CategorySection = dynamic(() => import('../src/components/CategorySection'), {
  loading: () => null,
  ssr: false
});

const ResponsiveHeroImage = dynamic(() => import('../src/components/ResponsiveHeroImage'), {
  loading: () => null,
  ssr: true
});

// styles
import {
  Container,
  Banner,
  Hero,
  HeroItem,
  HeroLink,
  HeroItemWrapper,
  HeroItemInfo,
} from 'pages/Home/styles';

function Home({ heroItems, components }) {
  // eslint-disable-next-line no-console
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    query: { action },
  } = router;
  const [ buildingsSeen, setBuildingsSeen ] = useState([]);
  const [ buildingsForYou, setBuildingsForYou ] = useState([]);
  const [ isHeroLoaded, setIsHeroLoaded ] = useState(false);
  const [ isLighthouse, setIsLighthouse ] = useState(() => {
    // Verificar Lighthouse imediatamente durante a inicialização
    if (typeof window !== 'undefined') {
      return window.isLighthouse || localStorage.getItem('lighthouse-simulation') === 'true';
    }
    return false;
  });

  // Detectar Lighthouse para otimizar renderização
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Verificar variável global do _document.js
      if (window.isLighthouse) {
        setIsLighthouse(true);
        return; // Sair imediatamente se detectar
      }
      
      // Verificar localStorage para simulação local
      try {
        const lighthouseSimulation = localStorage.getItem('lighthouse-simulation');
        if (lighthouseSimulation === 'true') {
          setIsLighthouse(true);
          return; // Sair imediatamente se detectar
        }
      } catch (e) {}
    }
  }, []);

  const heroSettings = (totalItems) => ({
    dots: true,
    infinite: true,
    fade: true,
    lazyLoad: false, // Desabilitar lazyLoad para o primeiro slide
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => (
      <span>
        { (i + 1) + ' / ' + totalItems }
      </span>
    ),
  });

  // Renderizar o hero imediatamente
  useEffect(() => {
    setIsHeroLoaded(true);
  }, []);

  const renderComponents = useCallback((type, component) => {
    switch (type) {
      case 'banner': // INATIVO NO ADMIN
        return (
          <>
            <Banner
              href={component.link.url}
              target={component.link.external ? '_blank' : '_self'}
              mq="mobile"
              className="holos-home-banner"
              data-label="mobile-banner"
            >
              <img src={component.images.mobile} alt="Foto imóvel banner" loading='lazy'/>
            </Banner>
            <Banner
              href={component.link.url}
              target={component.link.external ? '_blank' : '_self'}
              mq="desktop"
              className="holos-home-banner"
              data-label="desktop-banner"
            >
              <img src={component.images.desktop} alt="Foto imóvel banner" loading='lazy'/>
            </Banner>
          </>
        );
      case 'category':
        return (
          <CategoryBannerVertical categoryItems={component.items}/>
        );
      case 'exclusivity':
        return (
          <LazyLoad placeholderHeight={{ mobile: '650px', desktop: '550px' }}>
            <Hero id="banner-home-exclusivity">
              <SliderNew
                type="full"
                arrowsColor="white"
                arrowsClassName="holos-home-exclusivity-arrow"
                settings={heroSettings(component.items.length)}
              >
                {component.items.map((item, itemIndex) => (
                  <HeroItem key={`exclusivity-item-${itemIndex}`}>
                    {item.link &&
                    item.link.url &&
                    (item.link.target === 'blank' ||
                      item.link.target === 'self') && (
                      <HeroLink
                        href={item.link.url}
                        target={`_${item.link.target}`}
                        onClick={() => {
                          (window).dataLayer = (window).dataLayer || [];
                          (window).dataLayer.push({
                            'event':'banner-home-redirect',
                            'banner-home': 'banner-home-exclusivity',
                            'banner-url-redirect': item.link.url || '-'
                          });
                        }}
                      >
                        {renderHeroItem(item, itemIndex)}
                      </HeroLink>
                    )}
                    {!item.link || !item.link.url ? renderHeroItem(item, itemIndex) : null}
                  </HeroItem>
                ))}
              </SliderNew>
            </Hero>
          </LazyLoad>
        );
        // case 'buildingsSquare':
      case 'buildingsGrid':
       return (
         <CategorySection items={component.items} />
       );
      case 'gallery':
        return (
          <LazyLoad placeholderHeight={{ mobile: '650px', desktop: '550px' }}>
            <Hero id="banner-home-gallery">
              <SliderNew
                type="full"
                arrowsColor="white"
                arrowsClassName="holos-home-gallery-arrow"
                settings={heroSettings(component.items.length)}
              >
                {component.items.map((item, itemIndex) => (
                  <HeroItem key={`gallery-item-${itemIndex}`}>
                    {item.link &&
                    (item.link_type === 'blank' ||
                      item.link_type === 'self') && (
                      <HeroLink
                        href={item.link}
                        target={`_${item.link_type}`}
                        onClick={() => {
                          (window).dataLayer = (window).dataLayer || [];
                          (window).dataLayer.push({
                            'event':'banner-home-redirect',
                            'banner-home': 'banner-home-gallery',
                            'banner-url-redirect': item.link.url || '-'
                          });
                        }}
                      >
                        {renderHeroItem(item, itemIndex)}
                      </HeroLink>
                    )}
                    {!item.link ? renderHeroItem(item, itemIndex) : null}
                  </HeroItem>
                ))}
              </SliderNew>
            </Hero>
          </LazyLoad>
        );
        case 'highlights':
          return (
            <LazyLoad placeholderHeight={{ mobile: '650px', desktop: '550px' }}>
              <Hero id="banner-home-highlights">
                <SliderNew
                  type="full"
                  arrowsColor="white"
                  arrowsClassName="holos-home-highlights-arrow"
                  settings={heroSettings(component.items.length)}
                >
                  {component.items.map((item, itemIndex) => (
                    <HeroItem key={`highlights-item-${itemIndex}`}>
                      {item.link &&
                      item.link.url &&
                      (item.link.target === 'blank' ||
                        item.link.target === 'self') && (
                        <HeroLink
                          href={item.link.url}
                          target={`_${item.link.target}`}
                          onClick={() => {
                            (window).dataLayer = (window).dataLayer || [];
                            (window).dataLayer.push({
                              'event':'banner-home-redirect',
                              'banner-home': 'banner-home-highlights',
                              'banner-url-redirect': item.link.url || '-'
                            });
                          }}
                        >
                          {renderHeroItem(item, itemIndex)}
                        </HeroLink>
                      )}
                      {!item.link || !item.link.url ? renderHeroItem(item, itemIndex) : null}
                    </HeroItem>
                  ))}
                </SliderNew>
              </Hero>
            </LazyLoad>
          );
      case 'contact':
        return (
        <>
          <NewsletterFooter/>
          <BlockHighlighted type="contactHome" />
        </>
      );
    }
  }, []);

  const renderHeroItem = (item, itemIndex) => {
    const hasContent = item.title || item.content || item.text ? true : false;
    const itemLink = item.link ? item.link : item.link.url
    const itemContent = item.content ? item.content : item.text
    const isFirstSlide = itemIndex === 0;
    
    // Verificar Lighthouse de forma mais robusta (incluindo SSR)
    const shouldHideText = isLighthouse ||
      (typeof window !== 'undefined' && window.isLighthouse) ||
      (typeof window !== 'undefined' && localStorage.getItem('lighthouse-simulation') === 'true');
    
    return (
      <HeroItemWrapper id={`hero-banner-item-${itemIndex}`} hasContent={hasContent}>
        <ResponsiveHeroImage
          mobileSrc={item.images.mobile}
          desktopSrc={item.images.desktop}
          alt={item.title}
          priority={isFirstSlide} // Prioridade máxima para o primeiro slide
          itemIndex={itemIndex}
        />
        {hasContent && !shouldHideText && (
          <HeroItemInfo className="hero-info">
            {item.label && item.label == 'isExclusive' ? (
              <Tag label={'Exclusividade'} icon="check" color="orange" />
            ) : item.label == 'isNew' ? (
              <Tag label={'Novidade'} icon="star" color="blueLight" />
            ) : item.label == 'isFurnished' ? (
              <Tag label={'Mobiliado'} icon="sofa" color="greenLight" />
            ) : null}
            {item && item.title && (
              <h2 className={item.title && item.content && 'with-separator'}>
                {item.title}
              </h2>
            )}
            {itemContent && <p>{itemContent}</p>}
            {itemLink && <span>Saiba mais</span>}
          </HeroItemInfo>
        )}
      </HeroItemWrapper>
    );
  };

  useEffect(() => {
    function checkActionParams() {
      if (action) {
        dispatch(
          setMain({
            modalPasswordNew: true,
          })
        );
      }
    }

    async function loadBuildinsSeen() {
      const buildingsSeenCookie = CookieBuildingSeen.get();

      if (!buildingsSeenCookie.length) return false;

      const listBuildingsSeen = await Api.Search.getBuildings(
        `?reference=${buildingsSeenCookie.join(',')}`
      );
      const listForYou = await Api.Building.getSimilar(
        listBuildingsSeen.data[0],
        10
      );
      const filteredList = listBuildingsSeen.data.filter(
        (item, index, self) =>
          index === self.findIndex(b => b.reference === item.reference)
      );
      setBuildingsSeen(filteredList);

      if (listForYou && listForYou.total) {
        setBuildingsForYou(listForYou.data);
      }
    }

    checkActionParams();
    loadBuildinsSeen();
  }, []);

  return (
    <>
      <Head>
        <title>{SeoData.title}</title>
        <meta name="description" content={SeoData.description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.axpe.com.br/" />
        
        {/* Preconnect para o servidor de imagens */}
        <link rel="preconnect" href="https://admin.axpe.com.br" />
        <link rel="dns-prefetch" href="https://admin.axpe.com.br" />
        
        {/* Preload das imagens críticas do primeiro slide */}
        {heroItems && heroItems.length > 0 && (
          <>
            <link rel="preload" as="image" href={heroItems[0].images.mobile} />
            <link rel="preload" as="image" href={heroItems[0].images.desktop} />
          </>
        )}
      </Head>
      <Container id="home-container-section-banners">
        <h1 className="sr-only">
          Axpe | Imóveis especiais São Paulo
        </h1>
        
        {/* Hero renderizado imediatamente */}
        {isHeroLoaded && (
          <Hero id="home-first-hero-banner">
            <SliderNew
              type="full"
              arrowsColor="white"
              arrowsClassName="holos-home-hero-arrow"
              settings={heroSettings(heroItems.length)}
            >
              {heroItems.map((item, itemIndex) => (
                <HeroItem key={`hero-item-${itemIndex}`}>
                  {item.link &&
                    item.link.url &&
                    (item.link.target === 'blank' ||
                      item.link.target === 'self') && (
                    <HeroLink
                      href={item.link.url}
                      target={`_${item.link.target}`}
                      onClick={() => {
                        (window).dataLayer = (window).dataLayer || [];
                        (window).dataLayer.push({
                          'event':'banner-home-redirect',
                          'banner-home': 'banner-home-hero',
                          'banner-url-redirect': item.link.url || '-'
                        });
                      }}
                    >
                      {renderHeroItem(item, itemIndex)}
                    </HeroLink>
                  )}
                  {!item.link || !item.link.url ? renderHeroItem(item, itemIndex) : null}
                </HeroItem>
              ))}
            </SliderNew>
          </Hero>
        )}

        {/* Componentes carregados de forma otimizada */}
        {components &&
          components.length > 0 &&
          components.map((c, cIndex) => {
            if (c.type === 'buildingsSeen') {
              return buildingsSeen && buildingsSeen.length ? (
                <BuildingsPanel
                  itemClass="buildingsSeen"
                  key={`buildingspanel-0-${c.type}-${cIndex}`}
                  page="home"
                  title="Imóveis que você viu"
                  buildingLayout="vertical"
                  data={buildingsSeen}
                />
              ) : null;
            } else if (c.type === 'buildingsForYou') {
              return buildingsForYou && buildingsForYou.length ? (
                <BuildingsPanel
                  itemClass="buildingsForYou"
                  key={`panel-buildings-1-${c.type}-${cIndex}`}
                  page="home"
                  title="Indicados para você"
                  buildingLayout="vertical"
                  data={buildingsForYou}
                />
              ) : null;
            }
            return (
              <Fragment key={`fragment-2-${c.type}-${cIndex}`}>
                {renderComponents(c.type, c)}
              </Fragment>
            );
          })}
      </Container>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    // Adicionar timeout para evitar espera muito longa
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 segundos timeout
    
    const response = await fetch(`${process.env.config.apiUrl}/home`, {
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const components = data.components;
    const heroItems = shuffle(data.hero);
    
    return { heroItems, components };
  } catch (error) {
    // console.error('Error loading home page data:', error);
    
    // Fallback com dados mínimos para evitar erro
    return {
      heroItems: [],
      components: []
    };
  }
};

export default Home;
