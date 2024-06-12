/* 문제 설명
약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 100
 */
function solution(n) {
  let 합성수 = 0;
  for (let i = 0; i <= n; i++) {
    let 약수개수 = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        약수개수++;
      }
    }

    if (약수개수 >= 3) {
      합성수++;
    }
  }
  return 합성수;
}

//다른풀이
function solution2(n) {
  return (
    Array(n)
      .fill()
      //map((_, i) => i + 1): 배열의 각 요소를 1부터 n까지의 숫자로 변환합니다. 이 과정에서 인덱스를 사용하여 1씩 증가
      .map((_, i) => i + 1)
      .filter((i) => {
        let cnt = 0;
        for (let j = 1; j <= i; j++) {
          if (i % j === 0) cnt++;
        }
        return cnt >= 3;
      }).length
  );
}
