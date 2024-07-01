import {
  Box,
  Button,
  Pagination,
  PaginationItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./parts/producer-panel.css";

const VaultProducerList = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const rows = [
    {
      rank: 1,
      name: "Latam Latam Boosters",
      staker: "2,000",
      totalStaked: "14,124,147,500",
      operation: "MAX",
    },
    {
      rank: 2,
      name: "Turkia Global",
      staker: "2,000",
      totalStaked: "14,124,147,500",
      operation: "MAX",
    },
    {
      rank: 3,
      name: "China Oriental Mining",
      staker: "2,000",
      totalStaked: "14,124,147,500",
      operation: "JOIN",
    },
    {
      rank: 4,
      name: "China Oriental Mining",
      staker: "2,000",
      totalStaked: "14,124,147,500",
      operation: "JOIN",
    },
    {
      rank: 5,
      name: "Latam Latam Boosters",
      staker: "2,000",
      totalStaked: "14,124,147,500",
      operation: "JOIN",
    },
    {
      rank: 6,
      name: "Turkia Global",
      staker: "2,000",
      totalStaked: "14,124,147,500",
      operation: "JOIN",
    },
    {
      rank: 7,
      name: "China Oriental Mining",
      staker: "2,000",
      totalStaked: "14,124,147,500",
      operation: "JOIN",
    },
    {
      rank: 8,
      name: "Mining Master",
      staker: "2,000",
      totalStaked: "14,124,147,500",
      operation: "JOIN",
    },
    {
      rank: 9,
      name: "China Oriental Mining",
      staker: "2,000",
      totalStaked: "14,124,147,500",
      operation: "JOIN",
    },
    {
      rank: 10,
      name: "Mining Master",
      staker: "2,000",
      totalStaked: "14,124,147,500",
      operation: "JOIN",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box className="producer-panel-container">
      <Typography variant="h6" className="panel-title">
        Hot Vault Producer Panel
      </Typography>
      <TableContainer component={Paper} className="styled-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="header-table-cell">Rank</TableCell>
              <TableCell className="header-table-cell">
                Vault Producer Name
              </TableCell>
              <TableCell className="header-table-cell">Staker</TableCell>
              <TableCell className="header-table-cell">Total Staked</TableCell>
              <TableCell className="header-table-cell">Operation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.rank}>
                <TableCell className="styled-table-cell">{row.rank}</TableCell>
                <TableCell className="styled-table-cell">{row.name}</TableCell>
                <TableCell className="styled-table-cell">
                  {row.staker}
                </TableCell>
                <TableCell className="styled-table-cell">
                  {row.totalStaked}
                </TableCell>
                <TableCell className="styled-table-cell">
                  <Button
                    className={`operation-button ${
                      row.operation === "MAX" ? "red-button" : "green-button"
                    }`}
                  >
                    {row.operation}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="pagination-container">
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          renderItem={(item) => (
            <PaginationItem {...item} className="pagination-item" />
          )}
        />
      </Box>
    </Box>
  );
};

export default VaultProducerList;
