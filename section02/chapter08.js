//5가지 요소 순회 및 탐색 메서드
//1. forEach
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3]; //3회

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

//2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude);

//3. indexOf(맨앞에서부터 찾음), 존재하지 않는다(-1)
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3]; // 원시타입 아니고 객체타입일때는 못찾음, 얕은 비교로 동작
let index = arr3.indexOf(2);

//4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족함
// 특정 요소의 인덱스(위치)를 반환하는 메서드

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});
console.log(findedIndex);

//5. find
// 모든 요소를 순회하면서 콜백함수르 만족하는 요소를 찾고, 요소를 그대로 반환

let arr5 = [{ name: "이경준" }, { name: "이경순" }];
const finded = arr5.find((item) => item.name === "이경준");
console.log(finded);
