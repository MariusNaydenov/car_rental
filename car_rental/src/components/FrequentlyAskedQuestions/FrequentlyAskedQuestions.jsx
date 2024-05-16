import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const FrequentlyAskedQuestions = () => {
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}
      >
        FAQ
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Frequently Asked Questions
      </Typography>
      <p style={{ textAlign: "center", color: "#706f7b", fontSize: "1.2rem" }}>
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to <br /> Common Concerns and Inquiries.
      </p>

      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleAccordionChange("panel1")}
          sx={{ boxShadow: 2 }}
        >
          <AccordionSummary
            sx={{
              background: expanded === "panel1" ? "rgb(3,165,251)" : "inherit",
              color: expanded === "panel1" ? "white" : "#010103",
              boxShadow:
                expanded === "panel1" ? "0 5px 5px 0 rgba(3,165,251,.50)" : "0",
            }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              sx={{
                fontWeight: "bold",
                paddingLeft: "40px",
                padding: "5px",
                fontSize: "17px",
              }}
            >
              1. What is special about comparing rental car deals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p
              style={{
                color: "#706f7b",
                fontFamily: "Rubik",
                textAlign: "center",
                lineHeight: "1.3",
                fontSize: "1.2rem",
              }}
            >
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and <br /> requirements, ensuring you
              get the most value for your money. By comparing various options,
              <br /> you can find deals that offer lower prices, additional
              services, or better car models. You can find <br /> car rental
              deals by researching online and comparing prices from different
              rental companies.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleAccordionChange("panel2")}
          sx={{ boxShadow: 2 }}
        >
          <AccordionSummary
            sx={{
              background: expanded === "panel2" ? "rgb(3,165,251)" : "inherit",
              color: expanded === "panel2" ? "white" : "#010103",
              boxShadow:
                expanded === "panel2" ? "0 5px 5px 0 rgba(3,165,251,.50)" : "0",
            }}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography
              sx={{
                fontWeight: "bold",
                paddingLeft: "40px",
                padding: "5px",
                fontSize: "17px",
              }}
            >
              2. How do I find the car rental deals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p
              style={{
                color: "#706f7b",
                fontFamily: "Rubik",
                textAlign: "center",
                lineHeight: "1.3",
                fontSize: "1.2rem",
              }}
            >
              You can find car rental deals by researching online and comparing
              prices from different rental <br /> companies. Websites such as
              Expedia, Kayak, and Travelocity allow you to compare prices and{" "}
              <br /> view available rental options. It is also recommended to
              sign up for email newsletters and follow <br /> rental car
              companies on social media to be informed of any special deals or
              promotions.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleAccordionChange("panel3")}
          sx={{ boxShadow: 2 }}
        >
          <AccordionSummary
            sx={{
              background: expanded === "panel3" ? "rgb(3,165,251)" : "inherit",
              color: expanded === "panel3" ? "white" : "#010103",
              boxShadow:
                expanded === "panel3" ? "0 5px 5px 0 rgba(3,165,251,.50)" : "0",
            }}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography
              sx={{
                fontWeight: "bold",
                paddingLeft: "40px",
                padding: "5px",
                fontSize: "17px",
              }}
            >
              3. How do I find such low rental car prices?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p
              style={{
                color: "#706f7b",
                fontFamily: "Rubik",
                textAlign: "center",
                lineHeight: "1.3",
                fontSize: "1.2rem",
              }}
            >
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. <br /> Compare prices from multiple
              companies: Use websites like Kayak, Expedia, or Travelocity to{" "}
              <br /> compare prices from multiple rental car companies. Look for
              discount codes and coupons: <br /> Search for discount codes and
              coupons that you can use to lower the rental price. Renting from{" "}
              <br /> an off-airport location can sometimes result in lower
              prices.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
};

export default FrequentlyAskedQuestions;
