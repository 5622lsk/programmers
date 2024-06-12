/* 문자열 my_string이 매개변수로 주어집니다.
my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다. */

function solution(my_string) {
  let sum = 0;
  for (let char of my_string) {
    if (!isNaN(char)) {
      sum += Number(char);
    }
  }
  return sum;
}

//다른풀이1
function solution2(my_string) {
  return [...my_string]
    .filter((v) => !isNaN(v))
    .reduce((acc, curr) => acc + Number(curr), 0);
}

//다른풀이2
function solution3(my_string) {
  return my_string
    .replaceAll(/[^\d]/g, "")
    .split("")
    .map((v) => +v)
    .reduce((acc, v) => acc + v, 0);
}
