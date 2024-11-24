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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import StakeLucaxDialog from "../stake/parts/StakeLucaxDialog";
import "./parts/producer-panel.css";

const VaultProducerList = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedReferrer, setSelectedReferrer] = useState("");

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

  const handleJoinClick = (name) => {
    setSelectedReferrer(name);
    setDialogOpen(true);
  };

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box className="producer-panel-container">
        <Typography variant="h6" className="panel-title">
          Hot Vault Producer Panel
        </Typography>
        {isXs && (
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              src="/dapp/vaultProducer/arrow-right.png"
              alt="Scroll Indicator"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </Box>
        )}
        <TableContainer component={Paper} className="styled-table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="header-table-cell">Rank</TableCell>
                <TableCell className="header-table-cell">
                  Vault Producer Name
                </TableCell>
                <TableCell className="header-table-cell">Staker</TableCell>
                <TableCell className="header-table-cell">
                  Total Staked
                </TableCell>
                <TableCell className="header-table-cell">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.rank}>
                  <TableCell className="styled-table-cell">
                    {row.rank}
                  </TableCell>
                  <TableCell className="styled-table-cell">
                    {row.name}
                  </TableCell>
                  <TableCell className="styled-table-cell">
                    {row.staker}
                  </TableCell>
                  <TableCell className="styled-table-cell">
                    {row.totalStaked}
                  </TableCell>
                  <TableCell className="styled-table-cell">
                    {row.operation === "MAX" ? (
                      <Button
                        sx={{
                          color: "#FFFFFF",
                          "&.Mui-disabled": {
                            color: "#FFFFFF",
                          },
                        }}
                        className="operation-button red-button"
                        disabled
                      >
                        {row.operation}
                      </Button>
                    ) : (
                      <Button
                        className="operation-button green-button"
                        onClick={() => handleJoinClick(row.name)}
                      >
                        {row.operation}
                      </Button>
                    )}
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
      <StakeLucaxDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        referrer={selectedReferrer}
      />
    </>
  );
};

export default VaultProducerList;
