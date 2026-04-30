// import React from 'react';
// import Head from 'next/head';

// // helpers
// import Link from 'next/link';
// import SeoData from 'helpers/seo';

// // styles
// import {
//   Container,
//   Wrapper,
//   Header,
//   List,
//   ListButton,
//   ListText,
//   ListImage
// } from 'pages/DreamBuilding/styles';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function DreamBuilding() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/');
  }, [ router ]);

  return null;
  
  // return (
  //   <>
  //     <Head>
  //       <title>{`Imóvel dos sonhos - ${SeoData.title}`}</title>
  //       <meta name="description" content={SeoData.description} />
  //     </Head>
  //     <Container>
  //       <Wrapper>
  //         <Header>
  //           <h2>Conte como é o imóvel <strong>dos seus sonhos</strong></h2>
  //           <p>Qual o perfil do imóvel que você deseja?</p>
  //         </Header>
  //         <List>
  //           <li>
  //             <Link href="/imovel-dos-sonhos/sao-paulo-comprar-residencial" passHref>
  //               <ListButton
  //                 className="holos-search-category-button"
  //                 data-showcase="Imóvel dos Sonhos"
  //                 data-label="Residenciais - São Paulo"
  //               >
  //                 <ListText>
  //                   <h3>Residenciais - São Paulo</h3>
  //                   <p>Prontos para morar</p>
  //                 </ListText>
  //                 <ListImage src="/static/dream-building/sao-paulo-comprar.jpg" alt="São Paulo - Comprar" />
  //               </ListButton>
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/imovel-dos-sonhos/sao-paulo-comprar-lancamentos" passHref>
  //               <ListButton
  //                 className="holos-search-category-button"
  //                 data-showcase="Imóvel dos Sonhos"
  //                 data-label="Lançamentos - São Paulo"
  //               >
  //                 <ListText>
  //                   <h3>Lançamentos - São Paulo</h3>
  //                   <p>Imóveis residenciais</p>
  //                 </ListText>
  //                 <ListImage src="/static/dream-building/sao-paulo-lancamentos.jpg" alt="São Paulo - Lançamentos" />
  //               </ListButton>
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/imovel-dos-sonhos/sao-paulo-alugar-residencial" passHref>
  //               <ListButton
  //                 className="holos-search-category-button"
  //                 data-showcase="Imóvel dos Sonhos"
  //                 data-label="Locação - São Paulo"
  //               >
  //                 <ListText>
  //                   <h3>Locação - São Paulo</h3>
  //                   <p>Imóveis residenciais</p>
  //                 </ListText>
  //                 <ListImage src="/static/dream-building/sao-paulo-alugar.jpg" alt="São Paulo - Alugar" />
  //               </ListButton>
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/imovel-dos-sonhos/sao-paulo-comerciais" passHref>
  //               <ListButton
  //                 className="holos-search-category-button"
  //                 data-showcase="Imóvel dos Sonhos"
  //                 data-label="Comerciais - São Paulo"
  //               >
  //                 <ListText>
  //                   <h3>Comerciais - São Paulo</h3>
  //                   <p>Alugar ou Comprar</p>
  //                 </ListText>
  //                 <ListImage src="/static/dream-building/sao-paulo-comerciais.jpg" alt="São Paulo - Comerciais" />
  //               </ListButton>
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/imovel-dos-sonhos/praia-campo" passHref>
  //               <ListButton
  //                 className="holos-search-category-button"
  //                 data-showcase="Imóvel dos Sonhos"
  //                 data-label="Praia e Campo"
  //               >
  //                 <ListText>
  //                   <h3>Praia e Campo</h3>
  //                   <p>Alugar ou Comprar</p>
  //                 </ListText>
  //                 <ListImage src="/static/dream-building/praia-e-campo.jpg" alt="Praia e Campo" />
  //               </ListButton>
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/imovel-dos-sonhos/internacional" passHref>
  //               <ListButton
  //                 className="holos-search-category-button"
  //                 data-showcase="Imóvel dos Sonhos"
  //                 data-label="Internacional"
  //               >
  //                 <ListText>
  //                   <h3>Internacional</h3>
  //                   <p>Comprar</p>
  //                 </ListText>
  //                 <ListImage src="/static/dream-building/internacional.jpg" alt="Internacional" />
  //               </ListButton>
  //             </Link>
  //           </li>
  //         </List>
  //       </Wrapper>
  //     </Container>
  //   </>
  // );
}

export default DreamBuilding;
