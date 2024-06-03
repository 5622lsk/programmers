/* 각에서 0도 초과 90도 미만은 예각, 
90도는 직각, 90도 초과 180도 미만은 둔각 
180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때
예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록
solution 함수를 완성해주세요. */

function solution(angle) {
  if (angle > 0 && angle < 90) {
    return 1; // 예각
  } else if (angle === 90) {
    return 2; // 직각
  } else if (angle > 90 && angle < 180) {
    return 3; // 둔각
  } else if (angle === 180) {
    return 4; // 평각
  }
}

//다른 풀이
function solution2(angle) {
  return [90, 180, 90, 180].filter((x) => angle >= x).length + 1;
}
/* angle이 90일 때:

배열 [90, 180, 90, 180]의 각 요소에 대해 90 >= x를 검사.
조건을 만족하는 요소는 [90, 90]
필터링된 배열의 길이는 2이므로, 최종 결과는 2 + 1 = 3 (직각).
 */
