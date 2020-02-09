import React from 'react';

import MainBox from '../../components/MainBox';

import { Container, Selector, Title } from './styles';

export default function AnalisePorClasse() {
  return (
    <Container>
      <Title>Análise por Classe de Ativos</Title>
      <Selector>
        <button type="submit">Ações</button>
        <button type="submit">Nome da Classe</button>
        <button type="submit">Nome da Classe</button>
        <button type="submit">Nome da Classe</button>
      </Selector>
      <MainBox />
    </Container>
  );
}
