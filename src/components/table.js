import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { format } from "date-fns";
import SubjectIcon from "@mui/icons-material/Subject";
import StatusComponent from "../components/status";
import RiskScore from "../components/risk-score";

const TableComponent = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <span className="bold">Created</span>
            </TableCell>
            <TableCell align="left" className="bold">
              <span className="bold">Name</span>
            </TableCell>
            <TableCell align="left" className="bold">
              <span className="bold">Type</span>
            </TableCell>
            <TableCell align="left" className="bold">
              <span className="bold">Risk Score</span>
            </TableCell>
            <TableCell align="left" className="bold">
              <span className="bold">Status</span>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  <p className="bold">
                    {format(new Date(row.DateCreated), "MMMM dd yyyy")}
                  </p>
                  <p>{format(Date(row.DateCreated), "HH:mm:ss")}</p>
                </TableCell>
                <TableCell align="left">
                  <p className="bold">{row.Name}</p>
                  <p>{row.Email}</p>
                </TableCell>
                <TableCell align="left">{row.Type}</TableCell>
                <TableCell align="left">
                  <RiskScore riskScore={row.RiskScore} />
                </TableCell>
                <TableCell align="left">
                  <StatusComponent status={row.Status} />
                </TableCell>
                <TableCell align="left">
                  <a href="/">
                    <SubjectIcon />
                  </a>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
