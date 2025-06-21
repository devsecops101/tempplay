import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
} from '@mui/material';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [error, setError] = useState('');
  const [dashboardData, setDashboardData] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/admin/dashboard');
        setDashboardData(response.data);
      } catch (err) {
        setError('Failed to fetch dashboard data. Please try again later.');
        console.error('Error fetching dashboard data:', err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" gutterBottom>
            Welcome, {user.username}! You have administrative privileges.
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Feature</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>User Management</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Manage user accounts and permissions</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>System Monitoring</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Monitor system performance and logs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Content Management</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Manage application content and settings</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Dashboard Message
            </Typography>
            <Typography variant="body1">
              {dashboardData || 'Loading dashboard data...'}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminDashboard; 