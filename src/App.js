import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'

//Components
import Index from './components';
import Blog from './components/blog';
import Dauer from './components/dauer';
import Serply from './components/serply';
import Uniply from './components/uniply';
import Unipol from './components/unipol';
import Ureply from './components/ureply';
import Velta from './components/velta';
import Form from './components/form';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  * {font-family: 'Montserrat', sans-serif;}
  `;
class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/blog" component={Blog} />
            <Route path="/correas-transportadoras/dauer" component={Dauer} />
            <Route path="/asesoria-tecnica/serply" component={Serply} />
            <Route path="/correas-transportadoras/uniply" component={Uniply} />
            <Route path="/cangilones-plasticos/unipol" component={Unipol} />
            <Route path="/revestimiento-puliuretano/ureply" component={Ureply} />
            <Route path="/correas-transportadoras/velta" component={Velta} />
            <Route path="/form" component={Form} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
