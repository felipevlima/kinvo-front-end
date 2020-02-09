import React from 'react';

import PageBox from '../PageBox';

import AnalisePorClasseIcon from '../../assets/AnalisePorClasseIcon.svg';
import Resumo from '../../assets/time.svg';
import Products from '../../assets/box.svg';
import Provents from '../../assets/money.svg';
import Rentability from '../../assets/diamond.svg';
import Projection from '../../assets/projection.svg';
import Risc from '../../assets/graph.svg';
import Fgc from '../../assets/lock.svg';

import { Container } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <PageBox to="/resumo" text="Resumo Da Carteira" img={Resumo} />
      <PageBox to="/produtos" text="Meus Produtos" img={Products} />
      <PageBox to="/proventos" text="Meus Proventos" img={Provents} />
      <PageBox
        to="/analise"
        text="Análise por Classe de Produtos"
        img={AnalisePorClasseIcon}
      />
      <PageBox
        to="/rentabilidade"
        text="Rentabilidade Real"
        img={Rentability}
      />
      <PageBox to="/projecao" text="Projeção da Carteira" img={Projection} />
      <PageBox to="/risco" text="Risco x Retorno" img={Risc} />
      <PageBox to="/fgc" text="Cobertura do FGC" img={Fgc} />
    </Container>
  );
}
