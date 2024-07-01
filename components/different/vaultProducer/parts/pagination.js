import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import "./pagination.css";

const PaginationComponent = ({ count, page, onPageChange }) => {
  return (
    <Box className="pagination-container">
      <Pagination
        count={count}
        page={page}
        onChange={onPageChange}
        renderItem={(item) => (
          <PaginationItem {...item} className="pagination-item" />
        )}
      />
    </Box>
  );
};

export default PaginationComponent;
