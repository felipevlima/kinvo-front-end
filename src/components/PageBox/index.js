import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { MdChevronRight } from 'react-icons/md';

import { Container, Icon, Title } from './styles';

export default function PageBox({ to, text, img }) {
  return (
    <Container>
      <NavLink to={to}>
        <Icon className="icon-box">
          <img src={img} alt="analise" />
        </Icon>
        <Title>
          <h1>{text}</h1>
        </Title>
        <MdChevronRight size={25} color="#9DA5AC" />
      </NavLink>
    </Container>
  );
}

PageBox.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
