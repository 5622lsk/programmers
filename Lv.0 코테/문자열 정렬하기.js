/* 문제 설명
문자열 my_string이 매개변수로 주어질 때,
my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록
solution 함수를 작성해보세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
my_string에는 숫자가 한 개 이상 포함되어 있습니다.
my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -
 */

function solution(my_string) {
  const num_list = [...my_string].filter((v) => !isNaN(v)).map(Number);

  return num_list.sort((a, b) => a - b);
}

//다른 풀이
function solution2(my_string) {
  return my_string
    .replace(/[^\d]/g, "")
    .split("")
    .map((v) => +v) // +v는 단항 연산자: 각 문자를 숫자로 변환
    .sort();
}
