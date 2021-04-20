import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from './loading.styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <CircularProgress aria-label="Loading" />
    </Container>
  );
};

export default Loading;
