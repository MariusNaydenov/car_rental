import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import TEAM_MEMBERS from "..//..//services/team.js";
import SaveBig from "../SaveBig/SaveBig";
import Footer from "../Footer/Footer";

const Team = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Typography
          variant="h3"
          sx={{
            fontFamily: "fantasy",
            color: "#394E6A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "40px",
          }}
        >
          Our Team
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,300px)",
            gap: "80px",
            rowGap: "170px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "150px",
          }}
        >
          {TEAM_MEMBERS.map((member, index) => {
            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#f3f4f6",
                  width: "320px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "397px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img src={member.image} alt="" width="320px" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: 4,
                    width: "320px",
                    padding: "35px 0px",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      fontFamily: "Poppins,sans-serif",
                      marginBottom: "5px",
                    }}
                  >
                    {member.name}
                  </span>
                  <span style={{ color: "#777777", fontWeight: "bold" }}>
                    {member.title}
                  </span>
                </Box>
              </Box>
            );
          })}
        </Box>
        <SaveBig />
        <Footer />
      </Box>
    </>
  );
};

export default Team;
