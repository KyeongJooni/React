const Button = ({ children, text, color = "black" }) => {
  //구조분해 할당 문법 사용, 기본값 설정
  return (
    <button style={{ color: color }}>
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
};

Button;

export default Button;
