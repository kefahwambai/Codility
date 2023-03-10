function OrderedCountOfCharacters(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return Object.entries(charCount)
      .sort((a, b) => str.indexOf(a[0]) - str.indexOf(b[0]))
      .map(([char, count]) => [char, count]);
}