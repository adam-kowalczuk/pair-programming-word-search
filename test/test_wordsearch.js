const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if matrix is empty", function() {
    const result = wordSearch([], "FRANK")
    assert.isFalse(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'W', 'A', 'T', 'I'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
});


//   it("should return true if the word is vertically present", function() {
//     const result = wordSearch([
//       ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['S', 'E', 'I', 'R', 'F', 'E', 'L', 'D'],
//       ['Y', 'F', 'C', 'A', 'Q', 'U', 'A', 'L'],
//       ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
//       ['W', 'H', 'C', 'K', 'Y', 'E', 'R', 'L'],
//       ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//       ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//       ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//       ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//     ], 'FRANK')

//     assert.isTrue(result);
//   });

//   // it("should return false if the word is not vertically present", function() {
//   //   const result = wordSearch([
//   //     ['A', 'W', 'C', 'F', 'R', 'A', 'N', 'K'],
//   //     ['S', 'E', 'I', 'H', 'F', 'E', 'L', 'D'],
//   //     ['Y', 'F', 'C', 'A', 'Q', 'U', 'A', 'L'],
//   //     ['H', 'M', 'J', 'C', 'E', 'V', 'R', 'G'],
//   //     ['W', 'H', 'C', 'K', 'Y', 'E', 'R', 'L'],
//   //     ['B', 'F', 'E', 'A', 'N', 'E', 'Y', 'B'],
//   //     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   //     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   //   ], 'FRANK')

//   //   assert.isFalse(result);
//   // });

//   it("should return true if the word is horizontally present", function() {
//     const result = wordSearch([
//       ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//       ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//       ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//       ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//       ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//       ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//       ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//     ], 'SEINFELD')

//     assert.isTrue(result);
//   });
  
//   it("should return false if the word is not horizontally present", function() {
//     const result = wordSearch([
//       ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['T', 'E', 'I', 'H', 'F', 'E', 'W', 'D'],
//       ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//       ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//       ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//       ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//       ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//       ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//     ], 'SEINFELD')

//     assert.isFalse(result);
//   });
// });
