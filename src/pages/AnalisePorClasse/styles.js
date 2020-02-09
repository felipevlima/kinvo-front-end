import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1160px;
  height: 100%;
  margin: 20px 15px 0px 15px;
`;

export const Selector = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  button {
    width: 100%;
    max-width: 265px;
    min-height: 66px;
    background: #f8fafb;
    border: 0;

    display: flex;
    align-items: flex-start;
    padding: 30px;

    color: #707b81;
    font-size: 16px;
    font-weight: bold;

    border-radius: 10px 10px 0px 0px;
  }

  button + button {
    background: #eee;
    color: #aaa;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #707b81;
`;
