import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import main from "..//..//Images/about-main.jpg";
import car_type from "..//..//Images/car-type.svg";
import car_repair from "..//..//Images/car-repair.svg";
import car_building from "..//..//Images/car-building.svg";
import arrow from "..//..//Images/arrow-up.svg";
import Navbar from "../Navbar/Navbar";
import SaveBig from "../SaveBig/SaveBig";
import Footer from "../Footer/Footer";
import PlanTrip from "../PlanTrip/PlanTrip";

const About = () => {
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 570) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "90px",
          gap: "50px",
          marginBottom: "150px",
        }}
      >
        <img
          src={main}
          alt=""
          style={{ width: "450px", borderRadius: "15px", height: "500px" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", fontSize: "47px", fontFamily: "Poppins" }}
          >
            Start the engine <br /> and the adventure <br /> begins
          </Typography>
          <p
            style={{
              color: "#706f7b",
              fontFamily: "Rubik",
              fontSize: "1.1rem",
            }}
          >
            Embark on your journey with CAR-Rental, where every turn <br />{" "}
            leads to new possibilities. Our rental car service puts you in{" "}
            <br /> the driver's seat of your adventure. With a fleet of vehicles{" "}
            <br /> ready to go, from sleek sedans to spacious SUVs, we cater{" "}
            <br /> to every traveler's needs. Whether you're exploring the city{" "}
            <br /> streets or venturing off the beaten path, CAR-Rental is your{" "}
            <br />
            reliable companion on the road. Start your engine and let the <br />{" "}
            exploration begin!"
          </p>

          <Box sx={{ display: "flex", gap: "70px", marginTop: "15px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <img src={car_type} alt="" style={{ width: "80px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: "#010103",
                    fontSize: "45px",
                    fontWeight: "bold",
                  }}
                >
                  20
                </span>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  <span style={{ color: "#706f7b" }}>Car</span>
                  <span style={{ color: "#706f7b" }}>Types</span>
                </Box>
              </Box>
              {showArrow && (
                <img
                  src={arrow}
                  style={{
                    width: "40px",
                    height: "40px",
                    position: "fixed",
                    right: "2%",
                    bottom: "5%",
                    cursor: "pointer",
                  }}
                  alt=""
                  onClick={scrollToTop}
                />
              )}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <img src={car_building} alt="" style={{ width: "80px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: "#010103",
                    fontSize: "45px",
                    fontWeight: "bold",
                  }}
                >
                  85
                </span>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  <span style={{ color: "#706f7b" }}>Rental</span>
                  <span style={{ color: "#706f7b" }}>Outlets</span>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <img src={car_repair} alt="" style={{ width: "80px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: "#010103",
                    fontSize: "45px",
                    fontWeight: "bold",
                  }}
                >
                  75
                </span>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  <span style={{ color: "#706f7b" }}>Repair</span>
                  <span style={{ color: "#706f7b" }}>Shops</span>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <PlanTrip />
      <SaveBig />
      <Footer />
    </Box>
  );
};

export default About;
