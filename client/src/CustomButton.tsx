// button that can be customized with props
// import './CustomButton.css';

export function CustomButton({ onClick, text, color }) {
  return (
    <button onClick={onClick} className={`custom-button ${color}`}>
      {text}
    </button>
  );
}
