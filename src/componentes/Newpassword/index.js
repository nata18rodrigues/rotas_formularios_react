import React from 'react';
import { Link } from 'react-router-dom'

function Newpassword(event) {
    const envio = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Recupreção de senha</h1>
            <h3>Digite seu e-mail para recuperação por sms</h3>
            <form onSubmit={envio}>
                <input
                    tipe="text"
                    placeholder="digite seu E-mail" />
                <button type="submit">enviar</button>
                <h5><Link to="/login">Faça seu login</Link></h5>
                <h5><Link to="/cadastro">cadastre-se</Link></h5><br />
            </form>
        </div>
    )
}
export default Newpassword;
