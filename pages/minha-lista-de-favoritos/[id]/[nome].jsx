import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import SVG from "react-inlinesvg";

import Share from "components/Share";
import NewsletterFooter from "components/NewsletterFooter";
import BuildingList from "components/Building/List";

import FavoriteFillIcon from "assets/favoritos.svg";
import ShareIconSVG from "assets/icons/share.svg";
import DeleteListIcon from "assets/delete-list.svg";
import EditIcon from "assets/icons/edit.svg";

import {
  FavoriteHeader,
  FavoriteHeaderTitle,
  FavoriteHeaderTitleContainer,
  ShareButtonContainer,
  FavoriteOptions,
  RemoveList,
  FavoriteListName,
  FavoriteEditIcon,
  FavoriteListContainer,
  FavoriteListContext,
  FavoriteListHeaderTexts,
} from "pages/ListaFavoritos/MinhaLista/[id]/styles";

import { SimilarBuildings, SimilarBuildingsList } from "pages/Building/styles";

const MyFavoriteList = () => {
  const router = useRouter();
  const { id } = router.query;

  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [shareActive, setShareActive] = useState(false);
  const [listName, setListName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);
  const [dataReady, setDataReady] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const originalNameRef = useRef("");

  const getUserEmail = () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("userEmail");
  };

  const fetchListData = async (listId) => {
    try {
      setLoading(true);
      setDataReady(false);

      const [listRes, itemsRes] = await Promise.all([
        fetch(`${baseUrl}/favorites/lists/${listId}`),
        fetch(`${baseUrl}/favorites/lists/${listId}/items`),
      ]);

      const listJson = await listRes.json();
      const itemsJson = await itemsRes.json();

      // 🔥 LISTA
      if (listJson?.success && listJson?.data?.list) {
        const list = listJson.data.list;
        const name = list?.nome_da_lista || list?.name;

        setListName(name || "");
        originalNameRef.current = name || "";

        // 🔥 VERIFICA DONO
        const userEmail = getUserEmail();

        if (userEmail && list) {
          try {
            const userRes = await fetch(
              `${baseUrl}/favorites/lists/${list?.id}`,
            );

            const userJson = await userRes.json();
            const ownerEmail = userJson?.data?.user?.email;

            setIsOwner(ownerEmail === userEmail);
          } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            setIsOwner(false);
          }
        } else {
          setIsOwner(false);
        }
      }

      // 🔥 ITEMS
      if (itemsJson?.success) {
        const items = itemsJson.data || [];

        try {
          const buildings = await Promise.all(
            items.map(async (item) => {
              if (!item?.referencia) return null;

              const response = await fetch(
                `${baseUrl}/building/${item?.referencia}`,
              );

              const buildingJson = await response.json();
              return buildingJson?.building || null;
            }),
          );

          setItems(buildings.filter(Boolean));
        } catch (error) {
          console.error("Erro ao buscar buildings:", error);
          setItems([]);
        }
      }

      setDataReady(true);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!router.isReady || !id) return;

    if (typeof window !== "undefined") {
      localStorage.setItem("listId", id);
    }

    fetchListData(id);
  }, [router.isReady, id]);

  const updateListName = async (newName) => {
    try {
      const trimmed = newName.trim();
      if (!trimmed || trimmed === originalNameRef.current) return;

      setLoading(true);

      const res = await fetch(`${baseUrl}/favorites/lists/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome_da_lista: trimmed,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.message);

      originalNameRef.current = trimmed;
      setListName(trimmed);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    updateListName(listName);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsEditing(false);
      updateListName(listName);
    }
  };

  const handleDeleteList = async () => {
    try {
      if (!id) return;

      setLoading(true);

      const res = await fetch(`${baseUrl}/favorites/lists/${id}`, {
        method: "DELETE",
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.message);
      localStorage.removeItem("listId");
      router.push("/lista-de-favoritos");
    } catch (error) {
      console.error("Erro ao deletar lista:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleShare = useCallback(() => {
    setShareActive((prev) => !prev);
  }, []);

  if (!dataReady) {
    return <div style={{ padding: 20 }}>Carregando lista...</div>;
  }

  return (
    <>
      <div className="my-favorite-list">
        <FavoriteHeader>
          <FavoriteHeaderTitle>
            <FavoriteHeaderTitleContainer>
              <SVG src={FavoriteFillIcon} />
              <p>{listName || "Minha lista de favoritos"}</p>
            </FavoriteHeaderTitleContainer>
          </FavoriteHeaderTitle>

          <FavoriteOptions className="favorite-options">
            <ShareButtonContainer onClick={toggleShare}>
              Compartilhar lista
              <SVG src={ShareIconSVG} />
            </ShareButtonContainer>

            {isOwner && (
              <RemoveList onClick={handleDeleteList}>
                Deletar
                <SVG src={DeleteListIcon} />
              </RemoveList>
            )}
          </FavoriteOptions>
        </FavoriteHeader>

        <FavoriteListContainer>
          <FavoriteListHeaderTexts>
            {isEditing && isOwner ? (
              <input
                autoFocus
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <FavoriteListName>
                <p>{listName || "Minha lista"}</p>
                {isOwner && (
                  <FavoriteEditIcon onClick={() => setIsEditing(true)}>
                    <SVG src={EditIcon} />
                  </FavoriteEditIcon>
                )}
              </FavoriteListName>
            )}

            <FavoriteOptions className="favorite-options">
            <ShareButtonContainer onClick={toggleShare}>
              Compartilhar lista
              <SVG src={ShareIconSVG} />
            </ShareButtonContainer>

            {isOwner && (
              <RemoveList onClick={handleDeleteList}>
                Deletar
                <SVG src={DeleteListIcon} />
              </RemoveList>
            )}
          </FavoriteOptions>

            {items.length === 0 && (
              <FavoriteListContext>
                Navegue pelo site e clique no coração laranja nos imóveis que
                gostar para adicioná-los. Você também pode compartilhar sua lista
                com quem quiser. Para acessar sua lista use o menu e clique em
                Lista de Favoritos.
              </FavoriteListContext>
            )}
          </FavoriteListHeaderTexts>

          {items.length > 0 ? (
            <SimilarBuildings fullWidth className="similar-buildings">
              <SimilarBuildingsList>
                {items.map((item, index) => (
                  <BuildingList
                    layout="horizontal"
                    item={item}
                    page="building"
                    positionIndex={index + 1}
                    key={`building-${item?.id || index}`}
                  />
                ))}
              </SimilarBuildingsList>
            </SimilarBuildings>
          ) : <>
            <picture> 
              <source media="(max-width: 768px)" srcSet="/static/bg-stores-image-mob.png" /> 
              <source media="(min-width: 769px)" srcSet="/static/bg-stores-image.png" /> 
              <img src="/static/bg-stores-image.png" alt="Background disabled stores" className="bg-store-image" style={{ width: '100%', height: 'auto' }} /> 
            </picture>
          </>}
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
