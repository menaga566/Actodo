import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup({ users, setUsers }) {
  const [eusers, seteUsers] = useState("");
  const [epassword, setepassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function Adduser() {
    if (!eusers || !epassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (epassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const userExists = users.some((user) => user.username === eusers);
    if (userExists) {
      setError("User already exists.");
      return;
    }

    setUsers([...users, { username: eusers, password: epassword }]);
    setError("");
    seteUsers("");
    setepassword("");
    setConfirmPassword("");
    navigate("/");
  }

  return (
    <div className="bg-black p-10 ">
      <div className="bg-white p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey, Hii 👋</h1>
        <p>I help you manage your activities after you login 🙂</p>

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username"
            onChange={(e) => seteUsers(e.target.value)}
            value={eusers}
          />
          <input
            type="password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
            onChange={(e) => setepassword(e.target.value)}
            value={epassword}
          />
          <input
            type="password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />

          <button
            className="bg-[#FCA201] w-24 p-1 rounded-md"
            onClick={Adduser}
          >
            Signup
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <p>
            Already have an account?{" "}
            <Link to="/" className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;