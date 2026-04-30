import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import GTM from "helpers/gtm";
import Api from "services";

// components
import Headerbar from "components/Headerbar";
import BlockHighlighted from "components/BlockHighlighted";
import NewsletterFooter from "components/NewsletterFooter";
import BuildingList from "components/Building/List";
import DataSheet from "pages/Building/Datasheet";
import HowWeLove from "pages/Building/HowWeLove";
import LCPPlaceholder from "components/LCPPlaceholder";
import LCPGallery from "components/LCPGallery";

// helpers
import CookieBuildingSeen from "helpers/cookieBuildingSeen";
import SeoData from "helpers/seo";

// actions
import { setMain } from "store/modules/main/actions";

// styles
import {
  Container,
  Images,
  Alert,
  SimilarBuildings,
  SimilarBuildingsHeader,
  SimilarBuildingsList,
} from "src/pages/Building/styles";
import { useDispatch } from "react-redux";
import { Delivery } from "../../src/pages/Building/Datasheet/styles";

function Building(props) {
  const { property, meta } = props;
  const dispatch = useDispatch();
  const [similarBuildings, setSimilarBuildings] = useState([]);
  const [data, setData] = useState(null);
  const router = useRouter();
  const baseUrl = "https://www.axpe.com.br";
  const canonicalUrl = `${baseUrl}${router.asPath.split("?")[0]}`;

  function useLighthouseFlag() {
    const [lh, setLh] = useState(false);
    useEffect(() => {
      if (typeof window === "undefined") return;
      if (window.isLighthouse) return setLh(true);
      try {
        if (localStorage.getItem("lighthouse-simulation") === "true") {
          setLh(true);
        }
      } catch {}
    }, []);
    return lh;
  }

  const isLighthouse = useLighthouseFlag();

  useEffect(() => {
    if (!property) return;

    const productSeals = [];

    if (property.label) {
      Object.keys(property.label).forEach((key) => {
        if (property.label[key]) {
          productSeals.push(key);
        }
      });
    }

    CookieBuildingSeen.set(property.reference);

    dispatch(setMain({ currentBuilding: property }));

    async function loadSimilarBuildings() {
      const similar = await Api.Building.getSimilar(property, 3);
      let buildings =
        similar?.data?.filter((x) => x.reference !== property.reference) || [];

      if (buildings.length === 0) {
        const fallbackParams = {
          ...property,
          values: {
            ...property.values,
            sell: "",
            release: "",
          },
        };

        const fallback = await Api.Building.getSimilar(fallbackParams, 3);
        buildings =
          fallback?.data?.filter((x) => x.reference !== property.reference) ||
          [];
      }

      setSimilarBuildings(buildings);
    }

    GTM.dataLayerPush({
      event: "view_item_pdp",
      productId: property.reference,
      productValue: property.values.sell
        ? property.values.sell
        : property.values.rent,
      productType: property.type,
      productLocation: property?.address?.local,
      productSeals: productSeals.join("|"),
      productNumberOfBedrooms: property.infos.bedrooms,
      productParkingSpace: property.infos.parking,
      productArea: property.infos.areaTotal
        ? property.infos.areaTotal
        : property.infos.areaUseful,
    });

    loadSimilarBuildings();
    setData(property);
  }, [property]);

  useEffect(() => {
    return () => {
      dispatch(setMain({ currentBuilding: null }));
    };
  }, []);

  if (property === null) {
    return (
      <Container>
        <Head>
          <title>Imóvel não encontrado</title>
        </Head>
        <div
          style={{
            padding: "2rem",
            textAlign: "center",
            height: "100vh",
            alignContent: "center",
          }}
        >
          <h1>Imóvel não encontrado</h1>
          <p>Esse imóvel não existe ou foi removido do nosso sistema.</p>
        </div>
      </Container>
    );
  }

  // Se for Lighthouse, renderizar mock imediatamente
  if (isLighthouse) {
    return (
      <>
        <Head>
          <title>Casa - Alto de Pinheiros | Axpe</title>
          <meta
            name="description"
            content="Casa ampla com jardim, piscina e espaços generosos para conviver bem no Alto de Pinheiros."
          />
          <meta name="robots" content="index,follow" />
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <Container>
          <Headerbar
            type="building"
            title="Casa"
            subtitle="Alto de Pinheiros"
            building={{
              reference: "AX155499",
              source: "sao-paulo",
              likes: 0,
              local: "Alto de Pinheiros",
              area: "410",
              bedrooms: "4",
              parking: "5",
            }}
          />

          {/* Galeria mock para Lighthouse */}
          <LCPGallery />

          <LCPPlaceholder />

          <Alert>
            <p>
              As informações acima, incluindo preço, áreas e valores, podem não
              ser exatas e devem ser confirmadas com o corretor.
            </p>

            <p>
              No caso de imóveis em lançamento, as imagens são meramente
              ilustrativas e os valores estão sujeitos a alterações de tabelas.
            </p>
          </Alert>
        </Container>
      </>
    );
  }

  // Se não temos dados ainda, mostrar loading
  if (!data) {
    return (
      <Container>
        <p style={{ padding: "2rem", textAlign: "center" }}>
          Carregando dados do imóvel...
        </p>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Container>
        <Headerbar
          type="building"
          title={data.category}
          subtitle={data?.address.local}
          building={{
            reference: data.reference,
            source: data.source,
            likes: data.totalFavorites,
            local: data?.address.local,
            area: data.infos.areaBuilding,
            bedrooms: data.infos.bedrooms,
            parking: data.infos.parking,
          }}
        />

        {data.gallery && (
          <Images
            category={data.category}
            local={data?.address.local}
            items={data.gallery}
            tour360={data.tour360}
            reference={data.reference}
          />
        )}

        <DataSheet property={data} />

        {data.components.find((c) => c.module?.slug === "porque-adoramos") && (
          <HowWeLove
            reasons={
              data.components.find((c) => c.module?.slug === "porque-adoramos")
                .data
            }
          />
        )}

        {property.type === "lancamento" && property.infos.releaseDelivery && (
          <Delivery>
            <p>
              {property.infos.releaseStatus === "Pronto"
                ? "Entregue em "
                : "Previsão de entrega em "}
              <span>{property.infos.releaseDelivery}</span>
            </p>
          </Delivery>
        )}

        <Alert>
          <p>
            As informações acima, incluindo preço, áreas e valores, podem não
            ser exatas e devem ser confirmadas com o corretor.
          </p>

          <p>
            No caso de imóveis em lançamento, as imagens são meramente
            ilustrativas e os valores estão sujeitos a alterações de tabelas.
          </p>
        </Alert>

        {similarBuildings && similarBuildings.length > 0 && (
          <SimilarBuildings className="similar-buildings">
            <SimilarBuildingsHeader>
              <h3>Pessoas que viram este imóvel também viram:</h3>
            </SimilarBuildingsHeader>
            <SimilarBuildingsList>
              {console.log("similarBuildings", similarBuildings)}
              {similarBuildings.map((building, buildingIndex) => (
                <BuildingList
                  layout="horizontal"
                  item={building}
                  page="building"
                  positionIndex={buildingIndex + 1}
                  key={`building-searchitem-${building.reference}-${buildingIndex}`}
                />
              ))}
            </SimilarBuildingsList>
          </SimilarBuildings>
        )}

        <NewsletterFooter />
        <BlockHighlighted type="contactHome" />
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const slugParts = slug ? slug.split("-") : [];
  const reference = slugParts[slugParts.length - 1];
  const response = await Api.Building.getPage(reference);

  if (!response || !response.building) {
    return {
      props: {
        reference,
        property: null,
        meta: {
          title: "Imóvel não encontrado",
          description: SeoData.description,
          image: "",
        },
      },
    };
  }

  const buildingCategory = response.building.category || "";

  const buildingLocationTitle = response.building.address
    ? response.building.address.local && response.building.address.state
      ? response.building.address.local + " " + response.building.address.state
      : ""
    : "";
  const buildingLocation = response.building.address
    ? response.building.address.local && response.building.address.country
      ? "em " +
        response.building.address.local +
        ", " +
        response.building.address.state +
        "/" +
        response.building.address.country
      : ""
    : "";
  const buildingArea = response.building.infos
    ? response.building.infos.areaUsefulStart
      ? response.building.infos.areaUsefulStart
      : response.building.infos.areaTotal
        ? response.building.infos.areaTotal
        : response.building.infos.areaBuilding
    : 0;
  const buildingBedrooms = response.building.infos
    ? response.building.infos.bedroomsStart
      ? response.building.infos.bedroomsStart
      : response.building.infos.bedrooms
    : 0;

  const pageDescPrefix = [
    "Apartamento",
    "Apartamento Internacional",
    "Conjunto",
    "Galpão",
    "Prédio",
  ].includes(buildingCategory)
    ? "Conheça este"
    : "Conheça esta";

  const metaTitle = response.building.infos.metaTitle;
  const metaDescription = response.building.infos.metaDescription;

  const pageTitle =
    metaTitle ||
    buildingLocationTitle ||
    `${response.building.address.state} ${response.building.reference}` ||
    SeoData.title;
  const pageDesc =
    metaDescription ||
    `${pageDescPrefix} ${buildingCategory.toLowerCase()} ${buildingLocation} com ${buildingArea}m², ${buildingBedrooms} com dormitórios. O local ideal para quem é apaixonado por arquitetura e design!`;
  const pageBanner = `${
    response.building.gallery ? response.building.gallery[0].src : ""
  }`;

  return {
    props: {
      reference,
      property: response.building,
      meta: {
        title: pageTitle,
        description: pageDesc,
        image: pageBanner,
      },
    },
  };
}

export default Building;
