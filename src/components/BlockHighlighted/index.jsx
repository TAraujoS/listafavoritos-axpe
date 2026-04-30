import React from 'react';
import { Container, HighlightedH1, HighlightedH4, Link } from './styles';

const ContactHome = () => (
  <>
    <HighlightedH4 type="contactHome">
      <span>Sem tempo </span>
      <strong>
        <span>para garimpar </span>
      </strong>
      <span>imóveis?</span>
    </HighlightedH4>
    <div>
      <p>
        Conte o que está buscando e deixe com a gente.
      </p>
      <Link
        className="holos-footer-whatsapp-contact"
        data-label="Fale com o corretor"
        href="https://api.whatsapp.com/send/?phone=5511932062653&text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
        fullWidth={true}
        target="_blank"
        passHref
        id="button-footer-whatsapp"
      >
        Fale com o corretor
      </Link>
    </div>
  </>
);

const Contact = () => (
  <>
    <HighlightedH1 type="contact">
      <strong>
        <span>Pergunte</span>
      </strong>
      <span>, sugira, peça um imóvel. Pode elogiar também. Ou reclamar.</span>
      <hr />
    </HighlightedH1>
  </>
);

const ContactWork = () => (
  <>
    <HighlightedH4 type="contactWork">
      <span>Gostaria de fazer parte da </span>
      <strong>
        <span>nossa equipe?</span>
      </strong>
    </HighlightedH4>
    <div>
      <p>
        Nosso ambiente de trabalho é profissional, informal e divertido. Tem
        tudo a ver com você?
      </p>
      <Link
        route="/trabalhe-conosco"
        className="holos-institutional-cta-workwithus"
        passHref
      >
        Trabalhe Conosco
      </Link>
    </div>
  </>
);

const NotFound = ({ query }) => {
  return (
    <>
      <HighlightedH4 type="notfound">
        <strong>
          <span>Não encontrou o </span>
        </strong>
        <span>que procura?</span>
      </HighlightedH4>

      <div>
        {query && query.ready_release === 'pronto' && (
          <p>
            Que tal um imóvel na planta? Como é o imóvel dos seus sonhos?
          </p>
        )}

        {query && query.ready_release === 'lancamento' && (
          <p>
            Que tal um imóvel na planta? Como é o imóvel dos seus sonhos?
          </p>
        )}

        {!query || !query.ready_release ? (
          <p>
            Temos imóveis recém-chegados que ainda não entraram no site. Como é o imóvel dos seus sonhos?
          </p>
        ) : null}

        <Link route="/imovel-dos-sonhos" passHref fullWidth={true}>
          Conte aqui
        </Link>
      </div>
    </>
  );
}

const Planta = ({ href = '', onClick }) => (
  <>
    <HighlightedH4 type="planta">
      <span>Veja as </span>
      <strong>
        <span>plantas</span>
      </strong>
    </HighlightedH4>
    <div>
      <p>Descubra se é o ideal para você</p>
      <Link
        href={href}
        type={!!onClick ? 'button' : ''}
        onClick={onClick}
        color="greenLight"
        target="_blank"
      >
        Quero ver
      </Link>
    </div>
  </>
);

const Landing = () => (
  <>
    <HighlightedH4 type="landing">
      <span>Por que não um </span>
      <strong>imóvel</strong> <strong>novo?</strong>
    </HighlightedH4>
    <div>
      <p>
        Na AxPe, você econtra aquele imóvel lindo onde cabem todos os sonhos.{' '}
        <br />
        Onde pode construir um refúgio, uma vida. Mas isso é só o começo.
      </p>
      <Link route="/contato" target="_blank">
        Entre em contato
      </Link>
    </div>
  </>
);

const Dream = () => (
  <>
    <HighlightedH4 type="dream">
      <span>Transforme</span>
      <span>seu sonho em</span>
      <strong>realidade</strong>
    </HighlightedH4>
    <HighlightedH4 type="dream">
      <p>
        Conte pra gente como é <br/>
        o imóvel dos seus sonhos <br/>
        e vamos encontrá-lo para você
      </p>
      <Link route="/imovel-dos-sonhos" target="_blank">
        Fale conosco
      </Link>
    </HighlightedH4>
  </>
);

const RegisterProperty = () => (
  <HighlightedH1 type="registerProperty">
    <strong>
      <span>Cadastre seu imóvel.</span>
    </strong>
    <br />
    <span> Com certeza tem alguém procurando por ele</span>
    <hr />
  </HighlightedH1>
);

const VisitedBuildings = () => (
  <HighlightedH1 type="visitedBuildings">
    <strong>
      <span>Imóveis que visitei</span>
    </strong>
    <hr />
  </HighlightedH1>
);

const RegisterPropertyTransform = () => (
  <>
    <HighlightedH1 type="registerPropertyTransform">
      <span>Transforme seu sonho em </span>
      <strong>
        <span>realidade</span>
      </strong>
    </HighlightedH1>
    <div>
      <p>
        Conte para a gente como é o imóvel dos seus sonho e valos encontrá-lo
        para você
      </p>
      <Link route="/contato">Fale Conosco</Link>
    </div>
  </>
);

const RegisterPropertyWhite = () => (
  <>
    <HighlightedH1 type="registerPropertyWhite">
      <span>
        Cadastre <strong>seu imóvel</strong>
      </span>
      <span> Com certeza tem alguém procurando por ele</span>
    </HighlightedH1>
  </>
);

export default function BlockHighlighted({ type, href, onClick, query, ...props }) {
  return (
    <Container type={type}>
      {type === 'contactHome' && <ContactHome />}
      {type === 'contact' && <Contact />}
      {type === 'notfound' && <NotFound query={query} />}
      {type === 'planta' && <Planta href={href} onClick={onClick} />}
      {type === 'contactWork' && <ContactWork />}
      {type === 'landing' && <Landing />}
      {type === 'dream' && <Dream />}
      {type === 'registerProperty' && <RegisterProperty {...props} />}
      {type === 'registerPropertyWhite' && <RegisterPropertyWhite />}
      {type === 'registerPropertyTransform' && <RegisterPropertyTransform />}
      {type === 'visitedBuildings' && <VisitedBuildings />}
    </Container>
  );
}
