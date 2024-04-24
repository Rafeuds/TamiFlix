import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import '../Styles/Background.css'
import '../Styles/TelaPrincipal.css'
import Card from "../Components/Card";
import Hearth from "../Components/Heart";

function TelaPrincipal() {

    //Função usada para mudar a rota
    const navigate = useNavigate()
    const changeRoute = (rota: String) => {
        return navigate("/" + rota)
    };

    //style={{ width: '600px', height: '500px' }}
    return <div className="fundo">
        <h1>Tela Principal</h1>
        <div className="myDiv" >
            <Card title="T1 E01" content="Conteúdo do Cartão" />
            <Card title="T1 E02" content="Conteúdo do Cartão" />
            <Card title="T1 E03" content="Conteúdo do Cartão" />
            <Card title="T1 E03" content="Conteúdo do Cartão" />
            <Card title="T1 E03" content="Conteúdo do Cartão" />
            <Card title="T1 E03" content="Conteúdo do Cartão" />
            <Card title="T1 E03" content="Conteúdo do Cartão" />
        </div>

        <div className="botaozin"> <Button texto={"Voltar"} onClick={() => changeRoute("")}></Button></div>
    </div>
}

export default TelaPrincipal;