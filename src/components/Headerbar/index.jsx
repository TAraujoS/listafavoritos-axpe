import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import SVG from 'react-inlinesvg';

// store
import { setMain } from 'store/modules/main/actions';

// components
import Share from 'components/Share';

// helpers
import useScrollPosition from 'helpers/scrollPosition';

// assets
import ArrowIconSVG from 'assets/icons/arrow.svg';
import ShareIconSVG from 'assets/icons/share.svg';

// styles
import {
  Container,
  Wrapper,
  Column,
  ButtonBack,
  ButtonIcon,
} from './styles';

function Headerbar({ className, type, title, subtitle, building }) {
  const refEl = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const scrollPosition = useScrollPosition();
  const { searchFormActive } = useSelector((state) => state.main);
  const [ shareActive, setShareActive ] = useState(false);

  const toggleShare = useCallback(() => {
    setShareActive(!shareActive);
  }, [ shareActive ]);

  const shareOnClose = useCallback(() => {
    setShareActive(!shareActive);
  }, [ shareActive ]);

  const buttonBack = useCallback(() => {
    if (type === 'search') {
      toggleSearch();
    } else {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push('/');
      }
    }
  }, [ type, toggleSearch, router ]);

  const toggleSearch = useCallback(() => {
    dispatch(setMain({ searchFormActive: !searchFormActive }));
  }, [ searchFormActive ]);

  function handleScrollPosition([ curTop, oldTop ]) {
    const startTopHeaderbar = window.innerWidth < 1170 ? 70 : 0;

    if (!refEl || !refEl.current) return false;

    if (!startTopHeaderbar) {
      refEl.current.style.top = `0px`;
      return false;
    }

    let topHeaderbar =
      curTop > oldTop ? startTopHeaderbar - curTop : startTopHeaderbar;

    if (topHeaderbar < 0) {
      topHeaderbar = 0;
    } else if (topHeaderbar > startTopHeaderbar) {
      topHeaderbar = startTopHeaderbar;
    }

    refEl.current.style.top = `${topHeaderbar}px`;
  }

  useEffect(() => {
    if (type !== 'modal') {
      handleScrollPosition(scrollPosition);
    }
  }, [ scrollPosition, type ]);

  useEffect(() => {
    dispatch(setMain({ headerHiding: true }));
  }, []);

  return (
    <>
      <Container type={type} className={className}>
        <Wrapper ref={refEl}>
          <ButtonBack
            type="button"
            onClick={buttonBack}
            className="holos-product-back"
            aria-label='Voltar'
          >
            <SVG src={ArrowIconSVG} aria-hidden="true"/> Voltar
          </ButtonBack>

          {title &&
            (router.pathname === '/busca' ? (
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
            ) : (
              <h3 dangerouslySetInnerHTML={{ __html: title }} />
            ))}

          {subtitle && <h4 dangerouslySetInnerHTML={{ __html: subtitle }} />}

          {type === 'search' && (
            <Column>
              <ButtonIcon
                type="button"
                onClick={toggleShare}
                className="btn-share holos-search-header-button"
                data-showcase="Busca"
                data-label="Share"
                aria-label="Compartilhar"
              >
                <SVG src={ShareIconSVG} uniquifyIDs={true} aria-hidden="true"/>
              </ButtonIcon>
            </Column>
          )}

        </Wrapper>
          {type === 'building' && (
            <Column>
              <ButtonIcon
                type="button"
                onClick={toggleShare}
                className="btn-share holos-search-header-button"
                data-showcase="Busca"
                data-label="Share"
                aria-label='Compartilhar'
              >
                <SVG src={ShareIconSVG} uniquifyIDs={true} aria-hidden="true"/>
              </ButtonIcon>
            </Column>
          )}
      </Container>
      <Share
        active={shareActive}
        path={router.asPath}
        title={`Axpe - Resultado de Busca`}
        onClose={shareOnClose}
      />
    </>
  );
}

Headerbar.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Headerbar;
