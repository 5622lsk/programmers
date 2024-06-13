/* 문제 설명
문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ strlist 원소의 길이 ≤ 100
strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다. */
function solution(strlist) {
  return strlist.map((v) => v.length);
}

//다른풀이
function solution2(strlist) {
  let result = [];
  for (let i = 0; i < strlist.length; i++) {
    //strlist.length = 배열 개수
    result.push(strlist[i].length);
  }
  return result;
}
