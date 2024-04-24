import '../Styles/Button.css'

/*Componente do botão, recebe um texto e uma função que 
define o clique */ 

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