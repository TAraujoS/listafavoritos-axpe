import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SVG from "react-inlinesvg";
import Image from "next/image";

// components
import Share from "components/Share";
import NewsletterFooter from "components/NewsletterFooter";

// assets
import FavoriteFillIcon from "assets/favorite-fill-icon.svg";
import ShareIconSVG from "assets/icons/share.svg";
import DeleteListIcon from "assets/delete-list.svg";
import EditIcon from "assets/icons/edit.svg";
import {
  FavoriteEditIcon,
  FavoriteHeader,
  FavoriteHeaderTitle,
  FavoriteHeaderTitleContainer,
  FavoriteListContainer,
  FavoriteListContext,
  FavoriteListHeaderTexts,
  FavoriteListName,
  FavoriteOptions,
  RemoveList,
  ShareButtonContainer,
} from "pages/ListaFavoritos/MinhaLista/styles";

// styles

const MyFavoriteList = () => {
  const router = useRouter();

  const [shareActive, setShareActive] = useState(false);
  const [listName, setListName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // 🔥 pega parâmetros da URL
  const { id, nome } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    localStorage.setItem("listId", id);

    if (nome) {
      setListName(decodeURIComponent(nome));
    }
  }, [router.isReady, id, nome]);

  const saveListName = useCallback((value) => {
    setListName(value);
    setIsEditing(false);
  }, []);

  const toggleShare = useCallback(() => {
    setShareActive((prev) => !prev);
  }, []);

  return (
    <>
      <div>
        <FavoriteHeader>
          <FavoriteHeaderTitle>
            <FavoriteHeaderTitleContainer>
              <SVG
                src={FavoriteFillIcon}
                className="search-component-favorite-fill-icon"
              />
              Minha lista de favoritos
            </FavoriteHeaderTitleContainer>
          </FavoriteHeaderTitle>

          <FavoriteOptions className="favorite-options">
            <ShareButtonContainer onClick={toggleShare}>
              Compartilhar lista
              <SVG src={ShareIconSVG} />
            </ShareButtonContainer>

            <RemoveList>
              Deletar
              <SVG src={DeleteListIcon} />
            </RemoveList>
          </FavoriteOptions>
        </FavoriteHeader>

        <FavoriteListContainer>
          <FavoriteHeaderTitleContainer>
            <SVG
              src={FavoriteFillIcon}
              className="search-component-favorite-fill-icon"
            />
            Minha lista de favoritos
          </FavoriteHeaderTitleContainer>
          <FavoriteOptions className="favorite-options">
            <ShareButtonContainer onClick={toggleShare}>
              Compartilhar lista
              <SVG src={ShareIconSVG} />
            </ShareButtonContainer>

            <RemoveList>
              Deletar
              <SVG src={DeleteListIcon} />
            </RemoveList>
          </FavoriteOptions>
          <FavoriteListHeaderTexts>
            {isEditing ? (
              <input
                autoFocus
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                onBlur={() => saveListName(listName)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveListName(listName);
                  }
                }}
              />
            ) : (
              <FavoriteListName>
                <p>{listName || "Minha lista"}</p>

                <FavoriteEditIcon onClick={() => setIsEditing(true)}>
                  <SVG src={EditIcon} />
                </FavoriteEditIcon>
              </FavoriteListName>
            )}

            <FavoriteOptions>
              <ShareButtonContainer onClick={toggleShare}>
                Compartilhar lista
                <SVG src={ShareIconSVG} />
              </ShareButtonContainer>

              <RemoveList>
                Deletar
                <SVG src={DeleteListIcon} />
              </RemoveList>
            </FavoriteOptions>

            <FavoriteListContext>
              Navegue pelo site e clique no coração laranja nos imóveis que
              gostar para adicioná-los. Você também pode compartilhar sua lista
              com quem quiser. Para acessar sua lista use o menu e clique em
              Lista de Favoritos.
            </FavoriteListContext>
          </FavoriteListHeaderTexts>

          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="static/bg-stores-image-mob.png"
            />
            <source
              media="(min-width: 769px)"
              srcSet="static/bg-stores-image.png"
            />
            <img
              src="static/bg-stores-image.png"
              alt="Background disabled stores"
              className="bg-store-image"
              style={{ width: "100%", height: "auto" }}
            />
          </picture>
        </FavoriteListContainer>
      </div>

      <Share
        active={shareActive}
        path={router.asPath}
        title={listName || "Minha lista de favoritos"}
        onClose={() => setShareActive(false)}
      />

      <NewsletterFooter />
    </>
  );
};

export default MyFavoriteList;
