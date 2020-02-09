import React, { useState, useEffect } from 'react';
import NumberFormater from '../NumberFormater';

import api from '../../services/api';
import InfoBox from '../InfoBox';
import find from '../../assets/find.svg';
import line from '../../assets/line.svg';

import { Container, Info, Box, Table, Header, Line } from './styles';

export default function MainBox() {
  const [info, setInfo] = useState([]);
  const [actions, setActions] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('getStockConsolidation');
      const { data } = response.data;
      const { products } = data;

      const order = products.sort(
        (a, b) => (a.productName > b.productName) - 1
      );

      setInfo(data.summary);
      setActions(order);
    }

    loadData();
  }, []);

  return (
    <Container>
      <Info>
        <InfoBox text="SALDO BRUTO" value={info.grossBalance} prefix="R$ " />
        <InfoBox text="VALOR APLICADO" value={info.appliedValue} prefix="R$ " />
        <InfoBox
          text="GANHO DE CAPITAL"
          value={info.capitalGains}
          prefix="R$ "
        />
        <InfoBox text="TOTAL DISTRIBUIDOS" value={info.earnings} prefix="R$ " />
        <InfoBox text="YIELD" value={info.yield} sufix="%" />
      </Info>
      <Box>
        <Header>
          <h1>Fundos</h1>
          <div>
            <img src={find} alt="search" />
            <input type="text" placeholder="Buscar fundos..." />
          </div>
        </Header>
        <Table>
          <tbody>
            {actions.map(action => (
              <tr key={action.productName}>
                <div>
                  <img src={line} alr="line" />
                  <td>{action.productName}</td>
                </div>
                <td>
                  <h1>SALDO ATUAL</h1>
                  <p>
                    <NumberFormater value={action.equity} prefix="R$" />
                  </p>
                </td>

                <td>
                  <h1>QUANT.</h1>
                  <p>{action.amount}</p>
                </td>
                <td>
                  <h1>PREÇO MÉDIO</h1>
                  <p>
                    <NumberFormater value={action.averagePrice} prefix="R$" />
                  </p>
                </td>
                <td>
                  <h1>ÚLTIMA COTAÇÃO</h1>
                  <p>
                    <NumberFormater value={action.lastQuotation} prefix="R$" />
                  </p>
                </td>

                <td>
                  <h1>YIELD(1M)</h1>
                  <p>
                    <NumberFormater
                      value={action.currentMonthYield}
                      sufix="%"
                    />
                  </p>
                </td>

                <td>
                  <h1>YIELD(12M)</h1>
                  <p>
                    <NumberFormater
                      value={action.lastTwelveMonthsYeld}
                      sufix="%"
                    />
                  </p>
                </td>
                <td>
                  <h1>% CARTEIRA</h1>
                  <p>
                    <NumberFormater
                      value={action.lastTwelveMonthsYeld}
                      sufix="%"
                    />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </Container>
  );
}
