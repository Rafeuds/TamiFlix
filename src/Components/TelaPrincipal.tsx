import { useNavigate } from "react-router-dom";
import Button from "./Button";
import '../Styles/Background.css'

function TelaPrincipal() {

    const navigate = useNavigate()
    const changeRoute = (rota: String) => {
        return navigate("/" + rota)
    };

    return <div className="fundo">
        <h1>Tela Principal</h1>
        <div className='button1'> <Button texto={"Voltar"} onClick={() => changeRoute("")}></Button></div>
    </div>
}

export default TelaPrincipal;