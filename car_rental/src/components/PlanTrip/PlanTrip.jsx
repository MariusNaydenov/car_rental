import driving_car from "..//..//Images/driving_car.svg";
import operator from "..//..//Images/operator.svg";
import carIcon from "..//..//Images/car_icon.svg";
import { Box, Typography } from "@mui/material";

const PlanTrip = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", fontFamily: "Georgia" }}
      >
        Plan your trip now
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", marginBottom: "70px", fontFamily: "Georgia" }}
      >
        Quick & easy car rental
      </Typography>
      <Box sx={{ display: "flex", gap: "200px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={carIcon}
            alt=""
            style={{ width: "110px", height: "110px" }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginTop: "20px", marginBottom: "10px" }}
          >
            Select Car
          </Typography>
          <span
            style={{ color: "#706f7b", fontFamily: "Rubik", fontSize: "16px" }}
          >
            {" "}
            We offers a big range of vehicles for all <br /> your driving needs.
            We have the <br /> perfect car to meet your needs.
          </span>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={operator}
            alt=""
            style={{ width: "110px", height: "110px" }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginTop: "20px", marginBottom: "10px" }}
          >
            Contact Operator
          </Typography>
          <span
            style={{ color: "#706f7b", fontFamily: "Rubik", fontSize: "16px" }}
          >
            {" "}
            Our knowledgeable and friendly <br /> operators are always ready to
            help <br />
            with any questions or concerns.
          </span>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={driving_car}
            alt=""
            style={{ width: "110px", height: "110px" }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginTop: "20px", marginBottom: "10px" }}
          >
            Let's Drive
          </Typography>
          <span
            style={{ color: "#706f7b", fontFamily: "Rubik", fontSize: "16px" }}
          >
            Whether you're hitting the open road, <br /> we've got you covered
            with our wide <br /> range of cars.
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default PlanTrip;
