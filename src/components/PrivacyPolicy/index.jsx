import React from 'react';

// components
import LegalTextBox from 'components/LegalTextBox';

function PrivacyPolicy({ onDemand, active, onClose }) {
  return (
    <LegalTextBox
      onDemand={onDemand}
      active={active}
      onClose={onClose}
      title={
        <>
          <strong>Política de</strong> privacidade
        </>
      }
      content={
        <>
          <p>
            A presente Política de Privacidade se aplica a todas as mídias
            controladas pela Axpe Negócios Imobiliários Ltda. (“Axpe”),
            incluindo o website{' '}
            <a href="https://www.axpe.com.br">www.axpe.com.br</a>, e a todos os
            websites e aplicativos onde esta Política estiver publicada (“Mídias
            Digitais”).{' '}
          </p>

          <p>
            Ao utilizar mídias controladas pela Axpe, você concorda com os
            termos e condições desta Política de Privacidade e com o tratamento
            de Dados Pessoais conforme abaixo especificado. Se você não
            concordar com os termos e condições desta Política de Privacidade,
            por favor, não use as mídias controladas pela Axpe.
          </p>

          <p>
            Nossas mídias podem conter links para websites ou mídias de
            terceiros, aos quais não se aplica a presente Política de
            Privacidade e pelos quais a Axpe não se responsabiliza.
          </p>

          <h2>1. Encarregado de Dados</h2>

          <p>O Encarregado de Dados da Axpe é o Sr. Martim Cazarin.</p>

          <p>
            Nosso Encarregado de Dados pode ser contatado por meio do endereço
            de e-mail dpo@axpe.com.br ou do endereço postal: Avenida Nove de
            Julho 5017, 10º andar, Jardim Paulista, São Paulo – SP, CEP
            01407-200.
          </p>

          <h2>2. Quais informações coletamos e de que forma?</h2>

          <p>
            Ao interagir com as mídias controladas pela Axpe, você nos fornece
            Dados Pessoais que possibilitam a realização de nossas atividades. A
            recusa em fornecer seus Dados Pessoais pode impactar a sua
            experiência em nossas mídias e inviabilizar a prestação de nossos
            serviços.
          </p>

          <p>
            Aqui estão alguns exemplos de situações em que podemos coletar seus
            Dados Pessoais:
          </p>

          <ul>
            <li>
              Ao se cadastrar para anunciar um imóvel ou preencher formulários
              presentes nas mídias da Axpe para obter informações sobre um
              imóvel anunciado, você fornece dados de identificação e contato,
              como nome e e-mail;
            </li>
            <li>
              Ao oferecer uma proposta a um imóvel anunciado pela Axpe, você
              fornece dados de identificação e contato, como nome, CPF, cópias
              de documentos de identificação, endereço, telefone e e-mail, além
              de informações sobre seu fiador, se for o caso;
            </li>
            <li>
              Ao alugar um imóvel anunciado pela Axpe, você fornece dados de
              identificação, contato e renda, como nome, CPF, cópias de
              documentos de identidade, telefone, e-mail e comprovante de renda,
              além de informações sobre seu fiador, se for o caso;
            </li>
            <li>
              Ao interagir com nossas mídias digitais, você fornece informações
              técnicas, como número do IP de acesso, sistema operacional, data e
              horário do acesso, navegador utilizado e páginas visualizadas;
            </li>
            <li>
              Ao se inscrever para participar de eventos promovidos pela Axpe,
              você fornece dados de identificação e dados de contato, como nome,
              CPF, telefone e e-mail, bem como poderá fornecer informações de
              contato de terceiros interessados em adquirir um imóvel;{' '}
            </li>
            <li>
              Ao se cadastrar para receber nossas comunicações de marketing,
              você fornece informações de identificação e contato, como nome e
              e-mail, além de informações técnicas, como número do IP de acesso,
              sistema operacional data e hora do acesso, navegador utilizado e
              páginas visualizadas.
            </li>
          </ul>

          <p>
            Além disso, nossas Mídias Digitais podem utilizar arquivos de texto
            conhecidos como “cookies”, que armazenam informações em seu
            navegador com o intuito de fornecer uma experiência personalizada em
            nossas mídias digitais. Os “cookies” que a Axpe utiliza armazenam
            Dados Pessoais como e-mail e senha para facilitar seu acesso a
            mídias digitais em que você já esteja cadastrado. Caso não concorde
            com o uso de “cookies”, você pode gerenciar suas preferências nas
            configurações do seu navegador.
          </p>

          <p>
            Se você for colaborador, candidato a uma vaga de emprego na Axpe ou
            prestador de serviços, você nos fornece Dados Pessoais necessários à
            condução do processo seletivo, à manutenção da relação profissional
            existente entre você e a Axpe ou entre a Axpe e terceiros.{' '}
          </p>

          <p>
            Ao coletar Dados Pessoais de prestadores de serviços, colaboradores
            e candidatos, a Axpe informará a finalidade da coleta dos Dados
            Pessoais. Aqui estão alguns exemplos de situações em que podemos
            coletar Dados Pessoais de prestadores de serviços, colaboradores e
            candidatos:
          </p>

          <ul>
            <li>
              Ao se inscrever em um processo seletivo, você fornece dados de
              identificação e contato, como nome, e-mail e telefone, além de
              informações como histórico escolar e experiência profissional;{' '}
            </li>
            <li>
              Ao ser admitido, você fornece dados de identificação e contato,
              como nome, e-mail, endereço, telefone, além de dados bancários e
              informações sobre cônjuges e dependentes para fins de inclusão em
              benefícios;
            </li>
            <li>
              Ao representar um prestador de serviços ou parceiro comercial
              perante a Axpe, você fornece dados de identificação e contato,
              como nome, e-mail, endereço, telefone e outros dados pertinentes à
              prestação de serviços ou parceria específica;
            </li>
            <li>
              Ao acessar as instalações da Axpe, você fornece dados de
              identificação, como nome e número de identidade.
            </li>
          </ul>

          <p>
            A Axpe poderá, ainda, coletar Dados Pessoais de candidatos por meio
            de parceiros que prestam serviços de recrutamento e seleção.{' '}
          </p>

          <h2>3. Como nós usamos seus Dados Pessoais? </h2>

          <p>
            A Axpe poderá utilizar seus Dados Pessoais para as seguintes
            finalidades:
          </p>

          <ul>
            <li>Providenciar o anúncio de seu imóvel;</li>
            <li>Fornecer informações sobre um imóvel anunciado;</li>
            <li>
              Intermediar a negociação de aluguel ou venda de um imóvel
              anunciado;
            </li>
            <li>Responder a dúvidas e solicitações de clientes;</li>
            <li>Prestar atendimento aos clientes;</li>
            <li>Viabilizar a participação em eventos promovidos pela Axpe;</li>
            <li>Manter seus dados cadastrais atualizados;</li>
            <li>Otimizar o uso e a experiência do usuário em nossas mídias;</li>
            <li>Proteção ao crédito;</li>
            <li>Segurança física ou segurança da informação;</li>
            <li>Cumprir obrigações legais ou regulatórias;</li>
            <li>
              Constituir, defender ou exercer regularmente direitos em processos
              judiciais, administrativos ou arbitrais;
            </li>
            <li>Endereçamento de publicidade;</li>
            <li>Pesquisa e inteligência de mercado;</li>
            <li>Prevenção e investigação de atos criminosos;</li>
            <li>Pesquisa e desenvolvimento de produtos e serviços.</li>
          </ul>

          <p>
            Se você for prestador de serviços, colaborador ou candidato a uma
            vaga de emprego na Axpe, seus Dados Pessoais poderão ser utilizados
            para as seguintes finalidades:
          </p>

          <ul>
            <li>Admissão ou demissão de colaboradores;</li>
            <li>Condução de processos seletivos para novos colaboradores;</li>
            <li>Contratação de benefícios para colaboradores e dependentes;</li>
            <li>Processamento de folhas de pagamentos;</li>
            <li>Cumprir obrigações legais ou regulatórias;</li>
            <li>Garantia da segurança nas instalações da Axpe;</li>
            <li>Controle de acesso a informações confidenciais da Axpe;</li>
            <li>
              Exercício de funções necessárias à operação dos negócios da Axpe;
            </li>
            <li>
              Constituir, defender ou exercer regularmente direitos em processos
              judiciais, administrativos ou arbitrais.
            </li>
          </ul>

          <p>
            A Axpe adota todas as medidas técnicas e administrativas necessárias
            para garantir que seus Dados Pessoais somente serão acessados por
            pessoas autorizadas, cujas atividades são relacionadas à finalidade
            da coleta dos Dados Pessoais.
          </p>

          <h2>3.1. Utilização para fins de publicidade</h2>

          <p>
            A Axpe apenas realizará o tratamento de seus Dados Pessoais para
            fins de publicidade ou pesquisa de mercado com o seu consentimento,
            que será solicitado no momento da coleta dos Dados Pessoais, ou com
            base em legítimo interesse, quando houver relação comercial anterior
            entre o titular dos dados e a Axpe.
          </p>

          <p>
            Você poderá revogar o consentimento a qualquer tempo, por meio do
            endereço de e-mail{' '}
            <a href="mailto:dpo@axpe.com.br">dpo@axpe.com.br</a>. Por favor,
            note que a revogação do consentimento é efetiva apenas no futuro,
            não afetando o tratamento de Dados Pessoais realizado antes da
            revogação. Igualmente, você poderá se opor à utilização dos seus
            Dados Pessoais baseada em legítimo interesse, manifestando a opção
            opt-out (descadastrar), disponibilizada em todas as comunicações
            publicitárias da Axpe.{' '}
          </p>

          <h2>4. Dados Pessoais de crianças abaixo de 12 anos</h2>

          <p>
            Os serviços da Axpe não são voltados para pessoas abaixo de 12 anos.
            Se você tem menos de 12 anos, por favor, não tente se registrar nas
            mídias controladas pela Axpe ou nos enviar qualquer informação,
            inclusive Dados Pessoais.
          </p>

          <p>
            A coleta de Dados Pessoais de crianças abaixo de 12 anos somente
            ocorrerá quando o tratamento dos Dados Pessoais for necessário à
            execução de atividades cujas finalidades estejam previstas na
            presente Política de Privacidade e estará sujeita às regras da
            presente Política de Privacidade.
          </p>

          <p>
            Nas situações em que for necessário coletar Dados Pessoais de
            crianças abaixo de 12 anos, a coleta e o tratamento estarão
            condicionados à obtenção de consentimento de pelo menos um dos pais
            ou do responsável legal. O consentimento será fornecido para uma
            finalidade específica e poderá ser revogado a qualquer tempo, por
            meio do endereço de e-mail{' '}
            <a href="mailto:dpo@axpe.com.br">dpo@axpe.com.br</a>.
          </p>

          <p>
            Aqui estão alguns exemplos de situações em que podemos coletar Dados
            Pessoais de crianças abaixo de 12 anos nas mídias controladas pela
            Axpe:
          </p>

          <ul>
            <li>
              Ao incluir um dependente no plano de saúde, o colaborador
              responsável poderá consentir com a coleta de Dados Pessoais como
              nome e data de nascimento.
            </li>
          </ul>

          <h2>5. Com quem meus Dados Pessoais são compartilhados?</h2>

          <p>
            A Axpe não comercializa Dados Pessoais sob seu controle em nenhuma
            hipótese. Os Dados Pessoais somente serão compartilhados com
            terceiros se houver base legal para o compartilhamento e, em
            qualquer hipótese, para as finalidades previstas na presente
            Política de Privacidade.
          </p>

          <p>
            Se você é cliente da Axpe, seus Dados Pessoais poderão ser
            compartilhados nos seguintes casos:
          </p>

          <ul>
            <li>
              Com organizações que fazem análise de crédito, para viabilizar a
              realização de um contrato de aluguel;
            </li>
            <li>
              Com organizações que prestam serviços de tecnologia da informação,
              para otimizar seu uso e experiência em nossas mídias;
            </li>
            <li>
              Com organizações que prestam serviços de atendimento ao
              consumidor, para receber e processar suas solicitações;
            </li>
            <li>
              Com organizações que prestam serviços de marketing e publicidade,
              para envio de publicidade;
            </li>
            <li>
              Com organizações que prestam serviços de armazenamento em nuvem,
              para armazenamento de informações referentes à sua relação com a
              Axpe;
            </li>
            <li>
              Com parceiros comerciais da Axpe, para viabilizar a venda ou
              locação de um imóvel;
            </li>
            <li>
              Com seguradoras de incêndio ou de garantias, para realizar a
              contratação do seguro incêndio ou da garantia para conclusão do
              contrato de locação
            </li>
          </ul>

          <p>
            Se você for prestador de serviços, colaborador ou candidato a uma
            vaga de emprego na Axpe, seus Dados Pessoais poderão ser
            compartilhados nos seguintes casos:
          </p>

          <ul>
            <li>
              Com operadoras de planos de saúde e odontológico, para contratação
              e manutenção destes benefícios;
            </li>
            <li>
              Com organizações que prestam serviços de processamento de folhas
              de pagamentos, para cálculo e pagamento de salários e benefícios;
            </li>
            <li>
              Com fornecedoras de vale refeição, vale alimentação e vale
              transporte, para contratação e manutenção destes benefícios;
            </li>
            <li>
              Com organizações que prestam serviços de armazenamento em nuvem,
              para armazenamento de informações referentes à sua relação com a
              Axpe;
            </li>
            <li>
              Com clientes e parceiros comerciais, para fins de contato e
              identificação do profissional que irá fotografar o imóvel a ser
              anunciado;
            </li>
            <li>
              Com organizações que prestam serviços de contabilidade, para
              cálculo e pagamento de impostos;
            </li>
            <li>
              Com organizações que prestam serviços de processamento de folhas
              de pagamento, para cálculo de salários e benefícios
            </li>
          </ul>

          <p>
            A Axpe poderá, ainda, compartilhar Dados Pessoais em caso de ordem
            judicial ou determinação legal.
          </p>

          <h2>6. Meus Dados Pessoais serão transferidos para outros países?</h2>

          <p>
            Somente haverá transferência internacional de Dados Pessoais se a
            transferência for necessária à execução das atividades cujas
            finalidades foram mencionadas nesta Política de Privacidade. Neste
            caso, a Axpe exigirá que a transferência ocorra de acordo com os
            requisitos previstos na legislação nacional, bem como que o
            tratamento dos Dados Pessoais seja restrito às finalidades descritas
            nesta Política de Privacidade.
          </p>

          <h2>7. Por quanto tempo meus Dados Pessoais serão armazenados?</h2>

          <p>
            A Axpe adota medidas técnicas e administrativas razoáveis para
            garantir que seus Dados Pessoais não sejam armazenados por mais
            tempo que o necessário para atingir as finalidades descritas nesta
            Política de Privacidade ou por mais tempo que o permitido
            legalmente.
          </p>

          <p>
            Os Dados Pessoais fornecidos por clientes ou potenciais clientes
            para cadastro em Mídias Digitais controladas pela Axpe serão
            armazenados enquanto seu cadastro permanecer ativo.
          </p>

          <p>
            Se você for prestador de serviços ou colaborador da Axpe, seus Dados
            Pessoais serão armazenados enquanto a relação comercial e/ou
            trabalhista permanecer em vigor. Ao término do contrato de trabalho
            ou do contrato de prestação de serviços, seus Dados Pessoais serão
            armazenados durante o tempo exigido pela legislação aplicável.{' '}
          </p>

          <p>
            Se você tiver se candidatado a uma vaga de emprego na Axpe e não
            tiver sido selecionado, seus Dados Pessoais poderão ser armazenados
            por um período razoável após o término do processo seletivo do qual
            você participou, para fins de participação em novos processos
            seletivos. Se não concordar com o armazenamento de seus Dados
            Pessoais para esta finalidade, você pode nos informar por meio do
            endereço de e-mail{' '}
            <a href="mailto:dpo@axpe.com.br">dpo@axpe.com.br</a>.
          </p>

          <h2>
            8. Quais direitos eu possuo com relação aos meus Dados Pessoais?{' '}
          </h2>

          <p>
            Como titular de dados, você possui o direito de requerer a qualquer
            momento (i) a confirmação da existência de tratamento; (ii) o acesso
            aos dados; (iii) a correção ou atualização de dados; (iv) eliminação
            de dados após atingida a finalidade da coleta; (v) a portabilidade
            de dados a outro fornecedor de serviço ou produto; (vi) a eliminação
            de dados tratados com base em seu consentimento; (vii) informação
            acerca do compartilhamento de seus dados com terceiros; (viii)
            informação sobre a possibilidade de não fornecer consentimento e
            sobre as consequências da negativa; (ix) a revogação do
            consentimento; (x) revisão de decisões automatizadas que afetem seus
            interesses.
          </p>

          <p>
            Além disso, você possui o direito de se opor ao tratamento de seus
            Dados Pessoais caso entenda que este tratamento seja feito de forma
            irregular.
          </p>

          <p>
            Você pode exercer seus direitos por meio do endereço de e-mail{' '}
            <a href="mailto:dpo@axpe.com.br">dpo@axpe.com.br</a>.{' '}
          </p>

          <p>
            Você possui, ainda, o direito de apresentar uma reclamação perante a
            Autoridade Nacional de Proteção de Dados (ANPD).
          </p>

          <h2>9. Alterações nesta Política de Privacidade</h2>

          <p>
            A Axpe se reserva o direito de alterar esta Política de Privacidade
            de tempos em tempos, a seu exclusivo critério. Quando isso ocorrer,
            a data da última atualização na parte superior desta Política de
            Privacidade também será revista. Por este motivo, incentivamos você
            a consultar esta Política de Privacidade periodicamente.
          </p>

          <h2>10. Informações adicionais</h2>

          <p>
            Se você tiver qualquer dúvida sobre esta Política de Privacidade ou
            sobre a forma como seus Dados Pessoais são utilizados pela Axpe,
            entre em contato conosco por meio do endereço de e-mail{' '}
            <a href="mailto:dpo@axpe.com.br">dpo@axpe.com.br</a>.
          </p>
        </>
      }
    />
  );
}

export default PrivacyPolicy;
