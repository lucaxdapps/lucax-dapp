import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "16px",
  color: "#fff",
  width: "100%",
}));

const ScrollableContainer = styled(Box)(({ theme }) => ({
  overflowX: "auto",
  paddingBottom: "16px", // Adding padding to the bottom so the cards do not touch the scrollbar
  "&::-webkit-scrollbar": {
    height: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background:
      "linear-gradient(270.69deg, rgba(50,50,50,1) 0%, rgba(150,150,150,1) 100%)",
    borderRadius: "20px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  padding: "8px 16px",
  borderRadius: "8px",
  color: "#FFFFFF",
  fontWeight: "bold",
  marginBottom: "16px",
}));

const TierCard = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(103.67deg, rgb(16, 16, 16) 0%, rgb(36, 36, 36) 65.34%)",
  border: "1px solid rgb(60, 60, 60)",
  boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
  borderRadius: "20px",
  padding: "16px",
  margin: "0 8px",
  textAlign: "center",
  minWidth: "200px",
  "& h6": {
    backgroundColor: "#FFA500",
    borderRadius: "8px",
    padding: "8px 0",
    fontWeight: "bold",
  },
  "& p": {
    margin: "8px 0",
    fontWeight: "bold",
  },
}));

const jsonContent = [
  {
    title: "Tier: #1",
    members: "00",
    actives: "00",
    enrolledReward: "$0.00",
    membershipReward: "$0.00",
    matchReward: "$0.00",
  },
  {
    title: "Tier: #2",
    members: "00",
    actives: "00",
    enrolledReward: "$0.00",
    membershipReward: "$0.00",
    matchReward: "$0.00",
  },
  {
    title: "Tier: #3",
    members: "00",
    actives: "00",
    enrolledReward: "$0.00",
    membershipReward: "$0.00",
    matchReward: "$0.00",
  },
  {
    title: "Tier: #4",
    members: "00",
    actives: "00",
    enrolledReward: "$0.00",
    membershipReward: "$0.00",
    matchReward: "$0.00",
  },
  {
    title: "Tier: #5",
    members: "00",
    actives: "00",
    enrolledReward: "$0.00",
    membershipReward: "$0.00",
    matchReward: "$0.00",
  },
  {
    title: "Tier: #6",
    members: "00",
    actives: "00",
    enrolledReward: "$0.00",
    membershipReward: "$0.00",
    matchReward: "$0.00",
  },
  {
    title: "Tier: #7",
    members: "00",
    actives: "00",
    enrolledReward: "$0.00",
    membershipReward: "$0.00",
    matchReward: "$0.00",
  },
  {
    title: "Tier: #8",
    members: "00",
    actives: "00",
    enrolledReward: "$0.00",
    membershipReward: "$0.00",
    matchReward: "$0.00",
  },
  {
    title: "Tier: #9",
    members: "00",
    actives: "00",
    enrolledReward: "$0.00",
    membershipReward: "$0.00",
    matchReward: "$0.00",
  },
  {
    title: "Tier: #10",
    members: "00",
    actives: "00",
    enrolledReward: "$0.00",
    membershipReward: "$0.00",
    matchReward: "$0.00",
  },
];

const NFTPowerLine = () => {
  return (
    <Container>
      <Title>10 TIERS OF POWER LINE</Title>
      <ScrollableContainer>
        <Box display="flex" mt={2}>
          {jsonContent.map((tier, index) => (
            <TierCard key={index}>
              <Typography variant="h6">{tier.title}</Typography>
              <Typography variant="body1">Members</Typography>
              <Typography variant="body2">{tier.members}</Typography>
              <Typography variant="body1">Actives</Typography>
              <Typography variant="body2">{tier.actives}</Typography>
              <Typography variant="body1">Enrolled Reward</Typography>
              <Typography variant="body2">{tier.enrolledReward}</Typography>
              <Typography variant="body1">Membership Reward</Typography>
              <Typography variant="body2">{tier.membershipReward}</Typography>
              <Typography variant="body1">Match Reward</Typography>
              <Typography variant="body2">{tier.matchReward}</Typography>
            </TierCard>
          ))}
        </Box>
      </ScrollableContainer>
    </Container>
  );
};

export default NFTPowerLine;
