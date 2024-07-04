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
import { Label } from "recharts";

function findByKey(arr, label) {
  for (let attr in arr) {
    if (arr[attr].label === label) {
      return arr[attr].value;
    }
  }
  
  return '';
}

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
            data.map((row) => {
              const firstName = findByKey(row.attributes, 'First name');
              const lastName = findByKey(row.attributes, 'Last name');
              const email = findByKey(row.attributes, 'Email');
            return (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  <p className="bold">
                    {format(new Date(row.createdAt), "MMMM dd yyyy")}
                  </p>
                  <p>{format(Date(row.createdAt), "HH:mm:ss")}</p>
                </TableCell>
                <TableCell align="left">
                  <p className="bold">{firstName} {lastName}</p>
                  <p>{email}</p>
                </TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">
                  <RiskScore riskScore={row.riskScoring.currentCategory} />
                </TableCell>
                <TableCell align="left">
                  <StatusComponent status={row.currentStatus} />
                </TableCell>
                <TableCell align="left">
                  <a href="/">
                    <SubjectIcon />
                  </a>
                </TableCell>
              </TableRow>
            )
          }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
