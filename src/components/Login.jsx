import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    emailId: "milan@gmail.com",
    password: "Milan@123",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5500/login", formData);
      const data = await res.data.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center my-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          name="emailId"
          value={formData.emailId}
          onChange={handleChange}
          className="input"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input"
          placeholder="Password"
        />

        <button type="button" className="btn btn-neutral mt-4" onClick={login}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
