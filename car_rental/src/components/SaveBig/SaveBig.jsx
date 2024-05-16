import { Box, Typography } from "@mui/material";

const SaveBig = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#2d2d2d",
          textAlign: "center",
          padding: "4rem 0",
          marginTop: "150px",
          marginBottom: "100px",
        }}
      >
        <Typography
          sx={{ color: "white", fontWeight: "bold", marginBottom: "15px" }}
          variant="h2"
        >
          Save big with our cheap car rental!
        </Typography>
        <Typography sx={{ color: "white", fontWeight: "bold" }} variant="h5">
          Top Airports. Local Suppliers.{" "}
          <span style={{ color: "rgb(3,165,251)" }}>24/7</span> Support.
        </Typography>
      </Box>
    </>
  );
};

export default SaveBig;
