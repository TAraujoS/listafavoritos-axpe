"use client";

import React, { useEffect, useState } from "react";

// styles

import NewsletterFooter from "components/NewsletterFooter";

// modal styles

import {
  ModalButton,
  ModalContainer,
  ModalForm,
  ModalInput,
  ModalOverlay,
  ModalText,
  ModalTitle,
} from "../../src/pages/ListaFavoritos/EmailModal.styles";
import FavoriteListForm from "pages/Favorites/FavoriteListForm";
import {
  FavoriteHeader,
  FavoriteHeaderTitle,
} from "pages/ListaFavoritos/MinhaLista/styles";

// 🔥 Modal component
const EmailModal = ({ onSave }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    localStorage.setItem("userEmail", email);
    onSave(email);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>Informe seu email</ModalTitle>

        <ModalText>Para continuar, é necessário adicionar seu email.</ModalText>

        <ModalForm onSubmit={handleSubmit}>
          <ModalInput
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <ModalButton type="submit" disabled={!email.trim()}>
            CONTINUAR
          </ModalButton>
        </ModalForm>
      </ModalContainer>
    </ModalOverlay>
  );
};

const FavoriteList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async (emailParam) => {
    try {
      setLoading(true);

      const email = encodeURIComponent(emailParam);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/favorites/lists/user/${email}`,
      );

      if (!res.ok) {
        throw new Error(`Erro HTTP: ${res.status}`);
      }

      const json = await res.json();

      if (json?.success && json?.data?.user) {
        const rawData = json.data;

        const normalizedData = {
          ...rawData,
          lists: Array.isArray(rawData.lists)
            ? rawData.lists.slice(0, 1)
            : rawData.lists
            ? [rawData.lists]
            : [],
        };

        setData(normalizedData);

        localStorage.setItem("userEmail", rawData.user.email);
      }
    } catch (error) {
      console.error("Erro ao buscar favoritos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");

    if (!storedEmail) {
      setShowModal(true);
      setLoading(false);
      return;
    }

    fetchData(storedEmail);
  }, []);

  const handleEmailSave = (email) => {
    setShowModal(false);
    fetchData(email);
  };

  return (
    <div className="my-favorite-list">
      {showModal && <EmailModal onSave={handleEmailSave} />}

      <FavoriteHeader>
        <FavoriteHeaderTitle>Lista de Favoritos</FavoriteHeaderTitle>
      </FavoriteHeader>

      <FavoriteListForm data={data} />

      <NewsletterFooter />
    </div>
  );
};

export default FavoriteList;
