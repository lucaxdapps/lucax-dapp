import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: theme.spacing(2),
  color: "#fff",
  width: "100%",
  maxWidth: "1200px",
  marginBottom: theme.spacing(2),
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  justifyContent: "space-between",
}));

const InfoIconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  width: "100%",
  marginTop: theme.spacing(2),
  "& .MuiButton-root": {
    position: "absolute",
    right: 0,
    height: "100%",
    borderRadius: "20px",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  background:
    "linear-gradient(270.69deg, rgb(33, 33, 33) 22.1%, rgb(61, 61, 61) 100%)",
  boxShadow:
    "rgba(0, 0, 0, 0.5) 0px 4px 10px, rgba(255, 255, 255, 0.25) 0px 2px 4px inset",
  borderRadius: "20px",
  "& .MuiOutlinedInput-root": {
    paddingRight: 0,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  width: "100%",
}));

const Vault = () => (
  <FormContainer>
    <InfoContainer>
      <Box>
        <Typography variant="h6" sx={{ color: "#FFA500" }}>
          Your Vault Producer
        </Typography>
        <Typography variant="body1">Mining Latam Global</Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ color: "#FFA500" }}>
          Total Staked
        </Typography>
        <Typography variant="body1">$ 1,000,000,000,000</Typography>
      </Box>
      <Tooltip title="Info">
        <IconButton>
          <InfoIcon sx={{ color: "#FFA500" }} />
        </IconButton>
      </Tooltip>
    </InfoContainer>
    <ButtonContainer>
      <StyledTextField
        variant="outlined"
        placeholder="0.00"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ffa500",
                  color: "#fff",
                  borderRadius: "0 20px 20px 0",
                  height: "100%",
                  "&:hover": {
                    backgroundColor: "#dda500",
                  },
                }}
              >
                CONFIRM
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </ButtonContainer>
  </FormContainer>
);

export default Vault;
