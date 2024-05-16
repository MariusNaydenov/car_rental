import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import phone from "..//..//Images/phone.svg";
import letter from "..//..//Images/letter.svg";
import location from "..//..//Images/location.svg";
import SaveBig from "../SaveBig/SaveBig";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: 'url("/src/Images/bg-contact.png")',
        height: "100%",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <Box sx={{ display: "flex", marginTop: "90px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "0px 135px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins,sans-serif",
              marginBottom: "25px",
            }}
          >
            Need additional <br /> information?
          </Typography>
          <span
            style={{
              color: "#706f7b",
              fontFamily: "Rubik, sans-serif",
              lineHeight: "1.6",
              marginBottom: "25px",
            }}
          >
            A multifaceted professional skilled in multiple fields of <br />{" "}
            research, development as well as a learning specialist. <br /> Over
            15 years of experience.
          </span>
          <a
            href=""
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "15px",
            }}
          >
            <img
              src={phone}
              alt=""
              style={{ width: "27px", marginRight: "10px" }}
            />{" "}
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              (123) -456-789
            </Typography>
          </a>

          <a
            href=""
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "15px",
            }}
          >
            <img
              src={letter}
              alt=""
              style={{ width: "27px", marginRight: "10px" }}
            />{" "}
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              car_rental_bulgaria@gmail.com
            </Typography>
          </a>

          <a
            href=""
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            <img
              src={location}
              alt=""
              style={{ width: "27px", marginRight: "10px" }}
            />{" "}
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Sofia, Bulgaria
            </Typography>
          </a>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "black",
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Full Name{" "}
            <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
          </span>
          <input
            type="text"
            style={{
              outline: "none",
              fontWeight: "500",
              fontSize: "15px",
              color: "#555",
              padding: "19px 30px",
              width: "500px",
              border: "none",
              backgroundColor: "#dbdbdb",
              marginBottom: "20px",
            }}
            placeholder='E.g: "John doe" '
          />

          <span
            style={{
              color: "black",
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Email <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
          </span>
          <input
            type="text"
            style={{
              outline: "none",
              fontWeight: "500",
              fontSize: "15px",
              color: "#555",
              padding: "19px 30px",
              width: "500px",
              border: "none",
              backgroundColor: "#dbdbdb",
              marginBottom: "20px",
            }}
            placeholder="your_email@example.com"
          />

          <span
            style={{
              color: "black",
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Tell us about it{" "}
            <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
          </span>
          <textarea
            name=""
            placeholder="Write here..."
            style={{
              height: "150px",
              border: "none",
              backgroundColor: "#dbdbdb",
              padding: "19px 30px",
              fontSize: "1rem",
            }}
            id=""
            onFocus={(e) => (e.currentTarget.style.border = "none")}
            onBlur={(e) => (e.currentTarget.style.border = "none")}
          ></textarea>
        </Box>
      </Box>
      <SaveBig />
      <Footer />
    </Box>
  );
};

export default Contact;
