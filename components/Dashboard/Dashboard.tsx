// components/Dashboard/Dashboard.tsx
'use client';
import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import OverviewCard from './OverviewCard';
import SalesChart from './SalesChart';
import OrdersTable from './OrdersTable';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', background: 'white' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid size={12}>
            <TopNavBar />
          </Grid>
          <Grid size={2} direction="row-reverse">
            <Sidebar />
          </Grid>
          <Grid size={10}>
            <Box>
              <Grid container>
                <Grid>
                  <OverviewCard title="Total Sales" value="$10,000" />
                </Grid>
                <Grid>
                  <OverviewCard title="Total Orders" value="150" />
                </Grid>
                <Grid>
                  <OverviewCard title="Total Customers" value="100" />
                </Grid>
                <Grid>
                  <OverviewCard title="Attendance" value="20" />
                </Grid>
                <Grid>
                  <OverviewCard title="Task" value="10" />
                </Grid>
              </Grid>
              <SalesChart />
              <OrdersTable />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
