import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup
    console.log("Registering user...");
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
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            <label
              htmlFor="name"
              style={{
                color: "#757575",
                fontSize: "14px",
                fontFamily: "Poppins",
                marginBottom: "5px",
              }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              marginBottom: "10px",
            }}
          >
            <label
              htmlFor="email"
              style={{
                color: "#757575",
                fontSize: "14px",
                fontFamily: "Poppins",
                marginBottom: "5px",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Sign Up
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
          Already have an account?
          <Link
            to="/login"
            style={{
              color: "#FFC107",
              textDecoration: "none",
              transition: "color 0.2s ease-in-out",
            }}
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Signup;
