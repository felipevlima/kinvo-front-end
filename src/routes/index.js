import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import AnalisePorClasse from '../pages/AnalisePorClasse';
import Acoes from '../pages/AnalisePorClasse/Acoes';
import Resumo from '../pages/Resumo';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Resumo} />
      <Route exact path="/analise" component={AnalisePorClasse} />
      <Route exact path="/resumo" component={Resumo} />
      <Route exact path="/produtos" component={Resumo} />
      <Route exact path="/proventos" component={Resumo} />
      <Route exact path="/projecao" component={Resumo} />
      <Route exact path="/rentabilidade" component={Resumo} />
      <Route exact path="/risco" component={Resumo} />
      <Route exact path="/fgc" component={Resumo} />
    </Switch>
  );
}
