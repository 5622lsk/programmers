/* 최댓값 만들기 (1)
정수 배열 numbers가 매개변수로 주어집니다.
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers의 길이 ≤ 100
 */
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

//구조 분해 할당
function solution2(numbers) {
  //정렬된 배열에서 가장 큰 두 숫자를 구조 분해 할당을 통해 a와 b에 할당
  let [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}
