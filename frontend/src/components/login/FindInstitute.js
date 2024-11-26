import React from "react";
import "./FindInstitute.css";
import { TextField, Button, Checkbox, FormControlLabel, Link } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";

const FindInstitute = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img
            src="https://via.placeholder.com/150" // Replace with your logo URL
            alt="Luna Logo"
            className="logo-image"
          />
          <h1 className="login-title">INTERDISCIPLINARY CURRICULUM</h1>
        </div>
        <form className="login-form">
          <div className="input-group">
            <AccountCircle className="input-icon" />
            <TextField
              id="username"
              label="Username"
              fullWidth
              size="small"
              required
            />
          </div>
          <div className="input-group">
            <Lock className="input-icon" />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              size="small"
              required
            />
          </div>
          <div className="options">
            <FormControlLabel
              control={<Checkbox />}
              label="Remember"
              className="remember-checkbox"
            />
            <Link href="#" underline="hover" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="login-button"
            sx={{
              background: "linear-gradient(to right, #6a11cb, #2575fc)",
              fontWeight: "bold",
              marginTop: "1rem",
              "&:hover": {
                background: "linear-gradient(to right, #5a0fbb, #1b64f2)",
              },
            }}
          >
            LOGIN
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FindInstitute;
