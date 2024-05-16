import { Box, Button } from "@mui/material";
import CAR_DATA from "..//..//services/carData.js";
import Navbar from "../Navbar/Navbar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import car_vehicle_icon from "..//..//Images/car-vehicle-icon.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import SaveBig from "../SaveBig/SaveBig";
import { useEffect, useState } from "react";
import arrow from "..//..//Images/arrow-up.svg";

const CarModels = () => {
  const navigate = useNavigate();
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,300px)",
          gap: "80px",
          marginTop: "120px",
          rowGap: "100px",
        }}
      >
        {CAR_DATA.map((car) => {
          return (
            <Box
              key={car.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                width: "350px",
              }}
            >
              <img src={car.image} alt="" style={{ width: "300px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "88%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "35px",
                    marginBottom: "25px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "7px",
                    }}
                  >
                    <span
                      style={{
                        color: "#010103",
                        fontWeight: "bold",
                        fontSize: "23px",
                      }}
                    >
                      {car.name}
                    </span>

                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        defaultValue={5}
                        precision={0.5}
                      />
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "7px",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#010103",
                        fontWeight: "bold",
                        fontSize: "23px",
                      }}
                    >
                      ${car.price}
                    </span>
                    <span>per day</span>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={car_vehicle_icon}
                      alt=""
                      style={{ width: "30px" }}
                    />
                    <span style={{ color: "#777777", fontSize: "19px" }}>
                      {car.model}
                    </span>
                  </Box>
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
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#777777",
                        fontSize: "19px",
                      }}
                    >
                      {car.doors}
                    </span>
                    <img
                      src={car_vehicle_icon}
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={car_vehicle_icon}
                      alt=""
                      style={{ width: "30px" }}
                    />
                    <span style={{ color: "#777777", fontSize: "19px" }}>
                      {car.transmission}
                    </span>
                  </Box>
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
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#777777",
                        fontSize: "19px",
                      }}
                    >
                      {car.fuel}
                    </span>
                    <img
                      src={car_vehicle_icon}
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </Box>
                </Box>
              </Box>
              <hr style={{ width: "85%", marginBottom: "20px" }}></hr>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "rgb(3, 165, 251)",
                  color: "white",
                  border: "1px solid rgb(3, 165, 251)",
                  textTransform: "none",
                  width: "85%",
                  height: "60px",
                  fontWeight: "bold",
                  fontSize: "19px",
                  fontFamily: "Poppins, sans-serif",
                }}
                onClick={() => navigate("/")}
              >
                Book Ride
              </Button>
            </Box>
          );
        })}
      </Box>
      <SaveBig />
      <Footer />
    </Box>
  );
};

export default CarModels;
