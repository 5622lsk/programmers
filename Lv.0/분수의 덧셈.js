function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function solution(numer1, denom1, numer2, denom2) {
  //두 분수를 더할 공통 분모 구하기
  const commonDenom = denom1 * denom2;
  //분자 구하기
  const newNumer1 = numer1 * denom2;
  const newNumer2 = numer2 * denom1;

  const sumNumer = newNumer1 + newNumer2;

  //최대공약수 구하기 gcd함수 사용
  const gcdValue = gcd(sumNumer, commonDenom);

  //기약분수로 나타내기
  const reducedNumer = sumNumer / gcdValue;
  const reducedDenom = commonDenom / gcdValue;

  return [reducedNumer, reducedDenom];
}

//다른사람 풀이
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution2(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}
