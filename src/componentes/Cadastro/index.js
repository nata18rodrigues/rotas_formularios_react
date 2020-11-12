import React from 'react';
import { Link } from 'react-router-dom'

function Cadastro() {
    const [valor, setValor] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [answer, setAnswer] = React.useState("");
    const [confirme, setConfirme] = React.useState("")
    const [valores, setValores] = React.useState([{
        email: "natan123",
        senha: "123"
    }]);
    const trocarValor = (event) => {
        setValor(event.target.value);
    }
    const trocarSenha = (event) => {
        setPass(event.target.value);
    }
    const confirmarSenha = (event) => {
        setConfirme(event.target.value);
    }
    const Cadastro = (event) => {
        event.preventDefault();
        if (pass === confirme && pass !== "") {
            setValores((valores) => ([
                ...valores,
                { email: valor, senha: pass }
            ]))
            setAnswer("Cadastrado com sucesso")
        } else {
            setAnswer("Cadastrado sem sucesso")
        }
        setValor("");
        setPass("");
        setConfirme("");
    }

    return (
        <div>
            <h1>Cadastro</h1>

            <form onSubmit={Cadastro}>
                <input
                    onfocus={valor}
                    type="text"
                    value={valor}
                    onChange={trocarValor}
                    placeholder="digite seu E-mail..." />
                <br />
                <input
                    type="text"
                    name="senha"
                    value={pass}
                    placeholder="digite sua senha..."
                    onChange={trocarSenha}
                /><br />
                <input
                    type="text"
                    name="senha"
                    value={confirme}
                    placeholder="confirme sua senha..."
                    onChange={confirmarSenha}
                />
                <button type="submit"> Cadastrar </button><br />
                <h2>{answer}</h2>
            </form>
            <h5><Link to="/login" >Faça seu login</Link></h5>
        </div>
    )
}
export default Cadastro;
