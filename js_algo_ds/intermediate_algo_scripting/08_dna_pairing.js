function pairElement(str) {
  let arrayDNA = [];
  for (let i = 0; i < str.length; i++) {

    switch (str[i]) {
      case 'A':
      arrayDNA[i] = ['A','T'];
      break;
      case 'T':
      arrayDNA[i] = ['T','A'];
      break;
      case 'C':
      arrayDNA[i] = ['C','G'];
      break;
      case 'G':
      arrayDNA[i] = ['G','C'];
      break;
    }

  }
  return arrayDNA;
}

pairElement("GCG");
