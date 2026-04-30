import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';


// helpers
import SeoData from 'helpers/seo';

// store
import { setMain } from 'store/modules/main/actions';

// styles
import {
  Container,
  Hero,
  Text,
  Block,
  BlockCol,
  BlockTitle,
} from 'pages/About/styles';

function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMain({ headerHiding: true }));
  }, []);

  return (
    <>
      <Head>
        <title>{`Sobre a Axpe - ${SeoData.title}`}</title>
        <meta name="description" content={SeoData.description} />
      </Head>
      <Container>
        <h1 className="sr-only">
          Sobre a Axpe
        </h1>
        <Hero id="nosso-jeito">
          <div>
            <p>Prazer, somos a <strong>Axpe.</strong></p>
            <span>Uma imobiliária com uma visão diferente do morar</span>
          </div>
        </Hero>

        <Block dataTemplate="1">
          <BlockCol dataType="text">
            <BlockTitle>
              Morar é <strong>Encontro</strong>
            </BlockTitle>
            <Text>
              <p>
                Mais do que vender imóveis, a Axpe significa o ato de morar. Desde 2002, construímos pontes entre pessoas e espaços com intenção, sensibilidade e curadoria. Atuamos em São Paulo, litoral, campo e montanha — e também em Portugal — criando encontros significativos entre estilos de vida e formas de habitar.
              </p>
            </Text>
          </BlockCol>
        </Block>

        <Block dataTemplate="1">
          <BlockCol dataType="text">
            <BlockTitle>
              Imóveis que refletem <strong>quem você é</strong>
            </BlockTitle>
            <Text>
              <p>
                Acreditamos que o imóvel certo muda tudo. Porque morar bem é mais do que localização ou metragem: é encontrar um lugar que conversa com quem você é, com o ritmo da sua vida e com o que importa para você. É por isso que, na Axpe, cada escolha é guiada por escuta, empatia e repertório.
              </p>
            </Text>
          </BlockCol>
        </Block>

        <Block dataTemplate="1">
          <BlockCol dataType="text">
            <BlockTitle>
              Como fazemos <strong>diferente</strong>
            </BlockTitle>
            <Text>
              <p>
              Nosso time é formado por experts em curadoria imobiliária, pessoas com visão de mercado, sensibilidade estética e uma habilidade rara: transformar busca em encontro. Combinamos tecnologia com tato, dados com intuição, eficiência com design. Cada detalhe é pensado com rigor, porque o detalhe é tudo.
              </p>
            </Text>
          </BlockCol>
        </Block>

        <Block dataTemplate="1">
          <BlockCol dataType="text">
            <BlockTitle>
              Nosso <strong>compromisso</strong>
            </BlockTitle>
            <Text>
              <p>
                Seja você comprador ou proprietário, nosso olhar é imparcial, transparente e sempre guiado pelo que é certo. Cumprimos as regras com clareza e ética. Valorizamos seu tempo, respeitamos seu investimento e atuamos com total responsabilidade sobre o que está em jogo.
              </p>
            </Text>
          </BlockCol>
        </Block>

        <Block dataTemplate="1">
          <BlockCol dataType="text">
            <BlockTitle>
              O que <br />
              <span>nos <strong>move</strong></span>
            </BlockTitle>
            <Text>
              <p>
              O imóvel que é sua alma gêmea está na Axpe. E vice-versa. Nosso trabalho é tornar esse encontro possível, com humanidade, presença e uma linguagem que valoriza o essencial. Atendemos tanto quem está em busca de um novo lugar para viver quanto quem deseja vender um imóvel que fez parte da sua história. Porque quando o lugar certo encontra a pessoa certa, tudo faz sentido.
              </p>
            </Text>
          </BlockCol>
        </Block>

        <Block dataTemplate="1">
          <BlockCol dataType="text">
            <BlockTitle isLast={true}>
              <strong>Por que </strong>{' '} Axpe?
            </BlockTitle>
            <Text>
              <p>
              Axpe é uma pequena aldeia no País Basco, Espanha. É um local especial onde a quietude é quebrada apenas pelo sininho das ovelhas no pasto. Em basco, Axpe (diz-se Aspe) significa “casa ao pé da pedra” em referência à montanha Anboto.
              </p>
            </Text>
          </BlockCol>
        </Block>
      </Container>
    </>
  );
}

export default About;
