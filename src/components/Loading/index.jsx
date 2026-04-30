import React from 'react'
import { connect, useSelector } from 'react-redux';
import { Container, Loader } from './styles';

function Loading() {
  const { active, type } = useSelector(state => state.loading);

  return (
    <Container active={active} type={type}>
      <Loader />
    </Container>
  )
}

export default connect()(Loading);