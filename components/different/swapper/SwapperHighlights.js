import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const OuterContainer = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "16px",
  marginBottom: theme.spacing(2),
  color: "#fff",
}));
const InnerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  color: "#fff",
}));

const LeftContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const RightContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80px",
  height: "80px",
  backgroundColor: "#000",
  borderRadius: "50%",
  marginBottom: theme.spacing(1),
}));
const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: "#000",
  borderRadius: "50%",
  marginBottom: theme.spacing(1),
}));

const StyledImage = styled("img")({
  width: "60px",
  height: "60px",
  objectFit: "contain",
});

const SwapperHighlights = () => {
  return (
    <>
      <OuterContainer>
        {/* Left Section */}
        <InnerContainer>
          <LeftContent>
            <LogoContainer>
              <StyledImage src="/dapp/swapper/logo.png" alt="Wallet Icon" />
            </LogoContainer>
            <TextContainer>
              <Typography
                variant="title1"
                sx={{
                  color: "#FFA500",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                POINT+ PRICE
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.5rem" }}
              >
                1.0000 USDC
              </Typography>
            </TextContainer>
          </LeftContent>

          {/* Right Section */}
          <RightContent>
            <StyledImage src="/dapp/swapper/wallet.png" alt="Wallet Icon" />
          </RightContent>
        </InnerContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginTop: "8px",
            textAlign: "right",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              padding: "10px",
              fontSize: "1rem",
            }}
          >
            00.00000000 POINT+
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#B3B3B3",
              fontWeight: "bold",
              padding: "10px",
              fontSize: "1rem",
            }}
          >
            Balance
          </Typography>
        </Box>
      </OuterContainer>
      <OuterContainer>
        {/* Left Section */}
        <InnerContainer>
          <LeftContent>
            <LogoContainer>
              <StyledImage src="/dapp/swapper/usdt.png" alt="Wallet Icon" />
            </LogoContainer>
            <TextContainer>
              <Typography
                variant="title1"
                sx={{
                  color: "#FFA500",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                USDT PRICE
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.5rem" }}
              >
                1.0000 USD
              </Typography>
            </TextContainer>
          </LeftContent>

          {/* Right Section */}
          <RightContent>
            <StyledImage src="/dapp/swapper/wallet.png" alt="Wallet Icon" />
          </RightContent>
        </InnerContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginTop: "8px",
            textAlign: "right",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              padding: "10px",
              fontSize: "1rem",
            }}
          >
            00.00000000 USDT
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#B3B3B3",
              fontWeight: "bold",
              padding: "10px",
              fontSize: "1rem",
            }}
          >
            Balance
          </Typography>
        </Box>
      </OuterContainer>
      <OuterContainer>
        {/* Left Section */}
        <InnerContainer>
          <LeftContent>
            <LogoContainer>
              <StyledImage src="/dapp/swapper/binance.png" alt="Wallet Icon" />
            </LogoContainer>
            <TextContainer>
              <Typography
                variant="title1"
                sx={{
                  color: "#FFA500",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                BNB PRICE
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.5rem" }}
              >
                600.000000 USDT
              </Typography>
            </TextContainer>
          </LeftContent>

          {/* Right Section */}
          <RightContent>
            <StyledImage src="/dapp/swapper/wallet.png" alt="Wallet Icon" />
          </RightContent>
        </InnerContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginTop: "8px",
            textAlign: "right",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              padding: "10px",
              fontSize: "1rem",
            }}
          >
            00.00000000 BNB
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#B3B3B3",
              fontWeight: "bold",
              padding: "10px",
              fontSize: "1rem",
            }}
          >
            Balance
          </Typography>
        </Box>
      </OuterContainer>
    </>
  );
};

export default SwapperHighlights;
