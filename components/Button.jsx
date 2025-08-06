import '../styles/Button.css'
function Button() {
  function handleClick() {
    window.open("https://www.facebook.com/share/1NHvYPRBgs/", "_blank");
  };

  return (
    <button className="external-button" onClick={handleClick}>
      Visit My Facebook
    </button>
  );
}

export default Button