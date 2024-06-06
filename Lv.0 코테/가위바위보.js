/* 가위는 2 바위는 0 보는 5로 표현합니다.
가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을
return하도록 solution 함수를 완성해보세요. */

function solution(rsp) {
  let result = "";

  for (let i = 0; i <= rsp.length; i++) {
    if (rsp[i] === "2") {
      result += "0";
    } else if (rsp[i] === "0") {
      result += "5";
    } else if (rsp[i] === "5") {
      result += "2";
    }
  }
  return result;
}

//디른풀이
//각 대응되는게 있으면 객체를 사용!!
function solution2(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };

  let result = [...rsp].map((v) => arr[v]).join("");
  return result;
}
