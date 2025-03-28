const Button = ({ children, text, color = "black" }) => {
  //구조분해 할당 문법 사용, 기본값 설정
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      //onMouseEnter={onClickButton} //이벤트 핸들러
      style={{ color: color }}
    >
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
};

Button;

export default Button;
