import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Typography, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import infoIcon from "..//..//Images/information.svg";
import locationIcon from "..//..//Images/location.svg";
import dayjs from "dayjs";
import CAR_DATA from "..//..//services/carData.js";

const BookCar = () => {
  const [pickUpDate, setPickupDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);
  const [carType, setCarType] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [requiredFieldsMessage, setRequiredFieldMessage] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [checkEmailMessage, setCheckEmailMessage] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleReservation = () => {
    setCheckEmailMessage(true);
    setOpen(false);
  };

  const handleSearch = () => {
    if (
      !pickUpDate ||
      !dropOffDate ||
      !carType ||
      !pickUpLocation ||
      !dropOffLocation
    ) {
      setRequiredFieldMessage(true);
    } else {
      setOpen(true);
      setRequiredFieldMessage(false);
    }
  };

  const handlePickUpDate = (newDate) => {
    setPickupDate(newDate);
  };

  const handleDropOffDate = (newDate) => {
    setDropOffDate(newDate);
  };

  const handlePickUpLocation = (e) => {
    setPickUpLocation(e.target.value);
  };

  const handleDropOffLocation = (e) => {
    setDropOffLocation(e.target.value);
  };

  const handleCarType = (e) => {
    setCarType(e.target.value);
  };

  return (
    <Box
      sx={{
        boxShadow: 5,
        width: "81%",
        display: "flex",
        marginBottom: "200px",
        borderRadius: "15px",
        flexDirection: "column",
        padding: "30px",
        fontFamily: "Poppins",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "15px" }}
      >
        Book a car
      </Typography>
      {requiredFieldsMessage && (
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#f8d7da",
            padding: "15px",
            justifyContent: "space-between",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >
          <span style={{ color: "#721c24", fontWeight: "bold" }}>
            All fields are required
          </span>
          <span
            style={{ color: "#721c24", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => setRequiredFieldMessage(false)}
          >
            x
          </span>
        </Box>
      )}
      {checkEmailMessage && (
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#c3fabe",
            padding: "15px",
            justifyContent: "space-between",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >
          <span style={{ color: "#2a6817", fontWeight: "bold" }}>
            Check your email to confirm the order
          </span>
          <span
            style={{ color: "#2a6817", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => setCheckEmailMessage(false)}
          >
            x
          </span>
        </Box>
      )}
      <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <FormControl sx={{ width: "33%" }}>
          <InputLabel id="demo-simple-select-label">
            Select Your Car Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Your Car Type"
            onChange={(e) => handleCarType(e)}
            value={carType}
          >
            <MenuItem value="Audi A1 S-Line">Audi A1 S-Line</MenuItem>
            <MenuItem value="VW Golf 6">VW Golf 6</MenuItem>
            <MenuItem value="Toyota Camry">Toyota Camry</MenuItem>
            <MenuItem value="BMW 320 ModernLine">BMW 320 ModernLine</MenuItem>
            <MenuItem value="Mercedes-Benz GLK"> Mercedes-Benz GLK</MenuItem>
            <MenuItem value="VW Passat CC">VW Passat CC</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "33%" }}>
          <InputLabel id="demo-simple-select-label">
            Select pick up location
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select pick up location"
            value={pickUpLocation}
            onChange={handlePickUpLocation}
          >
            <MenuItem value="Haskovo">Haskovo</MenuItem>
            <MenuItem value="Sofia">Sofia</MenuItem>
            <MenuItem value="Plovdiv">Plovdiv</MenuItem>
            <MenuItem value="Varna">Varna</MenuItem>
            <MenuItem value="Burgas">Burgas</MenuItem>
            <MenuItem value="Stara Zagora">Stara Zagora</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "33%" }}>
          <InputLabel id="demo-simple-select-label">
            Select drop off location
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select drop off location"
            value={dropOffLocation}
            onChange={handleDropOffLocation}
          >
            <MenuItem value="Haskovo">Haskovo</MenuItem>
            <MenuItem value="Sofia">Sofia</MenuItem>
            <MenuItem value="Plovdiv">Plovdiv</MenuItem>
            <MenuItem value="Varna">Varna</MenuItem>
            <MenuItem value="Burgas">Burgas</MenuItem>
            <MenuItem value="Stara Zagora">Stara Zagora</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer sx={{ width: "33%" }} components={["DatePicker"]}>
            <DatePicker
              label="Pick-up date"
              sx={{ width: "100%" }}
              onChange={handlePickUpDate}
              value={pickUpDate}
            />
          </DemoContainer>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer sx={{ width: "33%" }} components={["DatePicker"]}>
            <DatePicker
              label="Drop-off date"
              sx={{ width: "99%" }}
              onChange={handleDropOffDate}
              value={dropOffDate}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(3, 165, 251)",
            textTransform: "none",
            width: "33%",
            height: "55px",
            marginTop: "7px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 800,
              bgcolor: "background.paper",
              border: "2px solid rgb(255,255,255)",
              boxShadow: 24,
              p: 0,
              overflow: "auto",
              height: "95%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "rgb(3,165,251)",
                alignItems: "center",
                padding: "10px 0px 10px 10px",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                COMPLETE RESERVATION
              </Typography>
              <Button onClick={() => setOpen(false)}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", cursor: "pointer" }}
                >
                  X
                </Typography>
              </Button>
            </Box>
            <Box sx={{ width: "100%", backgroundColor: "rgb(103, 215, 255)" }}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  color: "white",
                  paddingTop: "15px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
                component="h2"
              >
                <img
                  src={infoIcon}
                  style={{
                    width: "20px",
                    marginRight: "5px",
                  }}
                  alt=""
                />
                Upon completing this reservation enquiry, you will receive:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  paddingBottom: "15px",
                  paddingTop: "5px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  marginLeft: "25px",
                }}
              >
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free <br /> customer support number.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  marginTop: "30px",
                  marginLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "220px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Georgia",
                    fontSize: "18px",
                    color: "rgb(3,165,251)",
                  }}
                >
                  Location & Date
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Georgia",
                    fontSize: "18px",
                  }}
                >
                  Car -{" "}
                  <span style={{ color: "rgb(3,165,251)" }}>{carType}</span>
                </Typography>
              </Box>
            </Box>

            <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  marginTop: "10px",
                  marginLeft: "26px",
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "130px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Georgia",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={locationIcon}
                    style={{
                      width: "20px",
                      height: "18px",
                      marginRight: "5px",
                    }}
                    alt=""
                  />
                  Pick-Up Date & Time
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "25px",
                    color: "#777777",
                    marginBottom: "25px",
                  }}
                >
                  {dayjs(pickUpDate).date()}-{dayjs(pickUpDate).month() + 1}-
                  {dayjs(pickUpDate).year()} /{" "}
                  <input style={{ marginLeft: "8px" }} type="time" />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Georgia",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={locationIcon}
                    style={{
                      width: "20px",
                      height: "18px",
                      marginRight: "5px",
                    }}
                    alt=""
                  />
                  Drop-Off Date & Time
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "25px",
                    color: "#777777",
                    display: "flex",
                    marginBottom: "25px",
                  }}
                >
                  {dayjs(dropOffDate).date()}-{dayjs(dropOffDate).month() + 1}-
                  {dayjs(dropOffDate).year()} /{" "}
                  <input style={{ marginLeft: "10px" }} type="time" />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Georgia",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={locationIcon}
                    style={{
                      width: "20px",
                      height: "18px",
                      marginRight: "5px",
                    }}
                    alt=""
                  />
                  Pick-Up Location
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "25px",
                    color: "#777777",
                    display: "flex",
                    marginBottom: "25px",
                  }}
                >
                  {pickUpLocation}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Georgia",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={locationIcon}
                    style={{
                      width: "20px",
                      height: "18px",
                      marginRight: "5px",
                    }}
                    alt=""
                  />
                  Drop-Off Location
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "25px",
                    color: "#777777",
                    display: "flex",
                    marginBottom: "25px",
                  }}
                >
                  {dropOffLocation}
                </Typography>
              </Box>
              <Box>
                {" "}
                {CAR_DATA.map((car) => {
                  if (car.name === carType) {
                    return (
                      <img
                        src={car.image}
                        style={{ width: "370px", marginTop: "10px" }}
                        alt=""
                      />
                    );
                  }
                })}
              </Box>
            </Box>
            <div style={{ borderTop: "1px solid black", width: "100%" }}></div>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "rgb(3,165,251)",
                marginLeft: "30px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Personal Information
            </Typography>

            <Box
              sx={{
                display: "flex",
                marginLeft: "30px",
                gap: "26px",
                fontFamily: "Poppins",
                marginBottom: "25px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <span
                  style={{
                    color: "#777777",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  First Name{" "}
                  <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
                </span>
                <input
                  type="text"
                  style={{
                    outline: "none",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#555",
                    padding: "12px 13px",
                    border: "none",
                    backgroundColor: "#dbdbdb",
                    marginBottom: "5px",
                  }}
                  placeholder="Enter your first name"
                />
                <span style={{ fontSize: "10px" }}>
                  This field is required.
                </span>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <span
                  style={{
                    color: "#777777",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  Last Name{" "}
                  <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
                </span>
                <input
                  type="text"
                  style={{
                    outline: "none",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#555",
                    padding: "12px 13px",
                    border: "none",
                    backgroundColor: "#dbdbdb",
                    marginBottom: "5px",
                  }}
                  placeholder="Enter your last name"
                />
                <span style={{ fontSize: "10px" }}>
                  This field is required.
                </span>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginLeft: "30px",
                gap: "26px",
                fontFamily: "Poppins",
                marginBottom: "25px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <span
                  style={{
                    color: "#777777",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  Phone Number{" "}
                  <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
                </span>
                <input
                  type="text"
                  style={{
                    outline: "none",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#555",
                    padding: "12px 13px",
                    border: "none",
                    backgroundColor: "#dbdbdb",
                    marginBottom: "5px",
                  }}
                  placeholder="Enter your phone number"
                />
                <span style={{ fontSize: "10px" }}>
                  This field is required.
                </span>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <span
                  style={{
                    color: "#777777",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  Age{" "}
                  <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
                </span>
                <input
                  type="number"
                  style={{
                    outline: "none",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#555",
                    padding: "12px 13px",
                    border: "none",
                    backgroundColor: "#dbdbdb",
                    marginBottom: "5px",
                  }}
                  placeholder="18"
                />
                <span style={{ fontSize: "10px" }}>
                  This field is required.
                </span>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginLeft: "30px",
                gap: "26px",
                fontFamily: "Poppins",
                marginBottom: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "93.5%",
                }}
              >
                <span
                  style={{
                    color: "#777777",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  Email{" "}
                  <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
                </span>
                <input
                  type="email"
                  style={{
                    outline: "none",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#555",
                    padding: "12px 13px",
                    border: "none",
                    backgroundColor: "#dbdbdb",
                    marginBottom: "5px",
                  }}
                  placeholder="Enter your email address"
                />
                <span style={{ fontSize: "10px" }}>
                  This field is required.
                </span>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginLeft: "30px",
                gap: "26px",
                fontFamily: "Poppins",
                marginBottom: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "93.5%",
                }}
              >
                <span
                  style={{
                    color: "#777777",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  Address{" "}
                  <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
                </span>
                <input
                  type="email"
                  style={{
                    outline: "none",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#555",
                    padding: "12px 13px",
                    border: "none",
                    backgroundColor: "#dbdbdb",
                    marginBottom: "5px",
                  }}
                  placeholder="Enter your street address"
                />
                <span style={{ fontSize: "10px" }}>
                  This field is required.
                </span>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginLeft: "30px",
                gap: "26px",
                fontFamily: "Poppins",
                marginBottom: "25px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <span
                  style={{
                    color: "#777777",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  City{" "}
                  <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
                </span>
                <input
                  type="text"
                  style={{
                    outline: "none",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#555",
                    padding: "12px 13px",
                    border: "none",
                    backgroundColor: "#dbdbdb",
                    marginBottom: "5px",
                  }}
                  placeholder="Enter your city"
                />
                <span style={{ fontSize: "10px" }}>
                  This field is required.
                </span>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "45%" }}
              >
                <span
                  style={{
                    color: "#777777",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  Zip Code{" "}
                  <span style={{ color: "#ff4d30", fontSize: "20px" }}>*</span>
                </span>
                <input
                  type="text"
                  style={{
                    outline: "none",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#555",
                    padding: "12px 13px",
                    border: "none",
                    backgroundColor: "#dbdbdb",
                    marginBottom: "5px",
                  }}
                  placeholder="Enter your zip code"
                />
                <span style={{ fontSize: "10px" }}>
                  This field is required.
                </span>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginLeft: "26px",
                gap: "5px",
                fontFamily: "Poppins",
                marginBottom: "25px",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                style={{ width: "15px", height: "15px" }}
                name=""
                id=""
              />
              <span style={{ color: "#565454" }}>
                Please send me latest news and updates
              </span>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginLeft: "26px",
                gap: "5px",
                fontFamily: "Poppins",
                marginBottom: "25px",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {" "}
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgb(3, 165, 251)",
                  textTransform: "none",
                  marginRight: "49px",
                  width: "140px",
                  height: "50px",
                }}
                onClick={handleReservation}
              >
                Reserve
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default BookCar;
