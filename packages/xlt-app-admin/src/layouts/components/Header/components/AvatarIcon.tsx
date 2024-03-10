import { useRef } from "react";
import { Avatar, Modal, Dropdown, message, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import PasswordModal from "./PasswordModal";
import InfoModal from "./InfoModal";
import avatar from "@/assets/images/avatar.png";
import { deleteMe, deleteToken } from "@/utils/auth";

const AvatarIcon = () => {
  const navigate = useNavigate();

  interface ModalProps {
    showModal: (params: { name: number }) => void;
  }
  const passRef = useRef<ModalProps>(null);
  const infoRef = useRef<ModalProps>(null);

  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: "温馨提示",
      content: "是否确认退出登录？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        deleteToken();
        deleteMe();
        message.success("退出登录成功！");
        navigate("/login");
      }
    });
  };

  // Dropdown Menu
  const menu: { items: MenuProps["items"] } = {
    items: [
      {
        key: "1",
        label: <span className="dropdown-item">Home</span>,
        onClick: () => navigate(HOME_URL)
      },
      // {
      //   key: "2",
      //   label: <span className="dropdown-item">个人信息</span>,
      //   onClick: () => infoRef.current!.showModal({ name: 11 })
      // },
      {
        key: "3",
        label: <span className="dropdown-item">Modify password</span>,
        onClick: () => passRef.current!.showModal({ name: 11 })
      },
      {
        type: "divider"
      },
      {
        key: "4",
        label: <span className="dropdown-item">Quit</span>,
        onClick: logout
      }
    ]
  };
  return (
    <>
      <Dropdown menu={menu} placement="bottom" arrow trigger={["click"]}>
        <Avatar size="large" src={avatar} />
      </Dropdown>
      <InfoModal innerRef={infoRef}></InfoModal>
      <PasswordModal innerRef={passRef}></PasswordModal>
    </>
  );
};

export default AvatarIcon;
