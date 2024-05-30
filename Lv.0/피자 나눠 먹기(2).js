/* 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면
최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
 */
// n명과 6조각의 최소공배수를 구하고 나누기 6조각 하기.
function solution(n) {
  //최대공약수 구하기
  function 최대공약수(a, b) {
    while (b !== 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
  //최소공배수 구하기
  function 최소공배수(a, b) {
    return (a * b) / 최대공약수(a, b);
  }
  let pizza = 최소공배수(n, 6) / n;
  //필요한 피자 판 수
  return (pizza * n) / 6;
}

//다른 풀이
const solution2 = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
    //조건이 거짓일 경우, piece에 6을 더합니다.
    //이는 추가로 한 판의 피자를 고려하는 것과 같습니다.
  }

  return piece / 6;
};

//다른 풀이2
function solution3(n) {
  let pizza = 1; // 필요한 피자 판 수를 1로 초기화
  while ((pizza * 6) % n) {
    // 피자 판 수에 6을 곱한 값이 n으로 나누어 떨어지지 않는 동안 반복
    pizza++; // 피자 판 수를 1씩 증가
  }
  return pizza;
}
