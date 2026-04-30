(function() {
  var $form = document.querySelector('.form');
  var pristine = new Pristine($form);
  var search = location.search.replace('?', '').split('&');
  var $buttons = document.querySelectorAll('.js-button-toggle');
  var $inputsControl = $form.querySelectorAll('.form-group__control');

  var $inputsMaskPhone = $form.querySelectorAll('.js-mask-phone');
  var pageUrl = null;
  var isFavorites = false;
  var message = `Olá, gostaria de saber mais sobre o imóvel {reference} - {local}, com {areaUseful} m², {bedrooms} e {parking}.`;

  var $firstNameInput = $form.querySelector('input[name="Name_First"]');
  var $lastNameInput = $form.querySelector('input[name="Name_Last"]');
  var $phoneInput = $form.querySelector('input[name="PhoneNumber_countrycode"]');
  var $submitButton = document.getElementById('submitBtn');

  var UTM_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content'
  ];
  
  UTM_KEYS.forEach(function(key) {
    try {
      var value = localStorage.getItem(key);
      if (!value) return;
  
      var field = $form.querySelector('input[name="' + key + '"]');
      if (field) {
        field.value = value;
        field.setAttribute('data-value-original', value);
      }
    } catch (e) {}
  });
  
  (function attachUtmToAction() {
    if (!$form || !$form.action) return;
  
    var params = new URLSearchParams();
  
    UTM_KEYS.forEach(function(key) {
      try {
        var value = localStorage.getItem(key);
        if (value) params.set(key, value);
      } catch (e) {}
    });
  
    var qs = params.toString();
    if (qs) {
      $form.action += ($form.action.indexOf('?') > -1 ? '&' : '?') + qs;
    }
  })();
  
  function validateAndToggleButton() {
    if (!$firstNameInput || !$lastNameInput || !$phoneInput || !$submitButton) {
      return;
    }

    var isFirstNameFilled = $firstNameInput.value.trim() !== '';
    var isLastNameFilled = $lastNameInput.value.trim() !== '';
    var isPhoneFilled = $phoneInput.value.trim() !== '';

    if (isFirstNameFilled && isLastNameFilled && isPhoneFilled) {
      $submitButton.disabled = false;
    } else {
      $submitButton.disabled = true;
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function asc(str) {
    return str.charCodeAt(0);
  }

  function chr(asciiNum) {
    return String.fromCharCode(asciiNum);
  }

  function encrypt(data) {
    var result = '';
    var l;
    var j = 0;
    var hash = 'assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm';

    for (var i = 0; i < data.length; i++) {
      j++;
      l = asc(data.substr(i, 1)) + asc(hash.substr(j, 1));

      if (j == 50) {
        j = 1;
      }

      if (l > 255) {
        l -= 256;
      }

      result += chr(l);
    }

    return result;
  }

  $buttons.forEach(($btn) => {
    $btn.addEventListener('click', clickButton);
  });

  if ($inputsControl.length) {
    $inputsControl.forEach(($input) => {
      $input.addEventListener('keyup', inputsControl);
    });
  }

  if ($inputsMaskPhone.length) {
    $inputsMaskPhone.forEach(($input) => {
      if (typeof IMask === 'function') {
        IMask($input, {
          mask: '(00) 00000-0000',
        });
      }
    });
  }

  if ($form.querySelector('input[name="Email"]')) {
    var $inputRedirectUrl = $form.querySelector(
      'input[data-element="redirectUrl"]'
    );
    var $inputCryptoId = $form.querySelector('input[data-element="cryptoId"]');
    var $inputAnonymousId = $form.querySelector('input[data-element="anonymousId"]');

    var redirectUrlBase = 
    'https://axpe.com.br/forms/imovel/sucesso.html';
  
    if ($inputRedirectUrl) {
      $inputRedirectUrl.value = redirectUrlBase;
    }

    $form
      .querySelector('input[name="Email"]')
      .addEventListener('keyup', function(event) {
        var $input = event.target;
        var value = $input.value;
        var redirectUrl = $inputRedirectUrl.getAttribute('data-value-original');

        $inputRedirectUrl.value = redirectUrlBase + '?email=' + value;

        if ($inputCryptoId) {
          $inputCryptoId.value = encrypt(value);
        }

        if ($inputAnonymousId) {
          $inputAnonymousId.value = localStorage.anonymousId;
        }
      });
  }

  $form.addEventListener('submit', formSubmit);

  if ($firstNameInput && $lastNameInput && $phoneInput) {
    $firstNameInput.addEventListener('input', validateAndToggleButton);
    $lastNameInput.addEventListener('input', validateAndToggleButton);
    $phoneInput.addEventListener('input', validateAndToggleButton);
    validateAndToggleButton();
  }

  var isExclusive = false;
  var hasRentValue = false;
  var hasSellValue = false;
  var buildingInfoType = '';
  var buildingCategory = '';
  var buildingLocal = '';
  var buildingRentAmount = ''; 
  var buildingSellAmount = '';
  var buildingSource = '';

  search.forEach((item) => {
    var arr = item.split('=');
    if (arr.length < 2) return;

    var name = decodeURI(arr[0]);
    var value = decodeURI(arr[1]);

    if (value === 'null' || value === 'undefined' || !value) return;

    if (name === 'isExclusive') isExclusive = (value === 'true');
    if (name === 'rent') {
      hasRentValue = parseFloat(value) > 0;
      buildingRentAmount = value;
  }
  if (name === 'sell' || name === 'value') {
      hasSellValue = parseFloat(value) > 0;
      buildingSellAmount = value;
  }
    if (name === 'hasSell') hasSellValue = (value === 'true');
    if (name === 'infoType') buildingInfoType = value;
    if (name === 'category') buildingCategory = value;
    if (name === 'local') buildingLocal = value;
    if (name === 'source') buildingSource = value;

    if (name === 'source') {
      var formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      
      var $radio = $form.querySelector(`input[name="Radio1"][value="${formattedValue}"]`);
      if ($radio) {
        $radio.checked = true;
      }
    }

    var $el = $form.querySelector(`[data-element="${name}"]:not([type="radio"])`);
    if ($el) {
      $el.value = value;
      $el.setAttribute('data-value-original', value);
      if ($el.classList) $el.classList.add('filled');
    }

    switch (name) {
      case 'reference':
        message = message.replace('{reference}', value);
        break;
      case 'local':
        message = message.replace('{local}', value);
        break;
      case 'areaUseful':
        message = message.replace('{areaUseful}', value);
        break;
      case 'bedrooms':
        var textBedrooms =
          parseInt(value) == 1 ? `1 quarto` : `${value} quartos`;
        message = message.replace('{bedrooms}', textBedrooms);
        break;
      case 'parking':
        var textParking = parseInt(value) == 1 ? `1 vaga` : `${value} vagas`;
        message = message.replace('{parking}', textParking);
        break;
      case 'source':
        var newValue = capitalizeFirstLetter(value);
        var $newInput = $form.querySelector(
          `[data-element="${name}"][value="${newValue}"]`
        );
        if ($newInput) {
          $newInput.checked = true;
        }
        break;
      case 'url':
        pageUrl = value;
        isFavorites = pageUrl.includes('favoritos');

        if (isFavorites) {
          let titleElement = document.querySelector('header h3');
          titleElement.innerHTML = 'Agende uma visita';

          message = message.replace(
            'Olá, gostaria de saber mais sobre o imóvel',
            'Olá, gostaria de visitar o imóvel'
          );
          let originalMessage = message;
          let messageSuffix = ' (adicionar dias e horários disponíveis)';

          message += messageSuffix;

          $form
            .querySelector('[data-element="message"]')
            .addEventListener('click', function(event) {
              var targetElement = event.target || event.srcElement;
              var targetValue = targetElement.value;
              if (targetValue.includes(messageSuffix)) {
                event.preventDefault();
                targetElement.value = targetValue.replace(messageSuffix, ' ');
                moveCaretToEnd(targetElement);
              }
            });

          $form
            .querySelector('[data-element="message"]')
            .addEventListener('blur', function(event) {
              var targetElement = event.target || event.srcElement;
              var targetValue = targetElement.value;
              if (targetValue == `${originalMessage} `) {
                let defaultMessage = (targetValue + messageSuffix).replace(
                  '  ',
                  ' '
                );
                targetElement.value = defaultMessage;
              }
            });
        }

        break;
      default:
        break;
    }
  });

  var searchFinality = sessionStorage.getItem('search_finality');
  
  if (!searchFinality) {
    var urlParams = new URLSearchParams(window.location.search);
    var infoType = urlParams.get('infoType');

    if (infoType === 'ALUGUEL') {
        searchFinality = 'aluguel';
    } else if (infoType === 'VENDA') {
        searchFinality = 'venda';
    }
    
    if (!searchFinality) {
        if (window.location.search.includes('alugar')) searchFinality = 'aluguel';
        else if (window.location.search.includes('comprar')) searchFinality = 'venda';
    }
  }

  (function handleLeadFields() {
    var $dropdownLead = $form.querySelector('select[name="Dropdown1"]');
    var $dropdownPerfil = $form.querySelector('select[name="Dropdown3"]');
    var $currencyInput = $form.querySelector('input[name="Currency"]');

    if (!$dropdownLead) return;

    var finalLeadValue = '';

    if (searchFinality === 'aluguel') {
      finalLeadValue = 'Interessado - Alugar';
    } 
    else if (searchFinality === 'venda') {
      finalLeadValue = 'Comprar';
    } 
    else {
        if (isExclusive === true) {
            finalLeadValue = 'Comprar';
        } else if (hasSellValue === true) {
          finalLeadValue = 'Comprar';
        } else if (hasRentValue === true) {
          finalLeadValue = 'Interessado - Alugar';
        } else {
          finalLeadValue = 'Interessado - Alugar';
        }
    
    }

    $dropdownLead.value = finalLeadValue;

    if ($dropdownPerfil) {
      $dropdownPerfil.value = (finalLeadValue === 'Comprar') ? 'VD' : 'LC';
    }

    if ($currencyInput) {
      if (finalLeadValue === 'Interessado - Alugar') {
        $currencyInput.value = buildingRentAmount || buildingSellAmount;
      } else {
        $currencyInput.value = buildingSellAmount || buildingRentAmount;
      }
      $currencyInput.classList.add('filled');
    }

    var $dropdownTipoImovel = $form.querySelector('select[name="Dropdown2"]');
    if ($dropdownTipoImovel && buildingCategory) {
      var categoryToSelect = buildingCategory;
      if (categoryToSelect === 'Casa na Montanha') {
        categoryToSelect = 'Casa';
      }

      else if (categoryToSelect === 'Prédio') {
        categoryToSelect = 'Prédio monousuário';
      }

      $dropdownTipoImovel.value = categoryToSelect;
    }
    
    var $localidadeUnificada = $form.querySelector('input[name="SingleLine2"]');
    
    if (buildingLocal && $localidadeUnificada) {
      $localidadeUnificada.value = buildingLocal;
      $localidadeUnificada.classList.add('filled');
    }

    var $dropdownBairros = $form.querySelector('select[name="Dropdown4"]');
    if ($dropdownBairros && buildingLocal) {
        $dropdownBairros.value = buildingLocal;
        if ($dropdownBairros.value === "" || $dropdownBairros.value === "-Select-") {
            if (buildingLocal === "Jardins") $dropdownBairros.value = "Jardins / C. César";
        }
    }
  })();

  function clickButton(event) {
    var $btn = event.currentTarget;
    var hide = $btn.getAttribute('data-toggle-hide');
    var show = $btn.getAttribute('data-toggle-show');
    var $hide = hide ? document.querySelector(hide) : null;
    var $show = show ? document.querySelector(show) : null;

    if ($hide) {
      $hide.classList.add('none');
    }

    if ($show) {
      $show.classList.remove('none');
    }
  }

  function inputsControl(event) {
    var $input = event.currentTarget;
    var value = $input.value;

    if (value.length) {
      $input.classList.add('filled');
    } else {
      $input.classList.remove('filled');
    }
  }

  function formSubmit(event) {
    event.preventDefault();

    var valid = pristine.validate();

    if (valid) {

      var formName = $form.getAttribute('data-form-name') || 'form_pdp_nao_identificado';

      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        'event': 'generate_lead',
        'form_name': formName
      });

      window.dataLayer.push({
        'event': 'form_submit_pdp',
        'form_name': formName,
      });

      let finalMessage = message.replace(/, com {areaUseful} m²|, {bedrooms}| e {parking}/g, '');
      finalMessage = finalMessage.replace(/{[^}]+}/g, ''); 

      const baseUrl = 'https://wa.me/5511932062653';
      const whatsAppUrl = pageUrl ?
        `${baseUrl}?text=${encodeURIComponent(finalMessage)} - ${encodeURIComponent(pageUrl)}` :
        `${baseUrl}?text=${encodeURIComponent(finalMessage)}`;

      window.open(whatsAppUrl, '_blank');

      
      setTimeout(() => {
        sessionStorage.removeItem('search_finality');
        this.submit();
      }, 100);
    }
  }

  function moveCaretToEnd(element) {
    let elValue = element.value;

    element.focus();
    element.value = '';
    element.value = elValue;
  }
})();