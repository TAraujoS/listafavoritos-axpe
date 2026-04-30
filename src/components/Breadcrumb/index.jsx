import React from 'react';
import Router from 'next/router'

// assets
import IArrowOrange from 'assets/icons/arrow-prev-orange.svg';
import IArrowBlack from 'assets/icons/arrow-prev-green.svg';
import IHeartBlack from 'assets/icons/heart-black.svg';
import IHeartOrange from 'assets/icons/heart-orange.svg';

// styles
import {
  Container,
  InfoLeft,
  InfoRight,
  Reference,
  FavoriteMobile,
  FavoriteDesktop,
  BackMobile,
  BackDesktop,
  Category,
  Local,
  MoreInfo,
  NumberPhone
} from './styles';

export default function Breadcrumb({ category, local, reference, className }) {
  return (
    <Container className={className}>
      <InfoLeft>
        <BackDesktop onClick={() => Router.back()}>
          <img src={IArrowOrange} alt="Voltar" />
          <span>Voltar</span>
        </BackDesktop>
        <BackMobile onClick={() => Router.back()}>
          <img src={IArrowBlack} alt="Voltar" />
        </BackMobile>
        <div>
          <Category>{category}</Category>
          <Local>{local}</Local>
        </div>
      </InfoLeft>

      {reference && (
        <InfoRight>
          <Reference>Ref {reference}</Reference>
          <FavoriteMobile src={IHeartOrange} alt="Favoritos" />
          <FavoriteDesktop>
            <span>3</span>
            <img src={IHeartBlack} alt="Favoritos" />
          </FavoriteDesktop>
          <MoreInfo type="button">Mais Informações</MoreInfo>
          <NumberPhone color="orange" />
        </InfoRight>
      )}
    </Container>
  );
}
