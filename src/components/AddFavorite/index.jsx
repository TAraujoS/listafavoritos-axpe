import React, { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'

import FavoriteOutlineIcon from 'assets/favorite-outline-icon.svg'
import FavoriteFillIcon from 'assets/favorite-fill-icon.svg'

import {
  ToastContainer,
  ToastWrapper,
  ToastContent,
  ToastLink,
  ToastClose
} from './styles'

const AddFavorite = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const baseUrl = process.env.config?.apiUrl;

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        let listId = localStorage.getItem("listId")
        const email = localStorage.getItem("userEmail")

        if (!listId && email) {
          const res = await fetch(
            `${baseUrl}/api/favorites/lists/user/${email}`
          )

          const json = await res.json()

          listId = json?.data?.lists?.[0]?.id

          if (listId) {
            localStorage.setItem("listId", listId)
          }
        }

        if (!listId) return

        const res = await fetch(
          `${baseUrl}/api/favorites/lists/${listId}`
        )

        const json = await res.json()

        const imoveis = json?.data?.imoveis || []

        const exists = imoveis.some(
          (item) => Number(item.id_imovel) === Number(id)
        )

        setIsFavorite(exists)
      } catch (err) {}
    }

    checkFavorite()
  }, [id])

  const handleToggleFavorite = async () => {
    let listId = localStorage.getItem("listId")
    const email = localStorage.getItem("userEmail")

    if (!listId) {
      const res = await fetch(
        `${baseUrl}/api/favorites/lists/user/${email}`
      )

      const json = await res.json()

      listId = json?.data?.lists?.[0]?.id

      if (listId) {
        localStorage.setItem("listId", listId)
      }
    }

    try {
      const payload = {
        id_lista: listId,
        id_imovel: id
      }

      let response

      if (isFavorite) {
        response = await fetch(
          `${baseUrl}/api/favorites/items`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          }
        )
      } else {
        response = await fetch(
          `${baseUrl}/api/favorites/items`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          }
        )
      }

      const data = await response.json()

      if (!response.ok) return

      setIsFavorite((prev) => !prev)
      setShowToast(true)
    } catch (error) {}
  }

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showToast])

  const Icon = () => (
    <SVG
      src={isFavorite ? FavoriteFillIcon : FavoriteOutlineIcon}
      className={
        isFavorite
          ? 'search-component-favorite-fill-icon'
          : 'search-component-favorite-outline-icon'
      }
    />
  )

  return (
    <>
      <div onClick={handleToggleFavorite} style={{ cursor: 'pointer' }}>
        <Icon />
      </div>

      {showToast && (
        <ToastContainer>
          <ToastWrapper>
            <ToastContent>
              <Icon />

              <p>
                {isFavorite
                  ? 'Imóvel adicionado aos favoritos'
                  : 'Imóvel removido dos favoritos'}
              </p>

              <ToastLink href="/lista-de-favoritos">
                Meus favoritos
              </ToastLink>
            </ToastContent>

            <ToastClose onClick={() => setShowToast(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 18.8407L18.5 5.15881" stroke="#3F5A5E" />
                <path d="M18.1953 19L4.49959 5" stroke="#3F5A5E" />
              </svg>
            </ToastClose>
          </ToastWrapper>
        </ToastContainer>
      )}
    </>
  )
}

export default AddFavorite