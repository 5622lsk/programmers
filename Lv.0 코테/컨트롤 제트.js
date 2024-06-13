/* 문제 설명
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다.
문자열에 있는 숫자를 차례대로 더하려고 합니다.
이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
숫자와 "Z"로 이루어진 문자열 s가 주어질 때,
머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ s의 길이 ≤ 200
-1,000 < s의 원소 중 숫자 < 1,000
s는 숫자, "Z", 공백으로 이루어져 있습니다.
s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
연속된 공백은 주어지지 않습니다.
0을 제외하고는 0으로 시작하는 숫자는 없습니다.
s는 "Z"로 시작하지 않습니다.
s의 시작과 끝에는 공백이 없습니다.
"Z"가 연속해서 나오는 경우는 없습니다.
 */

function solution(s) {
  const array = s.split(" ");
  let result = 0;
  let lastNum = 0;

  array.forEach((item) => {
    if (item === "Z") {
      result -= lastNum;
    } else {
      lastNum = Number(item);
      result += lastNum;
    }
  });
  return result;
}

//다른풀이1
function solution2(s) {
  const result = [];

  // 문자열을 공백 기준으로 나누어 배열로 만듦
  s.split(" ").forEach((item) => {
    // "Z"가 나오면 배열의 마지막 요소를 제거
    if (item === "Z") result.pop();
    else result.push(+item); // 숫자라면 숫자로 변환하여 배열에 추가
  });

  // 배열의 합을 구함. 배열이 비어있다면 0을 반환
  return result.length ? result.reduce((pre, cur) => pre + cur) : 0;
}

//다른풀이2
function solution3(s) {
  let arr = s.split(" ");
  /* "Z"가 배열에 포함되어 있는지를 확인.
  "Z"가 배열에 있으면 indexOf가 0 이상의 값을 반환하므로 > -1은 true
  "Z"가 배열에 없으면 indexOf가 -1을 반환하므로 > -1은 false */
  while (arr.indexOf("Z") > -1) {
    arr.splice(arr.indexOf("Z") - 1, 2); //Z 전 숫자랑 Z 제거.
  }
  return arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}
