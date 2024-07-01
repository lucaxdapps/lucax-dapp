import {
  Box,
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
import "./parts/battle-legacy-list.css";

const BattlesLegacyList = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const data = [
    {
      week: 1,
      producer: "Latam Latam Boosters",
      prize: "2,000",
      staked: "14,124,147,500",
    },
    {
      week: 2,
      producer: "Turkia Global",
      prize: "2,000",
      staked: "14,124,147,500",
    },
    {
      week: 3,
      producer: "China Oriental Mining",
      prize: "2,000",
      staked: "14,124,147,500",
    },
    {
      week: 4,
      producer: "Mining Master",
      prize: "2,000",
      staked: "14,124,147,500",
    },
    {
      week: 5,
      producer: "Latam Latam Boosters",
      prize: "2,000",
      staked: "14,124,147,500",
    },
    {
      week: 6,
      producer: "Turkia Global",
      prize: "2,000",
      staked: "14,124,147,500",
    },
    {
      week: 7,
      producer: "China Oriental Mining",
      prize: "2,000",
      staked: "14,124,147,500",
    },
    {
      week: 8,
      producer: "Mining Master",
      prize: "2,000",
      staked: "14,124,147,500",
    },
    {
      week: 9,
      producer: "Latam Latam Boosters",
      prize: "2,000",
      staked: "14,124,147,500",
    },
    {
      week: 10,
      producer: "China Oriental Mining",
      prize: "2,000",
      staked: "14,124,147,500",
    },
  ];

  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box className="battles-legacy-container">
      <Typography variant="h6" className="title-text">
        Battles Legacys
      </Typography>
      <TableContainer component={Paper} className="styled-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-header-cell">Battle Week</TableCell>
              <TableCell className="table-header-cell">
                Winning Vault Producer
              </TableCell>
              <TableCell className="table-header-cell">Won Prize</TableCell>
              <TableCell className="table-header-cell">Week Staked</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="table-cell">{row.week}</TableCell>
                <TableCell className="table-cell">{row.producer}</TableCell>
                <TableCell className="table-cell">{row.prize}</TableCell>
                <TableCell className="table-cell">{row.staked}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="pagination-container">
        <Pagination
          count={Math.ceil(data.length / rowsPerPage)}
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

export default BattlesLegacyList;
