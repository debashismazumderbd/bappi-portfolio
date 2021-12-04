import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./Hero.css";

const Hero = () => {
  return (
    <Box id="hero">
      <Hamburger></Hamburger>
      <div
        style={{
          backgroundColor: "#155263",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
        className="hero-section"
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              textAlign: "start",
            }}
            data-aos="fade"
          >
            <Typography
              variant="h3"
              sx={{ color: "white" }}
              className="poppins-400"
            >
              Hello, I'm Debashis Mazumder Bappi
            </Typography>
            <span className="heading-wrapper">
              <p className="heading-inside">A Web Developer</p>
            </span>
            <div className="button-regular-hero" style={{ marginTop: "15px" }}>
              <a href="/resume.pdf" target="blank" download>
                <div className="button-regular-text">Hire Me</div>
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div className="pointy-bottom"></div>
    </Box>
  );
};

export default Hero;
