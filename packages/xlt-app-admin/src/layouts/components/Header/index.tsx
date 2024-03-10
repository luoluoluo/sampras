import { Layout } from "antd";
import AvatarIcon from "./components/AvatarIcon";
import "./index.less";
import logo from "@/assets/images/logo.png";
import { getMe } from "@/utils/auth";
const LayoutHeader = () => {
  const me = getMe();
  const { Header } = Layout;

  return (
    <Header style={{ backgroundColor: "white" }} className="px-4 m-0">
      <div className="w-full flex items-center h-[55px] border-b-slate-50 border-b border-solid">
        <img src={logo} alt="logo" className="w-[30px]" />
        <div className="ml-2 text-base">Admin</div>
      </div>
      <div className="flex items-center">
        <span className="mr-2">{me?.name}</span>
        <AvatarIcon />
      </div>
    </Header>
  );
};

export default LayoutHeader;
