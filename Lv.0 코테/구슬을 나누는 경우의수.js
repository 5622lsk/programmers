/* 문제 설명
머쓱이는 구슬을 친구들에게 나누어주려고 합니다.
구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와
친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

제한사항
1 ≤ balls ≤ 30
1 ≤ share ≤ 30
구슬을 고르는 순서는 고려하지 않습니다.
share ≤ balls */

//조합공식: n개중에 k개를 고를 경우의 수
//C(n,k)= n! / k!(n−k)!

function combination(n, k) {
  // 조합 공식에 따라 계산: n! / (k! * (n-k)!)
  let result = 1;
  for (let i = 0; i < k; i++) {
    result = (result * (n - i)) / (i + 1);
  }
  return result;
}

function solution(balls, share) {
  return combination(balls, share);
}

//다른풀이
//이 접근법은 함수 호출이 stack에 쌓이면서 진행되므로,
//깊이가 깊은 경우에는 호출 스택이 초과될 수 있음.
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

function solution2(balls, share) {
  return Math.round(
    팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share)
  );
}

//다른풀이2
function solution3(balls, share) {
  var result = 1;
  while (share > 0) {
    result = (result * balls) / share;
    balls = balls - 1;
    share = share - 1;
  }
  return Math.round(result);
}
