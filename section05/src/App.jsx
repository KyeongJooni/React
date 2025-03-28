import "./App.css";
import { useState } from "react";

//vite로 만든것은 파일 확장자 안써도 된다
//함수의 첫글자는 무조건 대문자
// useState를 안쓰면 리렌더링이 되지 않음
function App() {
  //부모 컴포넌트
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    //스프레드 연산자
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
} //컴포넌트의 값이 바뀌면 return을 다시 반환한다

export default App;
