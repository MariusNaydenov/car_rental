import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import bill from "..//..//Images/bill.jpg";
import mark from "..//..//Images/mark.jpg";
import quote from "..//..//Images/quote.svg";
import SaveBig from "../SaveBig/SaveBig";
import Footer from "../Footer/Footer";

const Testimonials = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Reviews by people
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Client's Testimonials
          </Typography>
          <p
            style={{
              color: "#706f7b",
              textAlign: "center",
              fontFamily: "Rubik, sans-serif",
            }}
          >
            Discover the positive impact we've made on the our clients by
            reading through their <br /> testimonials. Our clients have
            experienced our service and results, and they're eager to share{" "}
            <br /> their positive experiences with you.
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              boxShadow: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "500px",
              height: "300px",
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                color: "#010103",
                fontFamily: "Poppins,sans-serif",
                fontSize: "19px",
                fontWeight: "bold",
              }}
            >
              "We rented a car from this website and <br /> had an amazing
              experience! The <br /> booking was easy and the rental rates{" "}
              <br /> were very affordable. "
            </span>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={bill}
                  alt=""
                  style={{ borderRadius: "50%", width: "80px", height: "80px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    gap: "5px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    Bill Gates
                  </span>
                  <span style={{ color: "#010103" }}>Washington D.C.</span>
                </Box>
              </Box>
              <img src={quote} alt="" />
            </Box>
          </Box>

          <Box
            sx={{
              boxShadow: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "500px",
              height: "300px",
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                color: "#010103",
                fontFamily: "Poppins,sans-serif",
                fontSize: "19px",
                fontWeight: "bold",
              }}
            >
              "The car was in great condition and <br /> made our trip even
              better. Highly <br /> recommend for this car rental website!"
            </span>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={mark}
                  alt=""
                  style={{ borderRadius: "50%", width: "80px", height: "80px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    gap: "5px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    Mark Zuckerberg
                  </span>
                  <span style={{ color: "#010103" }}>
                    Los Angeles, California
                  </span>
                </Box>
              </Box>
              <img src={quote} alt="" />
            </Box>
          </Box>
        </Box>
        <SaveBig />
        <Footer />
      </Box>
    </>
  );
};

export default Testimonials;
