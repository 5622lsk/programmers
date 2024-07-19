//[연습문제 - 1부터 9까지 출력하기]
function sol1() {
  for (let i = 1; i <= 9; i++) {
    console.log(i);
  }
}

/*
  [연습문제 - 음수 걸러내기]
  
  배열에 음수값이 섞여있습니다. 
  음수는 제외하고 양수들만 골라내어 합을 구하세요.
  
  */
let numArr = [10, -10, 20, -30, 40];
let sum = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] > 0) {
    sum += numArr[i];
  }
}
console.log(sum);

/*
  [연습문제 - 홀짝 구분하기]
  
  0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
  구분하여 출력하도록 코드를 작성해주세요.
  
  출력 예시 ) 
  0 짝수 
  1 홀수
  2 짝수
  3 홀수
  4 짝수
  ... 중략 .. 
  15 홀수
  */

function sol3() {
  let i = 0;
  while (i <= 15) {
    if (i % 2 == 0) {
      console.log(i + " 짝수");
    } else {
      console.log(i + " 홀수");
    }
    i++;
  }
}

sol3();
/*
  [연습문제 - 암스트롱 수 구하기]
  난이도 ★★★★★
  
  100부터 999까지 암스트롱 수를 구하세요
  
  &암스트롱 수란?
  
  암스트롱의 수는 세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말합니다. 
  예를 들어 153 = 1 + 125 + 27 입니다.  
  이와 같은 수를 암스트롱의 수라고 말합니다.
  */
function sol4() {
  for (let i = 100; i <= 999; i++) {
    const num1 = i % 10; //일의자리
    const num2 = ((i - num1) / 10) % 10; //십의자리
    const num3 = (i - num1 - num2 * 10) / 100; //백의자리
    if (i === num1 ** 3 + num2 ** 3 + num3 ** 3) console.log(i);
  }
}

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; i++) {
    for (let k = 0; k <= 9; k++) {
      const result = i ** 3 + j ** 3 + k ** 3;
      const number = i * 100 + j * 10 + k * 1;

      if (result === number) console.log(number);
    }
  }
}
