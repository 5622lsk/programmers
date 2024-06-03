/* 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 
return 하도록 solution 함수를 작성해주세요. */

function solution(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

//다른풀이
function solution2(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}
