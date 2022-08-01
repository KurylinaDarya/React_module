import React from "react";
import { useState } from "react";
import { useForm } from "../../../hooks/useForm";

const FormContainer = () => {
  const [loginForm, handleInputChange] = useForm({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>Forms</div>

      {/* {<input onChange={handleInputChange} value={inputValue} type="text" />}
      {<button onClick={handleSubmit}></button>} */}

      <form onSubmit={handleSubmit}>
        <p>
          Email:
          <input
            onChange={handleInputChange}
            value={loginForm.email}
            type="text"
            name="email"
          />
        </p>
        <p>
          Password:
          <input
            onChange={handleInputChange}
            value={loginForm.password}
            type="password"
            name="password"
          />
        </p>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormContainer;
