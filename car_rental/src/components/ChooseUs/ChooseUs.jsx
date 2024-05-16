import main from "..//..//Images/chooseUsMain.png";
import "./ChooseUs.css";
import { Box, Typography, Button } from "@mui/material";
import car from "..//..//Images/choose-us-car.svg";
import dollar from "..//..//Images/dollar.svg";
import dollarHand from "..//..//Images/hand-dollar.svg";

const ChooseUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Box className="main">
        <img src={main} alt="" style={{ width: "1150px", height: "500px" }} />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "140px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "110px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                fontFamily: "Rubik",
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
            >
              Best valued deals you <br /> will ever find
            </Typography>
            <p
              style={{
                color: "#706f7b",
                fontFamily: "Rubik",
                fontSize: "1.1rem",
                lineHeight: "1.5",
                marginBottom: "20px",
              }}
            >
              Discover the best deals you'll ever find with our unbeatable
              offers. <br /> We're dedicated to providing you with the best
              value for your <br /> money, so you can enjoy top-quality services
              and products without <br />
              breaking the bank. Our deals are designed to give you the ultimate{" "}
              <br /> renting experience, so don't miss out on your chance to
              save big.
            </p>
            <Button
              variant="contained"
              style={{
                backgroundColor: "rgb(3, 165, 251)",
                textTransform: "none",
                width: "160px",
                height: "50px",
                fontWeight: "bold",
                fontSize: "15px",
              }}
              onClick={scrollToTop}
            >
              Find Details
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={car}
                style={{ width: "90px", height: "120px", marginRight: "20px" }}
                alt=""
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", fontSize: "27px" }}
                >
                  Cross Country Drive
                </Typography>
                <p
                  style={{
                    color: "#706f7b",
                    lineHeight: "1.3",
                    fontSize: "1rem",
                  }}
                >
                  Take your driving experience to the next <br /> level with our
                  top-notch vehicles for your <br /> cross-country adventures.
                </p>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "15px",
                marginTop: "30px",
              }}
            >
              <img
                src={dollar}
                style={{ width: "90px", height: "120px", marginRight: "20px" }}
                alt=""
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", fontSize: "27px" }}
                >
                  All Inclusive Pricing
                </Typography>
                <p
                  style={{
                    color: "#706f7b",
                    lineHeight: "1.3",
                    fontSize: "1rem",
                  }}
                >
                  Get everything you need in one convenient, <br /> transparent
                  price with our all-inclusive <br /> pricing policy.
                </p>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "0px",
                marginTop: "30px",
              }}
            >
              <img
                src={dollarHand}
                style={{ width: "90px", height: "120px", marginRight: "20px" }}
                alt=""
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", fontSize: "27px" }}
                >
                  No Hidden Charges
                </Typography>
                <p
                  style={{
                    color: "#706f7b",
                    lineHeight: "1.3",
                    fontSize: "1rem",
                  }}
                >
                  Enjoy peace of mind with our no hidden <br /> charges policy.
                  We believe in transparent <br /> and honest pricing.
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChooseUs;
