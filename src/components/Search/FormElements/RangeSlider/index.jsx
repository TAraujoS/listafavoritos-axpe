import React, { useRef, useState, useEffect } from 'react';
// import noUiSlider from 'nouislider';

// styles
import {
  Container,
  // Slider,
  InputGroup,
  StyledInput,
  InputLabel,
  ButtonGroup,
  RangeButton,
  InputWrapper,
  PrefixSpan,
  SuffixSpan
} from './styles';

function RangeSlider({
  data,
  type,
  finality,
  suffix = '',
  prefix = '',
  sep = '-',
  step = 100,
  onChange,
}) {
  // const ref = useRef(null);
  const sliderApi = useRef(null);
  const [ values, setValues ] = useState({ first: '', last: '' });
  const [ visualFirst, setVisualFirst ] = useState('');
  const [ visualLast, setVisualLast ] = useState('');
  const [ selectedButton, setSelectedButton ] = useState(null);
  const to = data?.[1];
  const formatNumberOnlyDigits = (value) => {
    const numericValue = String(value).replace(/\D/g, '');
    if (!numericValue) return '';
    
    return new Intl.NumberFormat('pt-BR', {
      useGrouping: true,
    }).format(BigInt(numericValue));
  };
  
  function formatAreaInput(value) {
    return String(Number(value || 0));
  }

  function saveValues(params) {
    const [ first, last ] = params.map(val => parseInt(val));
    setValues({ first, last });
    setVisualFirst(type === 'prices' ? formatNumberOnlyDigits(first) : formatAreaInput(first));
    setVisualLast(type === 'prices' ? formatNumberOnlyDigits(last) : formatAreaInput(last));
  }

  // Desabilitado slider
  // function renderSlider() {
  //   if (!data || type === 'others') return;

  //   if (sliderApi.current) {
  //     sliderApi.current.destroy();
  //   }

  //   const range = {
  //     min: data[0],
  //     max: data[1],
  //   };

  //   sliderApi.current = noUiSlider.create(ref.current, {
  //     start: data,
  //     connect: true,
  //     format: {
  //       to: value => parseInt(value),
  //       from: value => parseInt(value.replace(',-', '')),
  //     },
  //     step,
  //     range,
  //   });

  //   if (sliderApi.current) {
  //     sliderApi.current.on('update', saveValues);
  //     sliderApi.current.on('end', params => onChange([ params[0], params[1] ]));
  //   }
  // }

  const handleBlur = (index) => {
    const visual = index === 0 ? visualFirst : visualLast;
    let parsed = parseInt(visual.replace(/\D/g, ''));

    if (isNaN(parsed)) return;

    const min = type === 'area' ? data?.[0] || 50 : (finality === 'venda' ? data?.[0] || 2000000 : 10000);
    const max = type === 'area' ? data?.[1] || 2000 : (finality === 'venda' ? data?.[1] || 20000000 : 30000);

    parsed = Math.max(min, Math.min(parsed, max));

    const newValues = {
      first: index === 0 ? parsed : values.first,
      last: index === 1 ? parsed : values.last,
    };

    if (newValues.first > newValues.last) {
      if (index === 0) newValues.last = parsed;
      else newValues.first = parsed;
    }

    setValues(newValues);
    setVisualFirst(type === 'prices' ? formatNumberOnlyDigits(newValues.first) : formatAreaInput(newValues.first));
    setVisualLast(type === 'prices' ? formatNumberOnlyDigits(newValues.last) : formatAreaInput(newValues.last));
    
    if (sliderApi.current) sliderApi.current.set([ newValues.first, newValues.last ]);

    onChange([ newValues.first, newValues.last ]);
  };

  useEffect(() => {
   if (type !== 'others') {
      saveValues(data);
      // renderSlider();
    }
  }, [ data ]);

  const handleButtonClick = (value) => {
    setSelectedButton(value);
    onChange([ value, to ]);
  };

  return (
    <Container>
      {type === 'others' ? (
        <ButtonGroup>
          {[ 1, 2, 3, 4, 5, 6 ].map((num) => (
            <RangeButton
              key={num}
              active={selectedButton === num}
              onClick={() => handleButtonClick(num)}
              type='button'
            >
              {num}+
            </RangeButton>
          ))}
        </ButtonGroup>
      ) : (
        <>
          {/* <Slider ref={ref}></Slider> */}
          {values && (
            <InputGroup>
            <div>
              <InputWrapper>
                {prefix && <PrefixSpan>{prefix}</PrefixSpan>}
                <StyledInput
                  value={visualFirst}
                  onChange={(e) => {
                    const masked = formatNumberOnlyDigits(e.target.value);
                    setVisualFirst(masked);
                  }}
                  onBlur={() => handleBlur(0)}
                  type="text"
                  inputMode="numeric"
                />
                {suffix && <SuffixSpan>{suffix}</SuffixSpan>}
              </InputWrapper>
              <InputLabel>Mínimo</InputLabel>
            </div>
              <div>
                <InputWrapper>
                  {prefix && <PrefixSpan>{prefix}</PrefixSpan>}
                  <StyledInput
                    value={visualLast}
                    onChange={(e) => {
                      const masked = formatNumberOnlyDigits(e.target.value);
                      setVisualLast(masked);
                    }}
                    onBlur={() => handleBlur(1)}
                    type="text"
                    inputMode="numeric"
                  />
                  {suffix && <SuffixSpan>{suffix}</SuffixSpan>}
                </InputWrapper>
                <InputLabel className="right">Máximo</InputLabel>
              </div>
            </InputGroup>
          )}
        </>
      )}
    </Container>
  );
}

export default RangeSlider;
