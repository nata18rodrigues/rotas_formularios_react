import React from "react";
import ReactDOM from "react-dom";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count:  1 };
    }
    Adicionar = () => {
        this.setState({count: this.state.count + 1 });
      }
    
      Remover = () => {
        this.setState({count: this.state.count - 1});
      }
    
    render() {
        return (
            <div>
                <text>{this.state.count}</text>,<br></br>,
                <button onClick={this.Adicionar}>
                    Adicionar
                </button>,
                <button onClick={this.Remover}>
                    Remover
                </button>
            </div>
        );
    };
}



let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, document.getElementById("root"));