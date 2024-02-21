import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TelaInicio from './TelaInicio';
import TelaPrincipal from './TelaPrincipal';
import TelaContato from './TelaContato';
import TelaTutorial from './TelaTutorial';
import Button from './Button';



const handleClick = () => {
  console.log('Botão clicado!');
  // Adicione o código que deseja executar quando o botão for clicado
};


function App() {

  return <TelaInicio/>  

  /*
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<TelaInicio />} />
      <Route path='/principal' element={<TelaPrincipal />} />
      <Route path='/contato' element={<TelaContato />} />
      <Route path='/tutorial' element={<TelaTutorial />} />
    </Routes>

  </BrowserRouter>
  */

}

export default App;