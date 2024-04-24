import { useNavigate } from 'react-router-dom';
import '../Styles/TelaInicio.css'
import '../Styles/Background.css'
import Button from '../Components/Button';



function TelaInicio() {

    // Função responsavel para mudar a rota da aplicação 
    const navigate = useNavigate()
    const changeRoute = (rota : String) => {
        return navigate("/" + rota)
    };


    return <div className="fundo">

        <div className='button1'> <Button texto={"Entrar"} onClick={ () => changeRoute("principal")}></Button></div>

        <div className='button2'> <Button texto={"Tutorial"} onClick={() => changeRoute("tutorial")}></Button></div>

        <div className='button3'> <Button texto={"Fale Comigo"} onClick={() => changeRoute("contato")}></Button></div>

    </div>

}





/* 
const navigate = useNavigate();

const goToPrincipal = () => {
    navigate('/principal');
};
*/




export default TelaInicio;