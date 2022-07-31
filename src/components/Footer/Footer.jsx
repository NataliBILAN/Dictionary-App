import { Typography, Container } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Typography variant="p">
          This project was coded by Natali Bilan and is{" "}
          <a
            href="https://github.com/NataliBILAN/Dictionary-App"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://iridescent-squirrel-0667f4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            hosted on Netlify
          </a>
        </Typography>
      </Container>
    </footer>
  );
}
