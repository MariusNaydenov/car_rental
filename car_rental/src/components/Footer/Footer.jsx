import { Box, Button, Typography } from "@mui/material";
import phone from "..//..//Images/phone.svg";
import letter from "..//..//Images/letter.svg";
import { NavLink } from "react-router-dom";

const companyOptions = ["New York", "Careers", "Mobile", "Blog", "How we work"];

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: "90px",
        marginBottom: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: "123px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "rgb(3,165,251)" }}
          >
            CAR{" "}
            <span style={{ color: "black", fontWeight: "500" }}>Rental</span>
          </Typography>
          <p style={{ color: "#706f7b", fontSize: "1.1rem" }}>
            We offers a big range of vehicles for <br /> all your driving needs.
            We have the <br />
            perfect car to meet your needs.
          </p>
          <NavLink
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
          >
            <img src={phone} alt="" style={{ width: "27px" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              (123) -456-789
            </Typography>
          </NavLink>

          <NavLink
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
              marginTop: "10px",
            }}
          >
            <img src={letter} alt="" style={{ width: "27px" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              car_rental_bulgaria@gmail.com
            </Typography>
          </NavLink>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "15px" }}
          >
            COMPANY
          </Typography>
          {companyOptions.map((option) => {
            return (
              <span
                key={option}
                style={{ cursor: "pointer", marginBottom: "13px" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "rgb(3,165,251)")
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "black")}
              >
                {option}
              </span>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "15px" }}
          >
            WORKING HOURS
          </Typography>
          <span style={{ marginBottom: "13px" }}>
            Mon - Fri: 9:00AM - 9:00PM
          </span>
          <span style={{ marginBottom: "13px" }}>Sat: 9:00AM - 19:00PM</span>
          <span style={{ marginBottom: "13px" }}>Sun: Closed</span>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "15px" }}
          >
            SUBSCRIPTION
          </Typography>
          <span style={{ fontSize: "17px", lineHeight: "1.5rem" }}>
            Subscribe your Email address for <br /> latest news & updates.
          </span>
          <input
            type="text"
            style={{
              outline: "none",
              fontWeight: "400",
              fontSize: "15px",
              color: "black",
              padding: "19px 50px",
              border: "none",
              backgroundColor: "#ececec",
              marginBottom: "5px",
              fontFamily: "Rubik",
              textAlign: "center",
              marginTop: "15px",
            }}
            placeholder="Enter Email Address"
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(3, 165, 251)",
              textTransform: "none",
              fontSize: "16px",
              height: "50px",
              marginTop: "5px",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
