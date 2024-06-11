/* 문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을
return하도록 solution 함수를 완성해주세요.

제한사항
3 ≤ numbers의 길이 ≤ 20
direction은 "left" 와 "right" 둘 중 하나입니다. */

function solution(numbers, direction) {
  if (direction === "right") {
    const last = numbers.pop();
    numbers.unshift(last);
  } else if (direction === "left") {
    const first = numbers.shift();
    numbers.push(first);
  }
  return numbers;
}

//
function solution2(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}
