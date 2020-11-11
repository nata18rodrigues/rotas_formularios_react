import React from "react";
import ReactDOM from "react-dom";

/**
 * Lista de atividade com props (nivel médio)
 * 
 * Passe a prop IDADE como um número[ok]
 * Passe uma prop chamada times que seja um array ["palmeiras", "santos", "são paulo"][]
 * Passe uma prop chamada ligado que seja um boolean (se ligado for verdadeiro então deve aparecer a mensagem "Ligado" se não "Desligado")
 */

const MostrarNomes = (props) => {
  return (
    <div>
      <h1> {props.nome}  {props.idade} </h1>
      <h3>{props.estado == true ? 'ligado' : 'desligado'}</h3>

      {props.fifa.map(item => {
        return (
          <li> {item} </li> 
        )
      })}

      {props.usuario.email}
    </div> 
  );
}



const List = () => {
  const [texto, setTexto] = React.useState("");
  const [lista, setLista] = React.useState([]);

  const trocarTexto = (event) => {
    setTexto(event.target.value);
  }

  const adicionar = (event) => {
    event.preventDefault();
    setLista(lista.concat({ id: Math.random(), texto: texto, marcar: false }));
    setTexto("");
  }

  const remover = (itempararemover) => {
    function filterByID(item) {
      if (itempararemover.id !== item.id) {
        return true;
      }
      return false;
    }
    setLista(lista.filter(filterByID));
  }

  const marcar = (idparamarcar) => {
    function filterByID(item) {
      if (idparamarcar.id === item.id) {
        return {
          ...item,
          marcar: !item.marcar
        };
      }
      return item;
    }
    setLista(lista.map(filterByID));
  }

  return (
    <div>
      <form action="" onSubmit={adicionar}>
        <input
          onfocus={texto}
          type="text"
          value={texto}
          onChange={trocarTexto}
        />
        <button type="submit"> adicionar </button>
      </form>
      <ul>
        {lista.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                textDecoration: item.marcar ? "line-through" : "none",
              }}
            >{item.texto}{""}
              <button onClick={() => remover(item)}> remover </button>{" "}
              <button onClick={() => marcar(item)}>marcar</button>
            </li>
          );
        })}
      </ul>



      <MostrarNomes 
        usuario={{ nome: 'Natan', email: 'natan@gmail.com' }} 
        fifa={[]} 
        nome="Matheus Paice com prop" 
        idade={22} 
        estado={false}>
      </MostrarNomes>

      <MostrarNomes usuario={
        { nome: 'Matheus', email: 'matheus@gmail.com' }
      } fifa={[]} nome="Natan Rodrigues com prop" idade={18} estado={false}></MostrarNomes>
      <MostrarNomes usuario={
        { nome: 'Lucas', email: 'lucas@gmaailc.om' }
      } fifa={["palmeiras", "santos", "são paulo"]}></MostrarNomes>
      <MostrarNomes usuario={
        { nome: 'Daniel', email: 'daniel@gmail.com' }
      } fifa={[]} estado={false}></MostrarNomes>
      <MostrarNomes usuario={
        { nome: 'Poli', email: 'poli@gmail.com' }
      } fifa={[]} estado={true}></MostrarNomes>
    </div>
  )
}

ReactDOM.render(<List />, document.getElementById("root"));//desmontagem