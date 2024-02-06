import '../Styles/Button.css'

interface Button_Props {
    texto: String
    onClick: () => void
}

const Button = ({ texto, onClick }: Button_Props) => {
    return (
      <button onClick={onClick}>
        {texto}
      </button>
    );
  };
  
  export default Button;