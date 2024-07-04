import { useEffect, useState } from "react";

import "./App.css";
import { Paper, Stack } from "@mui/material";
import ChartComponent from "./components/chart";
import CircularProgress from "@mui/joy/CircularProgress";
import SnackbarJS from "./components/snackbar";
import TableComponent from "./components/table";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://interviewscope.sandbox.kyc-chain.com/integrations/v3/scope/667ac4a1979c90daff3863ca/applications';
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2FjNGQ4MWE3YWFlOTM4OWYwYmU1MiIsInJvbGVzIjpbeyJfaWQiOiI2NjdhYzRlODk3OWM5MGRhZmYzODZkMmMiLCJuYW1lIjoiQmFzaWMgQ2FuZGlkYXRlIiwicGVybWlzc2lvbnMiOlsidmlld19hcGlrZXlzIiwidmlld19kYXNoYm9hcmQiLCJ2aWV3X2NvcnBvcmF0ZSIsInZpZXdfaW5kaXZpZHVhbCJdLCJpbnRlcm5hbCI6ZmFsc2UsImxvY2tlZCI6ZmFsc2UsInNjb3BlIjoiNjY3YWM0YTE5NzljOTBkYWZmMzg2M2NhIiwiY3JlYXRlZEF0IjoiMjAyNC0wNi0yNVQxMzoyMzo1Mi41NjFaIiwidXBkYXRlZEF0IjoiMjAyNC0wNi0yNVQxMzoyNjo1My40NjdaIiwiX192IjowfV0sInNjb3BlcyI6WyI2NjdhYzRhMTk3OWM5MGRhZmYzODYzY2EiXSwia2V5SWQiOiI2NjdhYzViMjlmNDA3OTc1MmNkY2I3YmIiLCJpYXQiOjE3MTkzMjIwMzQsImV4cCI6MTc1MDg1ODAzNCwiYXVkIjoiYXBpa2V5IiwiaXNzIjoia3ljYy1zYW5kYm94LW11bHRpc2NvcGVfNjY3YWM0YTE5NzljOTBkYWZmMzg2M2NhIiwic3ViIjoiNjY3YWM0ZDgxYTdhYWU5Mzg5ZjBiZTUyIn0.EuhXvmjVeAWNouhBU0UqpfOGRAwWjaZKaOMmL2H9zMo';

        const response = await fetch(url, {
          method: 'GET', 
          headers: {
            'apiKey': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        const fullData = postsData.items.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setData(fullData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    document.title = 'KYC Dashboard';
    fetchData();
  }, []);

  if (loading) {
    return (
      <Stack className="loader">
        <CircularProgress size="lg" />
      </Stack>  
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <section>
        <Paper square={false} elevation={2}>
          <h2>KYC Application Reports</h2>
          {!data && <p className="no-data">No data available</p>}
          {data && <ChartComponent data={data} />}
          {data && <TableComponent data={data} />}
        </Paper>

        <SnackbarJS isOpen={error} />
      </section>
    </div>
  );
}

export default App;
