/* 정수 n이 매개변수로 주어질 때,
n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요. */
function solution(n) {
  let result = [];
  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }
  return result;
}
console.log(solution(30));

//다른 풀이1
const solution2 = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);
