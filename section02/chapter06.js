//1. 배열 순회
let arr = [1, 2, 3];

//1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i > arr2.length; i++) {
  // console.log(arr2[i]);
}

//1.2 for of 반복문
for (let item of arr) {
  console.log(item);
}

//2. 객체 순회
let person = {
  name: "이경준",
  age: "25",
  hobby: "탁구",
};

//2. Object.keys 사용 배열은 for of
//->객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  //   console.log(key, value);
}

//2.2 Object.values
//-> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person); // 내장함수
// console.log(values);

for (let value of values) {
  //   console.log(value);
}

//2.3 for in 객체순회
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
