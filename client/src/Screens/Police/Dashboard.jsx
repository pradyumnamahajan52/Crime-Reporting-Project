import React from 'react';
import CrimeGraph from '../../Components/Police/Dashboard/CrimeGraph';
import TopBar from './../../Components/Police/Dashboard/TopBar';
import Grid from './../../Components/Police/Dashboard/Grid';

const Dashboard = () => {
  return (
    <>
      <TopBar rightButton="" />
      <Grid />
      <CrimeGraph/>
    </>
  );
}

export default Dashboard;
