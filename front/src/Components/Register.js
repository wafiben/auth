import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const url = "http://localhost:9000/api/register";
  const [user, setUser] = useState({
    userName: "",
    age: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/profile");
      })
      .catch((e) => {
        alert(e.response.data.msg);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>UserName</Form.Label>
        <Form.Control
          type="text"
          placeholder="UserName"
          onChange={handleChange}
          name="userName"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          placeholder=" age"
          onChange={handleChange}
          name="age"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          id="formBasicPassword"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;
