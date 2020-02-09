import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import SideBar from '../../../components/Sidebar';

import { Wrapper, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        <SideBar />
        {children}
      </Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
