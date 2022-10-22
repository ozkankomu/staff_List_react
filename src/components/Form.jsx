import React from "react";
import { useState, useEffect } from "react";
import Data from "./Data";

const Form = () => {
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    id: "",
    completed: false,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push({ ...form });
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    setForm({
      id: "",
      completed: false,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("data")) || [];
    setData(newData);
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            First Name: {form.firstname}
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={form.firstname}
            onChange={(e) =>
              setForm({
                ...form,
                firstname: e.target.value,
                id: Math.floor(Math.random() * 10000000000000),
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Last Name: {form.lastname}
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="firstname"
            value={form.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address: {form.email}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="firstname"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: {form.password}
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="firstname"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary" name="button">
          Submit
        </button>
      </form>
      <Data data={data} setData={setData} />
    </>
  );
};

export default Form;
