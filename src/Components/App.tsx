import '../Styles/App.css'
import Button from './Button';


//<div style={{ backgroundImage: `url(${background})` }}>
//Esse pega a imagem e vai aumentando de acordo com as divs

const handleClick = () => {
  console.log('Botão clicado!');
  // Adicione o código que deseja executar quando o botão for clicado
};

function App() {
  return <div className="intro">

    <div className='button1'> <Button texto={"Entrar"} onClick={handleClick}></Button></div>

    <div className='button2'> <Button texto={"Tutorial"} onClick={handleClick}></Button></div>

    <div className='button3'> <Button texto={"Fale Comigo"} onClick={handleClick}></Button></div>

  </div>
}

export default App;