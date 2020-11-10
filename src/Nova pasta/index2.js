import React from "react";
import ReactDOM from "react-dom";

class List extends React.Component  {
    constructor(props){
        super(props);
        
        this.state = {//inicialização state
            itemList:'',
            id:1,
            save:[
                { id:1, texto: 'bom dia 1', marcado: false},
                { id:2, texto: 'bom dia 2', marcado: false}
            ]
        };

        this.mudarValor = this.mudarValor.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
        this.marcar = this.marcar.bind(this);
        this.remover = this.remover.bind(this);

    }//inicialização state
    
    mudarValor(event) {//atualizar
        this.setState((state) => {
           return {itemList: event.target.value}
        })
    };

    marcar(idparamarcar) {
        function filterByID(item) {
            if (idparamarcar.id == item.id) {
                return {
                    ...item,
                    marcado: !item.marcado
                };
            }
            return item;
        }
        this.setState({save: this.state.save.map(filterByID)})//atualizar
    }
    
    remover(itempararemover) {
        function filterByID(item) {
            if (itempararemover.id != item.id) {
                return true;
            }
            return false;
        }
        this.setState({save: this.state.save.filter(filterByID)//atualizar
        })
    }
    cadastrar(event) {
        
        event.preventDefault();
        this.setState({save: this.state.save.concat({ id:Math.random() , texto:this.state.itemList })});//atualizar
    }
    
    render() {//montagem
        return (
            <div>
                <form onSubmit={this.cadastrar}>               
                    <input type="text" value={this.state.itemList} onChange={this.mudarValor}/>
                    <button type="Submit" value="Adicionar">Adicionar</button>
                        </form>
                    <ul>
                    {this.state.save.map(item => (
                        
                            <li key={item.id} style={{
                                textDecoration: item.marcado ? 'line-through' : 'none'
                            }}>{item.texto}
                                <button onClick={() => this.remover(item)}>Remover</button>

                                <button onClick={() => this.marcar(item)}>Marcar</button>
                            </li>
                        ))}
                    </ul>
            </div>
        );
    }
}//montagem
let domContainer = document.querySelector('#button_container');//desmontagem
ReactDOM.render(<List />, document.getElementById("root"));
