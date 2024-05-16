import { Box, Typography } from "@mui/material";
import "./Download.css";
import appleIcon from "..//..//Images/appstore.svg";
import googleIcon from "..//..//Images/googleapp.svg";

const Download = () => {
  return (
    <Box
      className="main-download"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column",marginLeft:'100px',gap:'15px' }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", color: "#010103", fontSize: "3rem" }}
        >
          Download our app to get <br /> most out of it
        </Typography>
        <p style={{ fontFamily: "Rubik", color: "#706f7b",fontSize:'1.1rem' }}>
          Thrown shy denote ten ladies though ask saw. Or by to he going think{" "}
          <br />
          order event music. Incommode so intention defective at convinced. Led{" "}
          <br />
          income months itself and houses you.
        </p>
        <Box sx={{ display: "flex",gap:'20px' }}>
          <img src={appleIcon} alt="" style={{ cursor: "pointer" }} />
          <img src={googleIcon} alt="" style={{ cursor: "pointer" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Download;
