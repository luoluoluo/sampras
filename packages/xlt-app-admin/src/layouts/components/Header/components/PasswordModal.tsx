import { useState, useImperativeHandle, Ref } from "react";
import { Form, Input, Modal, message } from "antd";
import { UpdatePasswordInput, Staff } from "@/generated/graphql";
import { gql } from "@apollo/client";
import { apolloClient } from "@/utils/request";
import { deleteMe, deleteToken } from "@/utils/auth";
import { useNavigate } from "react-router-dom";
import md5 from "js-md5";

interface Props {
  innerRef: Ref<{ showModal: (params: any) => void }>;
}

const PasswordModal = (props: Props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useImperativeHandle(props.innerRef, () => ({
    showModal
  }));

  const showModal = (params: { name: number }) => {
    console.log(params);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (data: UpdatePasswordInput) => {
    try {
      setLoading(true);
      const staffRes = await apolloClient.mutate<Staff>({
        mutation: gql(/* GraphQL */ `
          mutation UpdateMePassword($input: UpdatePasswordInput!) {
            updateMePassword(input: $input) {
              id
            }
          }
        `),
        variables: {
          input: {
            oldPassword: md5(data.oldPassword),
            newPassword: md5(data.newPassword)
          }
        },
        errorPolicy: "all"
      });
      setLoading(false);
      if (staffRes.errors) {
        message.error(staffRes.errors[0].message);
        return;
      }
      deleteToken();
      deleteMe();
      navigate("/login");
      form.resetFields();
    } catch (e: any) {
      message.error(e.message);
      setLoading(false);
      console.log(e);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error(errorInfo.errorFields[0].errors[0]);
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      title="Modify password"
      open={isModalVisible}
      destroyOnClose={true}
      confirmLoading={loading}
      onCancel={handleCancel}
      onOk={() => {
        form.submit();
      }}
    >
      <Form
        form={form}
        name="updateMePassword"
        labelCol={{ span: 5 }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size="large"
        autoComplete="off"
      >
        <Form.Item name="oldPassword" label="Password" rules={[{ required: true, message: "Please input password" }]}>
          <Input.Password placeholder="Please input password" maxLength={80} />
        </Form.Item>
        <Form.Item name="newPassword" label="New password" rules={[{ required: true, message: "Please input new password" }]}>
          <Input.Password placeholder="Please input new password" maxLength={80} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default PasswordModal;
