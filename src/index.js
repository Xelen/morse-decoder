const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let decodedString = '';

  for (let i = 0; i < expr.length; i += 10) {
    let morseCode = expr.slice(i, i + 10);

    if (morseCode === '**********') {
      decodedString += ' ';
      continue;
    }

    let morseLetter = morseCode
      .replace(/10/g, '.')
      .replace(/11/g, '-')
      .replace(/0/g, '');

    decodedString += MORSE_TABLE[morseLetter];
  }

  return decodedString;
}

module.exports = {
  decode,
};
