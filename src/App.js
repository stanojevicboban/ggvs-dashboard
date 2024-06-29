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
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}payload.json`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        // Since we don't have a backend, let's make sure the data
        // is sorted correctly.
        const fullData = postsData.sort(
          (a, b) => new Date(b.DateCreated) - new Date(a.DateCreated),
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
