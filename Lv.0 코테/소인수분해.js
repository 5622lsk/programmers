/* 문제 설명
소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다.
예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다.
따라서 12의 소인수는 2와 3입니다.
자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ n ≤ 10,000 */

function solution(n) {
  let 소인수 = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      if (!소인수.includes(i)) {
        소인수.push(i);
      }
      n /= i;
    }
  }
  return 소인수;
}

//다른 풀이
function solution2(n) {
  var answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      answer.push(i);
    }
  }
  /*   Set 객체를 사용하여 배열 answer의 중복된 요소를 제거합니다.
  Set은 중복을 허용하지 않으므로 중복된 소인수는 자동으로 제거됩니다.
  Set을 배열로 변환하기 위해 전개 연산자(...)를 사용합니다. */
  return [...new Set(answer)];
}
