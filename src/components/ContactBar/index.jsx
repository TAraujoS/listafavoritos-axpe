import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Router, { useRouter } from 'next/router';
import FormElements from 'components/FormElements';
import { FormGroup } from 'components/FormElements/styles';
import SVG from 'react-inlinesvg';

// actions
import { setMain } from 'store/modules/main/actions';

// helpers
import { getParamsFromObject } from 'helpers/utils';

// assets
import ChatIconSVG from 'assets/icons/chat.svg';
import WhatsappWhiteIconSVG from 'assets/icons/whatsapp-white-icon.svg'

// styles
import {
  Container,
  Wrapper,
  LinkFloat,
  ButtonFloat,
  Form,
  FormGroupBasics,
  ButtonSubmit,
  Header,
  ButtonClose,
  Iframe,
  Column,
  ButtonQuickCall,
  FormGroupName,
  // ListButton
} from './styles';
import { getUTMs } from '../../helpers/cookieUtmParams';

const registrySchema = Yup.object().shape({
  Name_First: Yup.string().required('Informe seu nome'),
  Name_Last: Yup.string().required('Informe seu sobrenome'),
  Email: Yup.string().email().required('Informe um email válido'),
  PhoneNumber_countrycode: Yup.string().required('Informe seu Whatsapp'),
  // MultiLine: Yup.string().required('Deixe sua mensagem'),
  Dropdown3: Yup.string().oneOf([ 'Comprar', 'Vender' ], 'Selecione uma opção válida')
});

const formSuccessPageUrl = `${process.env.config.siteUrl}/forms/imovel/sucesso.html?back=https://www.axpe.com.br/`;

const DROPDOWN3_ITEMS = [
  { value: 'Comprar',  label: 'Comprar' },
  { value: 'Vender',   label: 'Vender' },
];

