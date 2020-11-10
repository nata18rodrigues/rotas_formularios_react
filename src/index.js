import React from "react";
import ReactDOM from "react-dom";

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
    </div>
  )
}

ReactDOM.render(<List />, document.getElementById("root"));//desmontagem
