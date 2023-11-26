import React from 'react';
import { Button } from '../components';
import DownloadButton from '../assets/download-btn-icon.svg';

const Home = () => {
  const onClick = () => alert('xxx');
  return (
    <Button icon={DownloadButton} secondary={false} onClick={onClick}>
      Home
    </Button>
  );
};

export default Home;
