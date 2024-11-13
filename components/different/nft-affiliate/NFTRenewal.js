import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
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
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "16px",
  color: "#fff",
  width: "100%",
  maxWidth: "600px",
  marginBottom: theme.spacing(2),
}));

const StyledSelectField = styled(TextField)(({ theme }) => ({
  background: "transparent",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    padding: "8px",
    color: "#fff",
  },
  minWidth: "220px", // Adjust width
  borderRadius: "20px",
  "& .MuiSvgIcon-root": {
    color: "#fff", // Make dropdown icon white
  },
  "& .MuiSelect-selectMenu": {
    backgroundColor: "rgba(33, 33, 33, 1)", // Dark background for selected value
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: "rgba(33, 33, 33, 1)", // Dark background for menu items
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(61, 61, 61, 1)", // Darker background on hover
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  background:
    "linear-gradient(270.69deg, rgb(33, 33, 33) 22.1%, rgb(61, 61, 61) 100%)",
  boxShadow:
    "rgba(0, 0, 0, 0.5) 0px 4px 10px, rgba(255, 255, 255, 0.25) 0px 2px 4px inset",
  borderRadius: "20px",
  "& .MuiOutlinedInput-root": {
    paddingRight: 0,
  },
  width: "100%",
  marginTop: theme.spacing(2),
  "& .MuiButton-root": {
    height: "100%",
    borderRadius: "20px",
  },
}));

const MembershipComponent = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FormContainer>
      {isXs ? (
        <Box
          sx={{ display: "flex", flex: 1, alignItems: "flex-start" }}
          spacing={3}
        >
          <Box item>
            <Box sx={{ padding: "10px", width: "100%" }}>
              <Typography sx={{ color: "#FFA500" }} variant="h6">
                Membership Renewal
              </Typography>
              <Typography variant="body1">
                Select membership Renewal type
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "10px",
                width: "100%",
              }}
            >
              <Typography sx={{ color: "#FFA500" }} variant="h6">
                Membership Expire
              </Typography>
              <Typography variant="h6">21/08/2024</Typography>
            </Box>
          </Box>
          <Tooltip title="Info">
            <IconButton>
              <InfoIcon style={{ color: "#FFFFFF" }} />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Grid container spacing={3}>
          <Grid item sm={5} sx={{ padding: "10px", width: "100%" }}>
            <Typography sx={{ color: "#FFA500" }} variant="h6">
              Membership Renewal
            </Typography>
            <Typography variant="body1">
              Select membership Renewal type
            </Typography>
          </Grid>
          <Grid
            item
            sm={5}
            sx={{
              padding: "10px",
              width: "100%",
            }}
          >
            <Typography sx={{ color: "#FFA500" }} variant="h6">
              Membership Expire
            </Typography>
            <Typography variant="h6">21/08/2024</Typography>
          </Grid>
          <Grid
            item
            sm={2}
            sx={{
              padding: "10px",
              width: "100%",
              textAlign: {
                xs: "left",
                sm: "right",
              },
            }}
          >
            <Tooltip title="Info">
              <IconButton>
                <InfoIcon style={{ color: "#FFFFFF" }} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      )}
      <ButtonContainer>
        <StyledSelectField
          select
          variant="outlined"
          defaultValue="OPEN - 12 Months: $149.97"
          sx={{ flex: 1, marginRight: "8px" }} // Adjusted margin to separate the dropdown and the button
          SelectProps={{
            IconComponent: ArrowDropDownCircleOutlined,
            MenuProps: {
              PaperProps: {
                sx: {
                  backgroundColor: "rgba(33, 33, 33, 1)", // Dark background for dropdown menu
                },
              },
            },
          }}
        >
          <StyledMenuItem value="OPEN - 12 Months: $149.97">
            OPEN - 12 Months: $149.97
          </StyledMenuItem>
          <StyledMenuItem value="PASS - 1 Month: $49.97">
            PASS - 1 Month: $49.97
          </StyledMenuItem>
          <StyledMenuItem value="BLACK - 12 Months: $249.97">
            BLACK - 12 Months: $249.97
          </StyledMenuItem>
          <StyledMenuItem value="LUXURY - 12 Months: $299.97">
            LUXURY - 12 Months: $299.97
          </StyledMenuItem>
        </StyledSelectField>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFA500",
            color: "#fff",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#FFA500",
            },
          }}
        >
          PAY
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default MembershipComponent;
