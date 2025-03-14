//1. 변수
let age; //변수를 초기화한다.

age = 30;

//2. 상수
const birth = "1997.01.07"; //상수는 초기화 반드시 해줘야 함

//3. 변수 네이밍 규칙
//3-1. $, _ 제외 사용 금지
let $_name;

//3-2. 변수는 숫자로 시작할 수 없다.
let name1;
let _2name;

//3-3. 예약어를 사용할 수 없다.
//ex) let let

//4. 변수 명명 가이드, 의미있는 이름으로 네이밍
let salescount = 1;
let refundcount = 1;
let totalcount = salescount - refundcount;
