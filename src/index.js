import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route path="/" component={Home} exact/>
        <Route component={() => (<div>Error 404</div>)} /> 
    </Switch>
  </BrowserRouter>,

//  <React.StrictMode>
 //   <App />
 // </React.StrictMode>,
  document.getElementById('root')
);


