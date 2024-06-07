/* 문제 설명
어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후
세균의 수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 10
1 ≤ t ≤ 15 */

function solution(n, t) {
  return n * Math.pow(2, t); //Math.pow(a,b) = a**b
}
//다른풀이
function solution2(n, t) {
  let answer = n;
  for (let i = 0; i < t; i++) {
    answer *= 2;
  }
  return answer;
}

//비트연산자 사용(2의 거듭제곱 구할때 사용)
function solution3(n, t) {
  return n << t; //n을 2의 t 제곱만큼 곱한 결과와 같음
}
