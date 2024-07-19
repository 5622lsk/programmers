// 1. 문서 객체 찾을 때
const h1El = document.querySelector(".bye");

// 2. 문서 객체 콘텐츠 바꾸는 법
h1El.innerHTML = "<i>sucoding</i>";
h1El.innerText = "<i>sucoding</i>";

// 3. 스타일 주는 법
h1El.style.color = "red";
h1El.style.fontSize = "90px";

// 4. 클래스 추가하는 법
h1El.classList.add("active");

// 5. 클래스 제거하는 법
h1El.classList.remove("bye");

// 6. 클래스 토글하는 법
h1El.classList.toggle("done"); //
h1El.classList.toggle("done"); //

// 7. input value 가져오는 법
setTimeout(() => {
  const inputEl = document.querySelector("input");
  console.log(inputEl.value);
}, 3000);
