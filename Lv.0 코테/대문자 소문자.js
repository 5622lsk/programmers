/* 문자열 my_string이 매개변수로 주어질 때,
대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
 */
function solution(my_string) {
  return [...my_string]
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
}

//다른풀이
function solution2(my_string) {
  var answer = "";
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
