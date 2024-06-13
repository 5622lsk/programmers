/* 가까운 수
제출 내역
문제 설명
정수 배열 array와 정수 n이 매개변수로 주어질 때,
array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ array의 길이 ≤ 100
1 ≤ array의 원소 ≤ 100
1 ≤ n ≤ 100
가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
 */

function solution(array, n) {
  const abs_array = [];

  array.forEach((item) => {
    abs_array.push(Math.abs(n - item));
  });
  let min_array = Math.min(...abs_array);
  // 가장 작은 차이를 가진 원소들을 필터링하여 closestNumbers에 저장합니다.
  let closetNums = array.filter((item) => min_array === Math.abs(n - item));
  // 가장 작은 차이를 가진 숫자들 중 가장 작은 숫자를 반환합니다.
  return Math.min(...closetNums);
}
