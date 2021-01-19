function vowelsAndConsonants(s) {
  s = s.toLowerCase();
  let vowelString = "";
  let consoString = "";
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u"
    ) {
      vowelString += s[i];
    } else {
      consoString += s[i];
    }
  }
  let result = vowelString + consoString;
  for (let i = 0; i < s.length; i++) {
    console.log(result[i]);
  }
}

vowelsAndConsonants("javascriptloops");
