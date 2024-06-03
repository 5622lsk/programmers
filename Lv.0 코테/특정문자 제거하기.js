/* 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요. */

function solution(my_string, letter) {
  return my_string.split(letter).join("");
}
//split("p")는 문자열을 "p"를 기준으로 분리하여 배열로 반환

//다른풀이2
function solution2(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

//다른 풀이
function solution3(my_string, letter) {
  let reg = new RegExp(letter, "g");
  return my_string.replace(reg, "");
}
