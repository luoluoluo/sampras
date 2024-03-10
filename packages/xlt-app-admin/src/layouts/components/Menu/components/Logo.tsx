import logo from "@/assets/images/logo.png";
const Logo = () => {
  return (
    <div className="w-full flex items-center h-[55px] border-b-slate-50 border-b border-solid">
      <img src={logo} alt="logo" className="w-[30px] ml-4" />
      <div className="ml-2 text-base">Admin</div>
    </div>
  );
};

export default Logo;
