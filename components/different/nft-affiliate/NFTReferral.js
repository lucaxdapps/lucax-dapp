import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background:
    "linear-gradient(102.49deg, rgb(16, 16, 16) 4.28%, rgb(36, 36, 36) 61.94%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "20px",
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
    padding: "8px",
    color: "#fff",
  },
  width: "100%", // Full width
}));

const NFTReferral = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FormContainer>
      {isXs ? (
        <Box sx={{ display: "flex", flex: 1, alignItems: "flex-start" }}>
          <Box item>
            <Box
              sx={{
                padding: "10px",
                width: "100%",
              }}
            >
              <Typography variant="h6" sx={{ color: "#FFA500" }}>
                Personal Enrolled
              </Typography>
              <Typography variant="body1">12</Typography>
            </Box>
            <Box
              sx={{
                padding: "10px",
                width: "100%",
              }}
            >
              <Typography variant="h6" sx={{ color: "#FFA500" }}>
                Total Members / Actives
              </Typography>
              <Typography variant="body1">
                25 /{" "}
                <span variant="h6" style={{ color: "#FFA500" }}>
                  20
                </span>
              </Typography>
            </Box>
          </Box>
          <Tooltip title="Info">
            <IconButton>
              <InfoIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <InfoContainer>
          <Box>
            <Typography variant="h5" sx={{ color: "#FFA500" }}>
              Personal Enrolled
            </Typography>
            <Typography variant="h6">12</Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ color: "#FFA500" }}>
              Total Members / Actives
            </Typography>
            <Typography variant="h6">
              25 /{" "}
              <span variant="h6" style={{ color: "#FFA500" }}>
                20
              </span>
            </Typography>
          </Box>
          <Tooltip title="Info">
            <IconButton>
              <InfoIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
          </Tooltip>
        </InfoContainer>
      )}
      <ButtonContainer>
        <StyledTextField
          variant="outlined"
          value="https://app.lucax.cc/dapp/?ref=0x347565476987605670867857"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Copy to clipboard">
                  <IconButton
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "https://app.lucax.cc/dapp/?ref=0x347565476987605670867857"
                      )
                    }
                  >
                    <ContentCopyIcon sx={{ color: "#ffa500" }} />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      </ButtonContainer>
    </FormContainer>
  );
};

export default NFTReferral;
