/*
  Check to see if two provided strings are anagrams of eachother.
    One string is an anagram of another if it uses the same characters
    in the same quantity. Only consider characters, not spaces
    or punctuation.  Consider capital letters to be the same as lower case

  Examples
    anagrams('rail safety', 'fairy tales') --> True
    anagrams('RAIL! SAFETY!', 'fairy tales') --> True
    anagrams('Hi there', 'Bye there') --> False
*/

function isAnagram1(str1, str2) {
  const charsMapOfStr1 = strToCharMap(str1);
  const charsMapOfStr2 = strToCharMap(str2);

  if (
    Object.keys(charsMapOfStr1).length !== Object.keys(charsMapOfStr2).length
  ) {
    return false;
  }

  for (const char in charsMapOfStr1) {
    if (charsMapOfStr1[char] !== charsMapOfStr2[char]) {
      return false;
    }
  }

  return true;
}

function strToCharMap(str) {
  const charsMap = {};

  for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charsMap[char] = charsMap[char] + 1 || 1;
  }

  return charsMap;
}

let result1 = isAnagram1('RAIL! SAFETY!', 'fairy tales');
console.log(result1);

/*
function isAnagram2(str1, str2) {
  return cleanString(str1) === cleanString(str2);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

let result2 = isAnagram2('RAIL! SAFETY!', 'fairy tales');
console.log(result2);

/---------------------------------------------/

const words = ['dell', 'ledl', 'abc', 'cba', 'monk', 'konm'];

function anagrams(arr) {
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let alphabeticalSort = word
      .split('')
      .sort()
      .join('');

    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      let other = arr[j];
      if (
        alphabeticalSort ===
        other
          .split('')
          .sort()
          .join('')
      ) {
        console.log(word + ' - ' + other);
      }
    }
  }
}

let result = anagrams(words);
console.log(result);

function sortStrChars(str) {
  if (!str) return;
  return str
    .split('')
    .sort()
    .join('');
}

function getGroupedAnagrams(arr) {
  const anagrams = {};
  arr.forEach(word => {
    const sortedWord = sortStrChars(word);
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });
  return anagrams;
}

const groupedAnagrams = getGroupedAnagrams(words);
console.log(groupedAnagrams);
*/