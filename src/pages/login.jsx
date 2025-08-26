import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ users }) {
  const [eusers, seteUsers] = useState("");
  const [epassword, setepassword] = useState("");
  const [rustr, setrustr] = useState(true);
  const navigate = useNavigate();

  function checkuser() {
    const found = users.some(
      (item) => item.username === eusers && item.password === epassword
    );

    if (found) {
      setrustr(true);
        navigate("/landing", { state: { user: eusers } });
    } else {
      setrustr(false);
    }
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-white p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey, Hii 👋</h1>
        {rustr ? (
          <p> I help you manage your activities. You can login 🙂 </p>
        ) : (
          <p className="text-red-600">Please sign up before you login ❌</p>
        )}

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
          <button
            className="bg-[#8272DA] w-24 p-1 rounded-md"
            onClick={checkuser}
          >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