function ContactBar() {
  const [ isMounted, setIsMounted ] = useState(false);
  const router = useRouter();
  const refForm = useRef(null);
  const dispatch = useDispatch();
  const refIframe = useRef(null);
  const {
    currentBuilding,
    contactBarActive,
    contactBarForced,
    searchFunnel,
  } = useSelector((state) => state.main);
  const isDynamicBuildingRoute = router.pathname === '/[category]/[slug]';
  const [ isBuilding, setIsBuilding ] = useState(isDynamicBuildingRoute);
  const [ iframeUrl, setIframeUrl ] = useState(null);

  const {
      values,
      isSubmitting,
      touched,
      errors,
      handleChange,
      setTouched,
      validateForm,
      setFieldValue,
      resetForm
    } = useFormik({
      initialValues: {
       Name_First: '',
       Name_Last: '',
       Email: '',
       PhoneNumber_countrycode: '',
       MultiLine: '',
       Dropdown3: 'Comprar'
      },
      validationSchema: registrySchema,
      onSubmit: (values, { setSubmitting }) => {
        setSubmitting(false);
      },
    });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const iframes = [
    {
      source: 'praia-campo',
      finality: null,
      use: null,
      type: 'lancamento',
      src: '/forms/imovel/praiacampo-saopaulo-lancamentos.html',
    },
    {
      source: 'praia-campo',
      finality: 'aluguel',
      use: 'RESIDENCIAL',
      src: '/forms/imovel/locacao-praiacampo-residencial.html',
    },
    {
      source: 'sao-paulo',
      finality: 'aluguel',
      use: 'COMERCIAL',
      src: '/forms/imovel/locacao-saopaulo-comercial.html',
    },
    {
      source: 'sao-paulo',
      finality: 'aluguel',
      use: 'RESIDENCIAL',
      src: '/forms/imovel/locacao-saopaulo-residencial.html',
    },
    {
      source: 'internacional',
      finality: 'temporada',
      use: null,
      src: '/forms/imovel/temporada-internacional-residencial.html',
    },
    {
      source: 'praia-campo',
      finality: 'temporada',
      use: null,
      src: '/forms/imovel/temporada-praiacampo-residencial.html',
    },
    {
      source: 'internacional',
      finality: 'venda',
      use: null,
      type: 'lancamento',
      src: '/forms/imovel/venda-internacional-lancamentos.html',
    },
    {
      source: 'internacional',
      finality: 'venda',
      use: null,
      type: 'pronto',
      src: '/forms/imovel/venda-internacional-prontos.html',
    },
    {
      source: 'praia-campo',
      finality: 'venda',
      use: null,
      type: 'pronto',
      src: '/forms/imovel/venda-praiacampo-prontos.html',
    },
    {
      source: 'sao-paulo',
      finality: 'venda',
      use: 'COMERCIAL',
      type: 'lancamento',
      src: '/forms/imovel/venda-saopaulo-comercial-lancamentos.html',
    },
    {
      source: 'sao-paulo',
      finality: 'venda',
      use: 'COMERCIAL',
      type: 'pronto',
      src: '/forms/imovel/venda-saopaulo-comercial-prontos.html',
    },
    {
      source: 'sao-paulo',
      finality: 'venda',
      use: 'RESIDENCIAL',
      type: 'lancamento',
      src: '/forms/imovel/venda-saopaulo-residencial-lancamentos.html',
    },
    {
      source: 'sao-paulo',
      finality: 'venda',
      use: 'RESIDENCIAL',
      type: 'pronto',
      src: '/forms/imovel/venda-saopaulo-residencial-prontos.html',
    },
  ];

  // const handleWhatsapp = () => {
  //   const url = `https://wa.me/5511932062653?text=Olá, vim através do site, gostaria de falar com um corretor!`;
        
  //   window.open(url, '_blank');
  // }

  const clickContainer = useCallback(
    (event) => {
      const type = event.target.getAttribute('data-type');
      if (type && type == 'container') {
        event.preventDefault();
        toggleShow();
      }
    },
    [ contactBarActive ]
  );

  const toggleShow = () => {
    resetForm();
    dispatch(
      setMain({
        contactBarActive: !contactBarActive,
        contactBarForced: false,
      })
    );
  };

  function computeIframeUrl(building, searchFunnel, iframes) {
    if (!building || !iframes?.length) return null;
  
    const norm = (s) => String(s ?? '').toLowerCase().replace(/\s|_/g, '-');
  
    const baseList = searchFunnel?.finality
      ? iframes.filter(f => f.finality === searchFunnel.finality)
      : iframes;
  
      const scored = baseList.map((f) => {
        let score = 0;
        const bSource = norm(building.source);
        const fSource = norm(f.source);
      
        const isMatch =
          (fSource === bSource) ||
          (fSource === 'praia-campo' && [ 'praia', 'campo', 'montanha' ].includes(bSource)) ||
          (fSource === 'sao-paulo' && bSource === 'sao-paulo');
      
        if (isMatch) score += 10;
      
        if (f.type && f.type === building.type) score += 3;
      
        if (!searchFunnel?.finality) {
          if ((f.finality === 'venda' && building.values?.sell) ||
              (f.finality === 'aluguel' && building.values?.rent)) score += 2;
        }
      
        if (f.use && building.infos && f.use === building.infos.use) score += 1;
      
        return { f, score };
      }).filter(x => x.score >= 10)
  
    if (!scored.length) return null;
  
    const best = scored.sort((a, b) => b.score - a.score)[0].f;
  
    const areaUseful = building?.infos?.areaTotal ?? building?.infos?.areaUsefulStart ?? null;
    // console.log(building, '-----')
    const paramsObj = {
      type: building.type,
      reference: building.reference,
      category: building.category,
      source: building.source,
      region: building?.address?.region ?? null,
      local: building?.address?.local ?? null,
      areaUseful: Number.isFinite(Number(areaUseful)) ? parseInt(String(areaUseful), 10) : areaUseful,
      bedrooms: building?.infos?.bedrooms ?? building?.infos?.bedroomsStart ?? null,
      parking: building?.infos?.parking ?? building?.infos?.parkingStart ?? null,
      value: null,
      isExclusive: String(building.label?.isExclusive),
      rent: String(building.values?.rent || 0),
      sell: String(building.values?.sell || 0),
      hasSell: (building.values?.sell > 0 || building.values?.release > 0) ? 'true' : 'false',
      infoType: building.infos?.type || '',
      url: (typeof window !== 'undefined' ? window.location.href : ''),
      redirectUrl: `${process.env.config.siteUrl}/forms/imovel/sucesso.html`,
    };
  
    const srcLower = String(best.src).toLowerCase();
    paramsObj.value = srcLower.includes('locacao')
      ? building.values?.rent
      : srcLower.includes('lancamento')
        ? building.values?.release
        : building.values?.sell;
  
    const params = getParamsFromObject(paramsObj);
    const base = process.env.config?.siteUrl || (typeof window !== 'undefined' ? window.location.origin : '');
    return `${base}${best.src}${params}`;
  }

  useEffect(() => {
    if (currentBuilding) {
      const url = computeIframeUrl(currentBuilding, searchFunnel, iframes);
      setIframeUrl(url);
    } else {
      setIframeUrl(null);
    }
  
    setIsBuilding(
      router.pathname.startsWith('/[category]/[slug]') || (contactBarActive && contactBarForced)
    );
  }, [ router.pathname, currentBuilding, searchFunnel ]);

  useEffect(() => {
    if (refIframe.current && iframeUrl) {
      refIframe.current.onload = function() {
        const $iframe = this.contentWindow || this.contentDocument;

        if ($iframe.document) {
          const $contents = $iframe.document;

          const $btnClose = $contents.querySelector('.header__close');
          const $btnLogout = $contents.querySelector('.userinfo__btn');

          if ($btnClose) {
            $btnClose.addEventListener('click', (event) => {
              toggleShow();

              if (
                $btnClose.classList.contains('js-reset-iframe-url') &&
                refIframe.current
              ) {
                refIframe.current.setAttribute('src', iframeUrl);
              }
            });
          }

          if ($btnLogout) {
            $btnLogout.addEventListener('click', (event) => {
              toggleShow();
              Router.push('/logout');
            });
          }
        }
      };
    }
  }, [ refIframe.current, iframeUrl, contactBarActive ]);

  useEffect(() => {
    if (!refForm.current || !contactBarActive) return;
  
    const form = refForm.current;
  
    if (!form.dataset.baseAction) {
      form.dataset.baseAction = form.action;
    }
  
    const utms = getUTMs();
    const params = new URLSearchParams();
  
    Object.entries(utms).forEach(([ key, value ]) => {
      if (value) params.set(key, value);
    });
  
    const qs = params.toString();
    form.action = qs
      ? `${form.dataset.baseAction}${form.dataset.baseAction.includes('?') ? '&' : '?'}${qs}`
      : form.dataset.baseAction;
  }, [ contactBarActive ]);

  const pageUrl = 'http://www.axpe.com.br'+router.asPath;
  
  let message = `Olá, gostaria de saber mais sobre o imóvel {reference}{areaTotal}{areaUseful}{bedrooms}{parking}. `+ pageUrl;
  
  function normalizePhone(val, { allowPlus = true, maxDigits = 15 } = {}) {
    const s = String(val ?? '');
    let cleaned = s.replace(/[^\d+]/g, '');
    if (allowPlus) cleaned = cleaned.replace(/(?!^)\+/g, '');
    else cleaned = cleaned.replace(/\+/g, '');
    const hasPlus = allowPlus && cleaned.startsWith('+');
    const digits = cleaned.replace(/\D/g, '');
    const limited = digits.slice(0, maxDigits);
    return hasPlus ? `+${limited}` : limited;
  }

  if(isBuilding && currentBuilding) {
    message = message.replace('{reference}', currentBuilding.reference);
    message = message.replace('{areaTotal}', currentBuilding.infos.areaTotal ? ', com ' + currentBuilding.infos.areaTotal +' m²': '');
    message = message.replace('{areaUseful}', currentBuilding.infos.areaUsefulStart ? ', com ' +  currentBuilding.infos.areaUsefulStart + ' m²' : '');
    message = message.replace('{bedrooms}', currentBuilding.infos.bedrooms ? ', ' + currentBuilding.infos.bedrooms + (parseInt(currentBuilding.infos.bedrooms) > 1 ? ' quartos' : ' quarto') : '');
    message = message.replace('{parking}', currentBuilding.infos.parking ? ' e ' + currentBuilding.infos.parking + (parseInt(currentBuilding.infos.parking) > 1 ? ' vagas' : ' vaga') : '');
  }

  if (!isMounted) {
    return null;
  }

  return (
    <>
    {!isBuilding && (
      <>
        <LinkFloat
          className='holos-contact-float moreinfo-btn--whatsapp hidden'
          href={!isBuilding ? `https://wa.me/5511932062653` : `https://wa.me/5511932062653?text=${message}`}
          target='_blank'
          id='float-contactBar'
          >
          <SVG src={WhatsappWhiteIconSVG} aria-hidden="true"/>
          {isBuilding ? (
            <div>
              <span>Quer saber mais?</span>
              Fale com um corretor.
            </div>
          ) : (
            <div>Fale com um corretor</div>
          )}
        </LinkFloat>

        {/* Botão Mobile*/}
        <ButtonFloat
          className='holos-contact-float moreinfo-btn--whatsapp flex large:hidden'
          type='button'
          onClick={toggleShow}
          aria-label='Fale com um corretor'
          id='float-contactBar-mobile'
        >
          <SVG src={WhatsappWhiteIconSVG} aria-hidden="true"/>
          {isBuilding ? (
            <div>
              <span>Quer saber mais?</span>
              Fale com um corretor.
            </div>
          ) : (
            <div>Fale com um corretor</div>
          )}
        </ButtonFloat>
        
        {/* Botão Dekstop*/}
        <ButtonFloat
          className='holos-contact-float hidden large:flex'
          type='button'
          onClick={toggleShow}
          aria-label='Fale com um corretor'
          id='float-contactBar-desktop'
        >
          <SVG src={ChatIconSVG} aria-hidden="true"/>
          {isBuilding ? (
            <div>
              <span>Quer saber mais?</span>
              Fale com um corretor.
            </div>
          ) : (
            <div>Fale com um corretor</div>
          )}
        </ButtonFloat>
      </>
    )}

      {contactBarActive && (
        <Container onClick={clickContainer} data-type='container'>
          <Wrapper isHome={router.route === '/'}>
          {isBuilding ? (
            iframeUrl
              ? <Iframe ref={refIframe} src={iframeUrl} border='none' title={router.asPath} />
              : <div style={{ padding:'2rem', textAlign:'center' }}>Preparando formulário do imóvel…</div>
          ) : (
              <>
                <Header isBuilding={isBuilding}>
                  <ButtonClose
                    type='button'
                    onClick={toggleShow}
                    isBuilding={isBuilding}
                    className='holos-modal-close'
                    data-type={
                      router.route === '/imovel'
                        ? `Produto - Contato`
                        : `Contato`
                    }
                  >
                    Fechar
                  </ButtonClose>
                  <h3>
                    Quer comprar ou vender um imóvel?
                  </h3>
                </Header>
                <Column>
                  <p>Deixe seu contato para nosso time entrar em contato com você.</p>
                  <Form
                    ref={refForm}
                    action='https://forms.zohopublic.com/axpeimoveis1/form/SITECADASTROGERALDUPLICADOKAFNET/formperma/gVTD0_26LoVjtbtth-1Gf-7EVmNWkfExKUgVe27zY_M/htmlRecords/submit'
                    method='POST'
                    acceptCharset='UTF-8'
                    enctype='multipart/form-data'
                  >
                    <div className="utm-field" style={{ display: 'none' }}>
                      <input type="text" name="utm_source" value=""/>
                    </div>
                    <div className="utm-field" style={{ display: 'none' }}>
                      <input type="text" name="utm_medium" value=""/>
                    </div>
                    <div className="utm-field" style={{ display: 'none' }}>
                      <input type="text" name="utm_campaign" value=""/>
                    </div>
                    <div className="utm-field" style={{ display: 'none' }}>
                      <input type="text" name="utm_term" value=""/>
                    </div>
                    <div className="utm-field" style={{ display: 'none' }}>
                      <input type="text" name="utm_content" value=""/>
                    </div>
                    <div className="utm-field" style={{ display: 'none' }}>
                      <input type="text" name="utm_teste" value=""/>
                    </div>

                    {/* Origem Marketing */}
                    <input type="hidden" name="Dropdown" value="AXPE - SITE AXPE" />


                    <input type="hidden" name="zf_referrer_name" value="Form Contato Home" />
                    <input
                      type="hidden"
                      name="zf_redirect_url"
                      value={formSuccessPageUrl}
                    />
                    <input type="hidden" name="zc_gad" value="" />
                    <input type="checkbox" name="DecisionBox" defaultChecked hidden />
                    <input type="hidden" name="Radio" value="Novo Lead" />
                    <input type="checkbox" name="DecisionBox" defaultChecked hidden />
                    <FormGroup>
                      <FormGroupBasics>
                        <FormGroupName>
                          <FormGroup>
                            <FormElements
                              name='Name_First'
                              placeholder='Nome'
                              onChange={handleChange}
                              error={touched.Name_First && errors.Name_First}
                              value={values.Name_First}
                              elname="First"
                              className='holos-form-field'
                              data-label='Nome'
                            />
                          </FormGroup>
                          <FormGroup>
                            <FormElements
                              name="Name_Last"
                              placeholder="Sobrenome"
                              value={values.Name_Last}
                              error={touched.Name_Last && errors.Name_Last}
                              onChange={handleChange}
                              elname="Last"
                              className='holos-form-field'
                              data-label='Sobrenome'
                            />
                          </FormGroup>
                        </FormGroupName>
                     
                        <FormElements
                          type='email'
                          name='Email'
                          placeholder='Seu E-mail'
                          onChange={handleChange}
                          error={touched.Email && errors.Email}
                          value={values.Email}
                          className='holos-form-field'
                          data-label='E-mail pessoal'
                        />
                        <FormElements
                          type="text"
                          name="PhoneNumber_countrycode"
                          id="PhoneNumber_countrycode"
                          inputMode="tel"
                          pattern="^\+?[0-9\s()-]{7,20}$"
                          autoComplete="tel"
                          maxLength={20}
                          placeholder="Seu WhatsApp"
                          value={values.PhoneNumber_countrycode}
                          onChange={handleChange}
                          error={touched.PhoneNumber_countrycode && errors.PhoneNumber_countrycode}
                        />
                        <FormElements
                          type="select"
                          name="Dropdown3"
                          label="Quer comprar ou vender imóvel?"
                          items={DROPDOWN3_ITEMS}
                          value={values.Dropdown3}
                          onChange={handleChange}
                          error={touched.Dropdown3 && errors.Dropdown3}
                          className="holos-form-field"
                          data-label="Funil"
                        />
                        <FormElements
                          type='area'
                          name='MultiLine'
                          placeholder='Deixe sua mensagem'
                          onChange={handleChange}
                          error={touched.MultiLine && errors.MultiLine}
                          value={values.MultiLine}
                          className='holos-form-field'
                          data-label='Mensagem sobre imóvel'
                        />
                       </FormGroupBasics>
                    </FormGroup>
                    <ButtonSubmit
                      type="button"
                      disabled={isSubmitting}
                      className="contact-form-submit"
                      onClick={async () => {
                        const formErrors = await validateForm();
                        const hasErrors = Object.keys(formErrors).length > 0;
                      
                        setTouched({
                          Name_First: true,
                          Name_Last: true,
                          Email: true,
                          PhoneNumber_countrycode: true,
                          Dropdown3: true,
                          MultiLine: true,
                        });
                
                        if (!hasErrors && refForm.current) {
                          const normalized = normalizePhone(values.PhoneNumber_countrycode, { allowPlus: true, maxDigits: 15 });
                          await setFieldValue('PhoneNumber_countrycode', normalized);
                          const input = refForm.current.querySelector('#PhoneNumber_countrycode');
                          
                          if (input) input.value = normalized;
                      
                          refForm.current.submit();

                          window.dataLayer.push({
                            'event': 'form_submit_fixo',
                            'form_name': formName,
                          });
                          
                          toggleShow();
                        }
                      }}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar formulário'}
                    </ButtonSubmit>
                      {/* <button className='contact-whatsapp-button-green' disabled={isSubmitting} onClick={handleWhatsapp}>
                        Whatsapp  <strong>(11) 93206-2653</strong>
                      </button> */}
                      <ButtonQuickCall>
                        <a href="tel:+551130743600" target="_blank" className="moreinfo-btn holos-product-contact-method" data-label="Telefone">
                            Telefone: <strong>(11) 3074-3600</strong>
                        </a>
                      </ButtonQuickCall>
                  </Form>
                </Column>
              </>
            )}
          </Wrapper>
        </Container>
      )}
    </>
  );
}

export default ContactBar;
