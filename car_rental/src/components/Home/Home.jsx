import Navbar from "../Navbar/Navbar";
import BookCar from "../BookCar/BookCar";
import { Box, Button, Typography } from "@mui/material";
import carIcon from "..//../Images/car-pic.jpg";
import arrow from "..//..//Images/arrow-up.svg";
import { useEffect, useState } from "react";
import PlanTrip from "../PlanTrip/PlanTrip";
import VehicleModels from "../VehicleModels/VehicleModels";
import ChooseUs from "../ChooseUs/ChooseUs";
import FrequentlyAskedQuestions from "../FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Download from "../Download/Download";
import Footer from "../Footer/Footer";
import SaveBig from "../SaveBig/SaveBig";

const Home = () => {
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

  const mouseOverLearnMoreButtonColor = (e) => {
    e.currentTarget.style.color = "black";
    e.currentTarget.style.backgroundColor = "white";
  };

  const mouseOutLearnMoreButtonColor = (e) => {
    e.currentTarget.style.color = "white";
    e.currentTarget.style.backgroundColor = "black";
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px",
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "120px",
          marginBottom: "115px",
        }}
      >
        <Box sx={{ marginRight: "80px", marginTop: "20px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Plan your trip now
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", marginBottom: "15px" }}
          >
            Save <span style={{ color: "rgb(3,165,251)" }}>big</span> with our{" "}
            <br />
            car rental
          </Typography>
          <span style={{ lineHeight: "1.5" }}>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,{" "}
            <br /> flexible pick-up options and much more.
          </span>
          <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <Button
              variant="outlined"
              style={{
                backgroundColor: "rgb(3, 165, 251)",
                color: "white",
                border: "1px solid rgb(3, 165, 251)",
                textTransform: "none",
                width: "150px",
                height: "60px",
                fontWeight: "bold",
              }}
              onClick={() => window.scrollTo({ top: 720, behavior: "smooth" })}
            >
              Book Ride
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "black",
                textTransform: "none",
                width: "150px",
                height: "60px",
                fontWeight: "bold",
              }}
              onMouseOver={(e) => mouseOverLearnMoreButtonColor(e)}
              onMouseOut={(e) => mouseOutLearnMoreButtonColor(e)}
            >
              Learn more
            </Button>
          </Box>
        </Box>
        <img src={carIcon} alt="" style={{ width: "50%" }} />
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

      <BookCar />
      <PlanTrip />
      <VehicleModels />
      <SaveBig />
      <ChooseUs />
      <FrequentlyAskedQuestions />
      <Download />
      <Footer />
    </Box>
  );
};

export default Home;
