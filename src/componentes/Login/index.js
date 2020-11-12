import React from 'react';
import { Link } from 'react-router-dom'

function Login() {
    const [valor, setValor] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [answer, setAnswer] = React.useState("");
    const [valores, setValores] = React.useState([{
        email: "natan123",
        senha: "12345"
    }]);
    const [marcar, setMarcar] = React.useState(true)

    /**
     * criar um estado de valores que sera um objeto (email e senha)[ok]
     * deve aparece um console com os valores digitados ao clicar em logar[ok]
     * deve ter um botão para esconder e mostrar senha[ok]
     * deve ter uma mensagem de erro quando o login não der certo[ok]
     * deve ter um link para uma pagina de esqueci a senha[ok]
     * deve ter um link para uma pagina de cadastro(dentro de login)[ok]
     */

    const logar = (event) => {
        event.preventDefault();
        console.log(valor + "   ,  " + pass);//valores

        const itemEmail = valores.find(item => item.email === valor);
        const itemSenha = valores.find(item => item.senha === pass);

        if (itemEmail && itemSenha) {
            setAnswer("Logado com sucesso")
        } else {
            setAnswer("Usuario Não cadastrado")
        }
        setValor("");
        setPass("");
    }

    const trocarValor = (event) => {
        setValor(event.target.value);
    }
    const trocarSenha = (event) => {
        setPass(event.target.value);
    }

    const mostrar = () => {
        setMarcar(!marcar);
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={logar}>
                <input
                    onfocus={valor}
                    type="text"
                    value={valor}
                    onChange={trocarValor}
                    placeholder="digite seu E-mail..." />
                <br />
                <input
                    type={marcar ? "password" : "text"}
                    name="senha"
                    value={pass}
                    placeholder="digite sua senha..."
                    onChange={trocarSenha}
                />
                <button type="submit"> Logar </button>
            </form>
            <button onClick={() => mostrar()}>ocultar senha</button><br />
            <h2>{answer}</h2>

            <h5><Link to="/newpassword">esqueci minha senha</Link></h5>
            <h5><Link to="/cadastro">cadastre-se</Link></h5><br />
        </div>
    );
}
export default Login;