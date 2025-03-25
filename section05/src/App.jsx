import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

//vite로 만든것은 파일 확장자 안써도 된다
//함수의 첫글자는 무조건 대문자
function App() {
  //부모 컴포넌트
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
