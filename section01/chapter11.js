// 함수 선언

let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
let area3 = getArea(120, 200);
console.log(area3);

//호이스팅(자동적으로 함수 선언문을 끌어올려서 실행)
//-> 끌어올리다 라는 뜻

function getArea(width, height) {
  function another() {
    console.log("another"); //중첩함수
  }
  let area = width * height;

  return area; //area는 반환값(결과값)
}
