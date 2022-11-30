import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handlelick = () => {
    navigate("/register");
  };
  const handleLougout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div style={{ backgroundColor: "gray" }}>
      <Button variant="primary" onClick={handlelick}>
        Register
      </Button>{" "}
      {token && (
        <Button variant="danger" onClick={handleLougout}>
          lougout
        </Button>
      )}
    </div>
  );
}

export default Navbar;
