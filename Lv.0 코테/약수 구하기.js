/* 문제 설명
정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 10,000
 */

function solution(n) {
  const array = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      array.push(i);
    }
  }
  return array.sort((a, b) => a - b);
}

//다른풀이
function solution2(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}
