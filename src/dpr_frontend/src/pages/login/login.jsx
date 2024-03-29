import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login
    console.log("Logging in...");
  };

  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            color: "#4CAF50",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            fontSize: "24px",
            fontFamily: "Roboto",
            marginBottom: "20px",
            textAlign: "center"
          }}
        >
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            <label
              htmlFor="username"
              style={{
                color: "#757575",
                fontSize: "14px",
                fontFamily: "Poppins",
                marginBottom: "5px",
              }}
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                backgroundColor: "#fff",
                outline: "none",
                fontFamily: "Poppins",
              }}
            />
            <div
              style={{
                height: "1px",
                backgroundColor: "#ddd",
              }}
            />
          </div>
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <label
              htmlFor="password"
              style={{
                color: "#757575",
                fontSize: "14px",
                fontFamily: "Poppins",
                marginBottom: "5px",
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                backgroundColor: "#fff",
                outline: "none",
                fontFamily: "Poppins",
              }}
            />
            <div
              style={{
                height: "1px",
                backgroundColor: "#ddd",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              borderRadius: 12,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "background-color 0.2s ease-in-out",
            }}
          >
            Login
          </button>
        </form>
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#757575",
            fontSize: "14px",
            fontFamily: "Poppins",
          }}
        >
          Not registered yet?
          <Link
            to="/signup"
            style={{
              color: "#FFC107",
              textDecoration: "none",
              transition: "color 0.2s ease-in-out",
            }}
          >
            Sign Up
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
