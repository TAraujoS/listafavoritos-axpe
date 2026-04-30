function asc(str) {
  return str.charCodeAt(0);
}

function chr(asciiNum) {
  return String.fromCharCode(asciiNum);
}

export const encrypt = (data) => {
  let result = '';
  let l;
  let j = 0;
  const hash = 'assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm';

  for (let i = 0; i < data.length; i++) {
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
};
