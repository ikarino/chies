import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

// import { Container, Post } from './styles';
import { Container } from './styles';

export default function Docs({ prev, next }) {
  return (
    <Container>
      © 2020 by チャイナエステ嬢ポータル. All rights reserved.
    </Container>
  );
}

Docs.propTypes = {
  prev: PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
  }),
  next: PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
  }),
};

Docs.defaultProps = {
  prev: null,
  next: null,
};
