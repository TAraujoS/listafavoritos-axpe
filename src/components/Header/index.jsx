// 🔥 imports iguais (não muda nada)
import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SVG from 'react-inlinesvg';
import SimpleBar from 'simplebar-react';

import { setMain } from 'store/modules/main/actions';

import Link from 'next/link';
import useScrollPosition from 'helpers/scrollPosition';

import InstagramIconSVG from 'assets/icons/instagram.svg';
import WhatsappIconSVG from 'assets/icons/whatsapp.svg';
import SearchIconSVG from 'assets/icons/busca.svg';
import HomeIconSVG from 'assets/icons/vender-imovel.svg';
import CloudIconSVG from 'assets/icons/sonhar.svg';
import AxpeFullLogoSVG from 'assets/axpe-full-logo.svg';
import FavoriteOutlineIcon from 'assets/favorite-outline-icon.svg'
import FavoriteFillIcon from 'assets/favoritos.svg'

import {
  Container,
  Wrapper,
  AxpeLogo,
  LogoLink,
  ButtonSearch,
  ButtonToggle,
  Box,
  NavMain,
  NavMainButtonSearch,
  NavMainButton,
  NavMainButtonText,
  NavSecondary,
  NavSecondaryButton,
  Socials,
  SocialButton,
  Newsletter,
  NewsletterButton,
  NavBottomContainer,
  ZohoFixWhatsModal,
} from './styles';

function Header() {
  const dispatch = useDispatch();
  const refHeader = useRef(null);
  const scrollBarRef = useRef();

  const { headerHiding, searchFormActive, modalNewsletter } = useSelector(
    (state) => state.main
  );

  const [navToggle, setNavToggle] = useState(false);
  const [listId, setListId] = useState(false); // ✅ seguro
  const [isLighthouse, setIsLighthouse] = useState(false); // ✅ seguro

  const scrollPosition = useScrollPosition();

  // ✅ CENTRALIZA localStorage AQUI
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      setListId(!!localStorage.getItem('listId'));

      if (window.isLighthouse) {
        setIsLighthouse(true);
        return;
      }

      const lighthouseSimulation = localStorage.getItem('lighthouse-simulation');
      if (lighthouseSimulation === 'true') {
        setIsLighthouse(true);
      }
    } catch (e) {}
  }, []);

  const handleScrollPosition = useCallback(
    ([curTop, oldTop]) => {
      if (!refHeader || !headerHiding) return;

      if (typeof window !== 'undefined' && window.innerWidth >= 1170) {
        refHeader.current.style.top = `0px`;
        return;
      }

      let top = curTop > oldTop ? -curTop : 0;

      if (top <= -70) top = -70;
      else if (top > 0) top = 0;

      refHeader.current.style.top = `${top}px`;
    },
    [headerHiding]
  );

  const handleToggle = useCallback(() => {
    setNavToggle(!navToggle);
  }, [navToggle]);

  const toggleSearch = useCallback(() => {
    if (!searchFormActive && navToggle) {
      setNavToggle(false);
    }

    dispatch(setMain({ searchFormActive: !searchFormActive }));
  }, [searchFormActive, navToggle]);

  const openModalNewsletter = useCallback(() => {
    dispatch(setMain({ modalNewsletter: true }));
  }, []);

  const cancelToggle = () => {
    setNavToggle(false);
  };

  useEffect(() => {
    handleScrollPosition(scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      scrollBarRef.current &&
      window.innerWidth < 1170
    ) {
      scrollBarRef.current.unMount();
    }
  }, []);

  return (
    <Container ref={refHeader} id='header-menu-container'>
      <ZohoFixWhatsModal />
      <SimpleBar style={{ maxHeight: '100%' }} ref={scrollBarRef}>
        <Wrapper>
          <AxpeLogo type="axpe" id='header-logo'>
            <Link href="/" passHref>
              <LogoLink onClick={cancelToggle}>
                <SVG src={AxpeFullLogoSVG} uniquifyIDs />
              </LogoLink>
            </Link>
          </AxpeLogo>

          <ButtonSearch onClick={toggleSearch}>
            Buscar Imóvel
            <img src={SearchIconSVG} alt='Ícone de lupa'/>
          </ButtonSearch>

          <ButtonToggle onClick={handleToggle} navToggle={navToggle}>
            <i></i><i></i><i></i>
          </ButtonToggle>

          <Box navToggle={navToggle}>
            <NavMain>
              <ul>
                <li>
                  <NavMainButtonSearch
                    active={searchFormActive}
                    onClick={toggleSearch}
                  >
                    <SVG src={SearchIconSVG} uniquifyIDs />
                    <NavMainButtonText>Buscar imóvel</NavMainButtonText>
                  </NavMainButtonSearch>
                </li>

                <li>
                  <Link href="https://wa.me/5511932062653" passHref>
                    <NavMainButton onClick={cancelToggle}>
                      <SVG src={HomeIconSVG} uniquifyIDs />
                      <NavMainButtonText>Vender imóvel</NavMainButtonText>
                    </NavMainButton>
                  </Link>
                </li>

                <li>
                  <Link href="/so-quero-sonhar" passHref>
                    <NavMainButton onClick={cancelToggle}>
                      <SVG src={CloudIconSVG} uniquifyIDs />
                      <NavMainButtonText>Só quero sonhar</NavMainButtonText>
                    </NavMainButton>
                  </Link>
                </li>

                <li>
                  <Link href="/lista-de-favoritos" passHref>
                    <NavMainButton
                      className={`favoritos-menu-item ${listId ? 'active' : ''}`}
                      onClick={cancelToggle}
                    >
                      <SVG src={FavoriteOutlineIcon} uniquifyIDs />
                      <SVG src={FavoriteFillIcon} uniquifyIDs />
                      <NavMainButtonText>LISTA DE FAVORITOS</NavMainButtonText>
                    </NavMainButton>
                  </Link>
                </li>
              </ul>
            </NavMain>

            <NavBottomContainer>
              <NavSecondary>
                <ul>
                  <li>
                    <Link href="/sobre" passHref>
                      <NavSecondaryButton onClick={cancelToggle}>
                        Sobre a Axpe
                      </NavSecondaryButton>
                    </Link>
                  </li>
                </ul>
              </NavSecondary>

              <Socials>
                <SocialButton href="https://api.whatsapp.com/send/?phone=5511932062653" target="_blank">
                  <SVG src={WhatsappIconSVG} uniquifyIDs />
                </SocialButton>

                <SocialButton href="https://instagram.com/axpe_imoveis" target="_blank">
                  <SVG src={InstagramIconSVG} uniquifyIDs />
                </SocialButton>
              </Socials>

              <Newsletter>
                <NewsletterButton onClick={openModalNewsletter}>
                  Receba nossas novidades
                </NewsletterButton>
              </Newsletter>

              <Link href="/trabalhe-conosco" passHref>
                <NewsletterButton onClick={cancelToggle}>
                  Trabalhe conosco
                </NewsletterButton>
              </Link>
            </NavBottomContainer>
          </Box>
        </Wrapper>
      </SimpleBar>
    </Container>
  );
}

export default Header;