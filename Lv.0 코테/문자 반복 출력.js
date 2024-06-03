/* 문자열 my_string과 정수 n이 매개변수로 주어질 때,
my_string에 들어있는 각 문자를 n만큼 반복한 문자열을
return 하도록 solution 함수를 완성해보세요.
 */

function solution(my_string, n) {
  return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), "");
}

//다른풀이
function solution2(my_string, n) {
  return [...my_string].reduce((acc, cur) => acc + cur.repeat(n), "");
}
