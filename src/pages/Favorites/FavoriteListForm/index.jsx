"use client";

import React, { useState, useEffect } from "react";
import FavoriteFillIcon from "assets/favorite-fill-icon.svg";
import SVG from "react-inlinesvg";
import { useRouter } from "next/router";

import { FavoriteSearchContainer } from "./styles";

const slugify = (text) => text?.toLowerCase().trim().replace(/\s+/g, "-");

const FavoriteListForm = ({ data }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const router = useRouter();

  console.log("Router: ", router);
  useEffect(() => {
    console.log("data", data);
    console.log("data?.list", data?.lists);

    if (data?.lists?.[0] && data?.lists[0]?.id) {
      const id = data.lists[0]?.id;
      const listName = data.lists[0].nome_da_lista || "lista";

      const slug = slugify(listName);
      console.log("slug", slug);
      router.push(`/minha-lista-de-favoritos/${id}/${slug}`);
    }
  }, [data, router]);

  // 🔥 GET lista existente
  const checkExistingList = async (email) => {
    try {
      const res = await fetch(
        `${baseUrl}/favorites/lists/user/${encodeURIComponent(email)}`,
      );

      const json = await res.json();

      if (!res.ok || !json?.success) return null;

      const lists = Array.isArray(json?.data?.lists)
        ? json.data.lists
        : json.data.lists
        ? [json.data.lists]
        : [];

      return lists.length > 0 ? lists[0] : null;
    } catch (err) {
      console.error("Erro ao buscar lista:", err);
      return null;
    }
  };

  // 🔥 POST criar lista
  const createList = async (email, name) => {
    const res = await fetch(`${baseUrl}/favorites/lists`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        nome_da_lista: name,
      }),
    });

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json?.message || "Erro ao criar lista");
    }

    return json?.data?.list;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    try {
      setLoading(true);

      const email = data?.user?.email;

      if (!email) {
        console.error("Email não encontrado");
        return;
      }

      // 🔥 verifica existência
      const existingList = await checkExistingList(email);

      if (existingList) {
        const id = existingList.id;
        const listName = existingList.nome_da_lista || "lista";

        const slug = slugify(listName);

        router.push(`/minha-lista-de-favoritos/${id}/${slug}`);
        return;
      }

      // 🔥 cria lista
      const list = await createList(email, name);

      const listId = list?.id;
      const slug = slugify(name);

      router.push(`/minha-lista-de-favoritos/${listId}/${slug}`);
    } catch (error) {
      console.error("Erro ao criar lista:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FavoriteSearchContainer>
      <SVG
        src={FavoriteFillIcon}
        className="search-component-favorite-fill-icon"
      />

      <h4 className="search-component-favorite-title">
        Sua lista de favoritos está esperando por você
      </h4>

      <form onSubmit={handleSubmit} className="search-component-favorite-form">
        <label className="search-component-favorite-label">
          Comece dando um nome a ela
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Minha lista de desejos"
          className="search-component-favorite-input"
        />

        <button
          type="submit"
          disabled={!name.trim() || loading}
          className="search-component-favorite-submit-button"
        >
          {loading ? "SALVANDO..." : "SALVAR"}
        </button>
      </form>
    </FavoriteSearchContainer>
  );
};

export default FavoriteListForm;
