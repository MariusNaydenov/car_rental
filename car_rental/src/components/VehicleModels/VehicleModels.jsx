import CAR_DATA from "..//..//services/carData.js";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const CustomButton = styled(Button)({
  "&:hover": {
    backgroundColor: "rgb(3, 165, 251)",
    color: "white",
  },
});

const VehicleModels = () => {
  const [currentCar, setCar] = useState({
    Name: "Audi A1 S-Line",
    Price: "45",
    Model: "Audi",
    Mark: "A1",
    Year: "2012",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Gasoline",
  });

  const handleOnClick = (vehicle) => {
    setCar({
      ...currentCar,
      Name: vehicle.name,
      Price: vehicle.price,
      Model: vehicle.model,
      Mark: vehicle.mark,
      Year: vehicle.year,
      Doors: vehicle.doors,
      AC: vehicle.air,
      Transmission: vehicle.transmission,
      Fuel: vehicle.fuel,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "150px",
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          fontFamily: "Rubik",
          color: "#010103",
          marginBottom: "15px",
        }}
      >
        Vehicle Models
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", fontFamily: "Poppins", color: "#010103" }}
      >
        Our rental fleet
      </Typography>
      <span
        style={{
          color: "#706f7b",
          fontFamily: "Rubik",
          textAlign: "center",
          marginTop: "15px",
          fontSize: "17px",
        }}
      >
        Choose from a variety of our amazing vehicles to rent for your next{" "}
        <br /> adventure or business trip
      </span>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: "100px",
          marginTop: "70px",
          gap: "150px",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {CAR_DATA.map((car) => {
            return (
              <Box key={car.model}>
                <CustomButton
                  sx={{
                    width: "270px",
                    height: "60px",
                    backgroundColor:
                      currentCar.Name === car.name
                        ? "rgb(3,165,251)"
                        : "#e9e9e9",
                    cursor: "pointer",
                    padding: "8px 18px",
                    display: "flex",
                    color: currentCar.Name === car.name ? "white" : "#010103",
                    fontWeight: "bold",
                    fontSize: "20px",
                    textTransform: "none",
                    borderRadius: "0px",
                    border: "none",
                  }}
                  onClick={() => handleOnClick(car)}
                >
                  {car.name}
                </CustomButton>
              </Box>
            );
          })}
        </Box>
        {CAR_DATA.map((car) => {
          if (currentCar.Name === car.name) {
            return (
              <img
                key={car.name}
                src={car.image}
                style={{ width: "500px", height: "300px", marginTop: "80px" }}
                alt=""
              />
            );
          }
        })}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "260px",
            height: "auto",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgb(3,165,251)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              width: "100%",
              height: "50px",
              border: "2px solid rgb(3,165,251)",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "27px",
                marginRight: "10px",
              }}
            >
              ${currentCar.Price}
            </span>
            <span style={{ fontSize: "20px" }}> / rent per day</span>
          </Box>
          {Object.entries(currentCar).map((characteristics, index) => {
            if (index !== 0 && index !== 1) {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    width: "100%",
                    height: "30px",
                    borderRight: "2px solid #706f7b",
                    borderBottom: "2px solid #706f7b",
                    borderLeft: "2px solid #706f7b",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    padding: "5px 0px",
                  }}
                >
                  <div
                    style={{
                      width: "30%",
                      marginLeft: "13px",
                      fontSize: "14px",
                    }}
                  >
                    {characteristics[0]}
                  </div>{" "}
                  <div style={{ width: "10%" }}>
                    <hr style={{ height: "20px", width: "0px" }} />{" "}
                  </div>
                  <div style={{ width: "40%", fontSize: "14px" }}>
                    {characteristics[1]}
                  </div>{" "}
                </Box>
              );
            }
          })}
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(3, 165, 251)",
              textTransform: "none",
              borderRadius: "0px",
              width: "263px",
              marginTop: "15px",
              height: "50px",
              fontWeight: "bold",
              fontSize: "18px",
              fontFamily: "Poppins",
              boxShadow: "6px 6px 0 #efe9e9",
            }}
            onClick={() => window.scrollTo({ top: 720, behavior: "smooth" })}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "rgb(2, 132, 201)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "rgb(3, 165, 251)")
            }
          >
            RESERVE NOW
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VehicleModels;
