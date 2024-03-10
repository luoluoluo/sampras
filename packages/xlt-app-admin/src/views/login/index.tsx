import LoginForm from "./components/LoginForm";
import loginLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";
import "./index.less";

const Login = () => {
  return (
    <div className="login-container relative">
      <div className="login-box">
        <div className="login-left">
          <img src={loginLeft} alt="login" />
        </div>
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src={logo} alt="logo" />
            <span className="logo-text">Admin</span>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className=" absolute bottom-5 text-gray-500 text-sm flex items-center gap-4">
        <span>© {new Date().getFullYear()} SAMPRAS</span>
      </div>
    </div>
  );
};

export default Login;
