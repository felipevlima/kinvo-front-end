import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  background: #f8fafb;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Box = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  margin-top: 15px;
  max-height: 430px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const Table = styled.div`
  width: 100%;
  height: 100%;
  color: #4c309b;
  display: flex;

  tbody {
    width: 100%;
    height: 100%;

    tr {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;

      div {
        width: 125px;
        display: flex;
        flex-direction: row;
        align-items: center;

        td {
          padding-left: 15px;
          border-bottom: none;
        }
      }

      h1 {
        font-size: 9px;
        font-weight: 500;
        margin-bottom: 3px;
      }

      td {
        font-size: 12px;
        font-weight: 600;
        padding: 15px 0;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px 0;

  h1 {
    font-weight: bold;
    font-size: 18px;
    color: #707b81;
  }

  div {
    background: #eef2f4;
    border-radius: 17px;
    display: flex;
    align-items: center;
    padding: 10px;
    min-width: 250px;
    min-height: 30px;

    input {
      background: none;
      border: none;
      padding: 0 10px;
      color: #4c309b;

      ::placeholder {
        color: #ccc;
      }
    }
  }
`;
