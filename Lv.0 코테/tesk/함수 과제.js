/* Q1.

문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.

### 입/출력 예시
const i = "aaabbbccc"; 
const o = "a3b3c3"; 

const i2 = "aabbaa";
const o2 = "a2b2a2";

const i3 = "abbbffd";
const o3 = "a1b3f2d1";
 */

// Q2.
//다음 구구단을 출력하는 코드를 반복문을 사용해서 출력하도록 변경해주세요.
// 1.함수 선언식
function gugudan3() {
  console.log("3*1=3");
  console.log("3*2=6");
  console.log("3*3=9");
  console.log("3*4=12");
  console.log("3*5=15");
  console.log("3*6=18");
  console.log("3*7=21");
  console.log("3*8=24");
  console.log("3*9=27");
}
gugudan3();

// 2.함수 표현식
// 2.1 익명 함수(unnamed function )
const gugudan4 = function () {
  console.log("4*1=4");
  console.log("4*2=8");
  console.log("4*3=12");
  console.log("4*4=16");
  console.log("4*5=20");
  console.log("4*6=24");
  console.log("4*7=28");
  console.log("4*8=32");
  console.log("4*9=36");
};
gugudan4();

// 2.2 기명 함수(named function)
// 101호 -> 김기수
// 카운터
const gugudan5 = function ddd() {
  console.log("5*1=5");
  console.log("5*2=10");
  console.log("5*3=15");
  console.log("5*4=20");
  console.log("5*5=25");
  console.log("5*6=30");
  console.log("5*7=35");
  console.log("5*8=40");
  console.log("5*9=45");
};
gugudan5();
