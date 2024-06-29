/* 문제 설명
문자열 s가 매개변수로 주어집니다.
s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

제한사항
0 < s의 길이 < 1,000
s는 소문자로만 이루어져 있습니다. */
function solution(s) {
  let charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  const unique = Object.keys(charCount)
    .filter((char) => charCount[char] === 1)
    .sort();

  return unique.join("");
}

//다른 풀이
function solution2(s) {
  let res = [];
  for (let char of s)
    if (s.indexOf(char) === s.lastIndexOf(char)) res.push(char);
  return res.sort().join("");
}
