import React from 'react';
import Grid from './../../Components/Police/Dashboard/Grid';
import TopBar from '../../Components/Dashboard/Topbar/TopBar';

const Dashboard = () => {
  return (
    <>
      <TopBar rightButton="" />
      <Grid />
      {/* <CrimeGraph/> */}
    </>
  );
}

export default Dashboard;
