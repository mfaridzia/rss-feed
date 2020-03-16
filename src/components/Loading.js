import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  text-align: center;
  font-size: 20px;
  color: #000;
  display: flex;
  padding: 20px;
  justify-content: center;
`
const Loading = () => {
  return (
    <Text>
      Loading...
    </Text>
  )
}

export default Loading;
