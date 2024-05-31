/* Q. 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
정수 배열 array가 매개변수로 주어질 때,
최빈값을 return 하도록 solution 함수를 완성해보세요.
최빈값이 여러 개면 -1을 return 합니다.
 */
function solution(array) {
  const frequency = {}; // 각 숫자의 빈도를 저장할 객체
  let maxFreq = 0; // 가장 높은 빈도 수
  let mode = []; // 최빈값을 저장할 배열

  // 배열의 각 원소에 대해 빈도 수 계산
  array.forEach((num) => {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
    // 최대 빈도 수 갱신
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = [num]; // 새로운 최빈값 설정
    } else if (frequency[num] === maxFreq) {
      // 현재 숫자의 빈도가 최대 빈도와 같다면 최빈값 배열에 추가
      if (!mode.includes(num)) {
        mode.push(num);
      }
    }
  });

  // 최빈값이 여러 개인지 확인
  if (mode.length > 1) {
    return -1; // 최빈값이 여러 개면 -1 반환
  } else {
    return mode[0]; // 하나의 최빈값 반환
  }
}

//다른 풀이1
function solution2(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
