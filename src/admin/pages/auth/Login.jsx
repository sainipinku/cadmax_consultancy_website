import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "../../../assets/Images/Other/Accuracy.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@cadmax.com" && password === "admin123") {
      localStorage.setItem("isAdminAuth", "true");
      navigate("/admin", { replace: true });
      window.location.reload();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
     style={{ backgroundImage: `url(${img})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Glass Card */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 w-96 p-8 rounded-2xl
                   bg-white/10 backdrop-blur-xl
                   border border-white/20
                   shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-3 text-center text-white">
         Cadmax Consultancy  
        </h3>

        <p className=" font-bold mb-6 text-center text-white">
         Login to your Account 
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded
                     bg-white/20 text-white placeholder-white/70
                     border border-white/30 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded
                     bg-white/20 text-white placeholder-white/70
                     border border-white/30 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full py-2 rounded font-semibold
                     bg-white text-slate-900 hover:bg-slate-200 transition"
        >
          Login
        </button>
       <p className="  mb-6 text-right pt-3 cursor-pointer text-white">forgot password ?</p>
      
      </form>
    </div>
  );
};

export default Login;
