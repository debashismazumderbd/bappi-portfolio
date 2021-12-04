import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, CircularProgress, Container } from "@mui/material";
import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import "./ContactMe.css";


const ContactMe = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_peyqogj",
        "template_ynli6ml",
        form.current,
        "user_aGRvmVAfOtxniRbGiM7cc"
      )
      .then(
        (result) => {
          if (result.text) {
            setSuccess(true);
          }
        },
        (error) => {
          if (error.text) {
            setError(true);
          }
        }
      )
      .finally(() => {
        setLoading(false);
      });
    e.target.reset();
  };

  return (
    <Box sx={{ mt: 20 }} id="contact-me" data-aos="fade-left">
      <div
        style={{
          backgroundColor: "#ECECEC",
          height: "10vh",
          clipPath: "polygon(0 86%, 100% 0, 100% 100%, 0 100%)",
          marginBottom: "-1px",
        }}
      ></div>
      <div style={{ backgroundColor: "#ECECEC" }}>
        <Container>
          <div class="content">
            <div class="container">
              <div class="row align-items-stretch no-gutters contact-wrap">
                <div class="col-md-8">
                  <div class="form h-100">
                    <h3>Send us a message</h3>
                    <form
                      class="mb-5"
                      method="post"
                      id="contactForm"
                      name="contactForm"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <div class="row">
                        <div class="col-md-6 form-group mb-5">
                          <label for="" class="col-form-label">
                            Name *
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div class="col-md-6 form-group mb-5">
                          <label for="" class="col-form-label">
                            Email *
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            required
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 form-group mb-5">
                          <label for="message" class="col-form-label">
                            Message *
                          </label>
                          <textarea
                            class="form-control"
                            name="message"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Write your message"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 form-group d-flex align-items-center">
                          <input
                            type="submit"
                            value="Send Message"
                            class="btn btn-primary rounded-0 py-2 px-4"
                          />
                          {loading && <CircularProgress sx={{ ml: 4 }} />}
                          <span class="submitting"></span>
                        </div>
                      </div>
                    </form>

                    {error && (
                      <div id="form-message-warning mt-4">
                        An error has occured please send your message to
                        debashismazumder.bd@gmail.com
                      </div>
                    )}
                    {success && (
                      <div id="form-message-success">
                        Your message was sent, thank you!
                      </div>
                    )}
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="contact-info h-100">
                    <h3>Contact Information</h3>
                    <ul class="list-unstyled">
                      <li class="d-flex">
                        <span class="text" style={{ color: "white" }}>
                          <LocationOnIcon /> Noakhali,
                          Bangladesh
                        </span>
                      </li>
                      <li class="d-flex">
                        <span class="text" style={{ color: "white" }}>
                          <LocalPhoneIcon /> +8801787003585
                        </span>
                      </li>
                      <li class="d-flex">
                        <span class="text" style={{ color: "white" }}>
                          <EmailIcon /> debashismazumder.bd@gmail.com
                        </span>
                      </li>
                      <li class="d-flex">
                        <a
                          target="blank"
                          href="https://www.linkedin.com/in/debashis-mazumder-bappi-1674a1157/"
                          class="text"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          <LinkedInIcon /> Debashis Mazumder Bappi
                        </a>
                      </li>
                      <li class="d-flex">
                        <a
                          target="blank"
                          href="https://github.com/debashismazumderbd"
                          class="text"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          <GitHubIcon /> Debashis Mazumder Bappi
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Box>
  );
};

export default ContactMe;
