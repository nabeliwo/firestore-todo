import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/Layouts/Wrapper/'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export default () => (
  <Wrapper>
    <Title>Index Page</Title>
  </Wrapper>
)
