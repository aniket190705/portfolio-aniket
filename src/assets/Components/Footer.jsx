import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Footer.css";

const Footer = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setSent(true);
      console.log(result.message, isSubmitting);
    } catch (error) {
      console.error("Error sending email:", error);
      setError(true);
    }
  };

  return (
    <footer>
      <div className="footer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="first">
            <div className="name">
              <input
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </div>

            <br />
            <div className="email">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
          </div>

          <br />
          <input
            className="textarea"
            type="textarea"
            placeholder="Message"
            {...register("msg", { required: true })}
          />

          <br />
          <br />
          {sent
            ? ""
            : (errors.msg || errors.email || errors.name) && (
                <span className="error">
                  <img
                    src="src/assets/images/alert.png"
                    width={"20px"}
                    height={"20px"}
                    alt=""
                  />
                  <p>All fields are requried</p>
                </span>
              )}
          {errors.msg || errors.email || errors.name
            ? ""
            : sent && (
                <span className="submitted">
                  <img
                    src="src/assets/images/check.png"
                    width={"30px"}
                    alt=""
                  />
                  <p>Submitted Successfully!</p>
                </span>
              )}
          {sent
            ? ""
            : error && (
                <span className="server-error">
                  <img
                    src="src/assets/images/caution.png"
                    width={"30px"}
                    alt=""
                  />
                  <p>Error Submitting. Please try again</p>
                </span>
              )}
          <br />
          <br />
          <div className="submit-button">
            <button
              disabled={isSubmitting}
              style={isSubmitting ? { backgroundColor: "#0f8745" } : {}}
              type="submit"
            >
              <p>Submit</p>
              <img
                src="src/assets/images/paper-plane.png"
                width={"30px"}
                alt=""
              />
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
