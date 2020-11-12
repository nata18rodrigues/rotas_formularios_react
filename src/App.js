import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Login from './componentes/Login'
import Cadastro from './componentes/Cadastro'
import Newpassword from './componentes/Newpassword';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/newpassword" component={Newpassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
