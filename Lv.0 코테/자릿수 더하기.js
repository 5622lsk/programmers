/* 문제 설명
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

제한사항
0 ≤ n ≤ 1,000,000
 */

function solution(n) {
  //정수를 문자열로 변환해야 배열로 만들 수 있음!
  return String(n)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0); //문자열을 정수로 만들어야 더하기 가능
}

//다른풀이
function solution2(n) {
  let result = 0;
  //각 자릿수를 반복적으로 처리하면서 마지막 자릿수를 추출하고 합산
  while (n > 0) {
    result += n % 10;

    n = Math.floor(n / 10);
  }

  return result;
}
