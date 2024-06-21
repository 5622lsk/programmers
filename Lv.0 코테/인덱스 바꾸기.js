/* 문제 설명
문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 
바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 < my_string의 길이 < 100
0 ≤ num1, num2 < my_string의 길이
my_string은 소문자로 이루어져 있습니다.
num1 ≠ num2
 */
function solution(my_string, num1, num2) {
  let str = [...my_string];
  let char1 = str[num1];
  str[num1] = str[num2];
  str[num2] = char1;

  return str.join("");
}

//다른풀이
function solution2(my_string, num1, num2) {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      result += my_string[num2];
    } else if (i === num2) {
      result += my_string[num1];
    } else result += my_string[i];
  }
  return result;
}
