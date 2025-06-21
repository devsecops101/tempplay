import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to your Dashboard
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            Hello, {user.username}! You are logged in as a {user.role}.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            This is your personal dashboard where you can manage your account and view your information.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard; 