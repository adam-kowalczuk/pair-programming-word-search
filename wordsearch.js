//Edge cases: - vertical word, empty matrix, backwards
//If no word horizontal, search through the columns, by index #, for the same word. Return true if found, return false if not.
//Current goal: if word is present AT ALL, H or V, return true.
//Current Issue: word is present H, not V, but returning false.


const wordSearch = (letters, word) => {
  if (!letters.length) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = letters.length;
  for (let i = 0; i < letters[0].length; i++) {
    let col = "";
    for (let j = 0; j < verticalJoin; j++) {
      col += letters[j][i];
    }
    if (col.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;