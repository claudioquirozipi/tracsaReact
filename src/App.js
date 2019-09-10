import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'

//Components
import Index from './components';
import Blog from './components/blog';
import Blog1 from './components/blog/blog1';
import Blog2 from './components/blog/blog2';
import Blog3 from './components/blog/blog3';
import Ok from './components/ok';
import Dauer from './components/dauer';
import Serply from './components/serply';
import Uniply from './components/uniply';
import Unipol from './components/unipol';
import Ureply from './components/ureply';
import Velta from './components/velta';
import Form from './components/form';
import MyEvent from './view/myEvent';

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
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/dauer-correa-poliuretano-resistencia" component={Blog1} />
            <Route path="/blog/2" component={Blog2} />
            <Route path="/blog/3" component={Blog3} />
            <Route path="/ok" component={Ok} />
            <Route path="/correas-transportadoras/dauer" component={Dauer} />
            <Route path="/asesoria-tecnica/serply" component={Serply} />
            <Route path="/correas-transportadoras/uniply" component={Uniply} />
            <Route path="/cangilones-plasticos/unipol" component={Unipol} />
            <Route path="/revestimiento-poliuretano/ureply" component={Ureply} />
            <Route path="/correas-transportadoras/velta" component={Velta} />
            <Route path="/form" component={Form} />
            <Route path="/capacitacion_tecnica_2019" component={MyEvent} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
