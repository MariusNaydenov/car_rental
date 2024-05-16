import { NavLink, useNavigate } from "react-router-dom";
import icon from "..//../Images/car_suv.svg";
import { Box, Button } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  const mouseOverLink = (e) => {
    e.currentTarget.style.fontSize = "600";
    e.currentTarget.style.color = "rgb(3,165,251)";
  };

  const mouseOutLink = (e) => {
    e.currentTarget.style.fontSize = "500";
    e.currentTarget.style.color = "black";
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginLeft: "135px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img
          src={icon}
          style={{
            width: "90px",
            height: "70px",
            marginRight: "15px",
          }}
          alt=""
          onClick={() => navigate("/")}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "25px",
              color: "rgb(3,165,251)",
              fontWeight: "600",
            }}
            onClick={() => navigate("/")}
          >
            CAR
          </span>
          <span
            style={{ fontSize: "20px", fontWeight: "600" }}
            onClick={() => navigate("/")}
          >
            Rental
          </span>{" "}
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "17px",
          }}
          id="Home"
          onMouseOver={mouseOverLink}
          onMouseOut={mouseOutLink}
        >
          Home
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "17px",
          }}
          id="About"
          to="/About"
          onMouseOver={mouseOverLink}
          onMouseOut={mouseOutLink}
        >
          About
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",

            color: "black",
            fontSize: "17px",
          }}
          onMouseOver={mouseOverLink}
          onMouseOut={mouseOutLink}
          to="/Vehicle-Models"
          id="Vehicle Models"
        >
          Vehicle Models
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "17px",
          }}
          id="Testimonials"
          onMouseOver={mouseOverLink}
          onMouseOut={mouseOutLink}
          to="/Testimonials"
        >
          Testimonials
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "17px",
          }}
          onMouseOver={mouseOverLink}
          onMouseOut={mouseOutLink}
          to="/Our-Team"
          id="Our Team"
        >
          Our Team
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "17px",
          }}
          onMouseOver={mouseOverLink}
          onMouseOut={mouseOutLink}
          to="/Contact"
          id="Contact"
        >
          Contact
        </NavLink>
      </Box>
      <Box sx={{ marginRight: "150px", display: "flex", gap: "10px" }}>
        <Button
          variant="outlined"
          style={{
            color: "rgb(3, 165, 251)",
            border: "1px solid rgb(3, 165, 251)",
            textTransform: "none",
          }}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(3, 165, 251)",
            textTransform: "none",
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
