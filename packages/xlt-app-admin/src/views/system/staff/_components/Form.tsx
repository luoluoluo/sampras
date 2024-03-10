import md5 from "js-md5";
import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { CheckboxOptionType } from "antd/lib";
import { gql } from "@apollo/client";
import { apolloClient } from "@/utils/request";
import { Staff, RolePagination, StaffInput } from "@/generated/graphql";
import { useNavigate } from "react-router-dom";

const Index = ({ staff }: { staff?: Staff }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const [roleOptions, setRoleOptions] = useState<CheckboxOptionType[]>([]);
  const loadRoles = async () => {
    const roleRes = await apolloClient.query<{ roles: RolePagination }>({
      query: gql(/* GraphQL */ `
        query Roles($query: RoleQuery!) {
          roles(query: $query) {
            edges {
              id
              name
            }
            totalCount
          }
        }
      `),
      variables: { query: {} },
      errorPolicy: "all"
    });
    if (roleRes.errors) {
      message.error(roleRes.errors[0].message);
      return;
    }
    if (roleRes.data.roles.edges) {
      setRoleOptions(roleRes.data.roles.edges.map(v => ({ label: v.name!, value: v.id! })));
    }
  };
  useEffect(() => {
    loadRoles();
  }, []);

  const onFinish = async (data: StaffInput) => {
    try {
      setLoading(true);
      let staffGql = gql(/* GraphQL */ `
        mutation CreateStaff($input: StaffInput!) {
          createStaff(input: $input) {
            id
            code
            name
            password
          }
        }
      `);

      let staffVariables: any = {
        input: {
          code: data.code,
          name: data.name,
          password: data.password ? md5(data.password) : undefined,
          roleIds: data.roleIds
        }
      };

      if (staff) {
        staffGql = gql(/* GraphQL */ `
          mutation UpdateStaff($query: StaffQuery!, $input: StaffInput!) {
            updateStaff(query: $query, input: $input) {
              id
            }
          }
        `);
        staffVariables.query = { id: staff.id };
      }

      const staffRes = await apolloClient.mutate<Staff>({
        mutation: staffGql,
        variables: staffVariables,
        errorPolicy: "all"
      });
      setLoading(false);
      if (staffRes.errors) {
        message.error(staffRes.errors[0].message);
        return;
      }
      form.resetFields();
      navigate(-1);
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
    <Form
      form={form}
      name="staff"
      labelCol={{ span: 5 }}
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      autoComplete="off"
    >
      <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input name" }]} initialValue={staff?.name}>
        <Input placeholder="Please input name" maxLength={80} />
      </Form.Item>
      <Form.Item
        name="code"
        label="Account"
        rules={[{ required: true, message: "Please input account" }]}
        initialValue={staff?.code}
      >
        <Input placeholder="Please input account" maxLength={80} />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={staff ? [] : [{ required: true, message: "Please input password" }]}>
        <Input.Password placeholder={staff ? "Update Password" : "Please input password"} maxLength={80} />
      </Form.Item>
      <Form.Item
        name="roleIds"
        label="Roles"
        rules={[{ required: true, message: "Please select roles" }]}
        initialValue={staff?.staffRoles?.map(staffRole => staffRole?.role?.id) || []}
      >
        <Checkbox.Group options={roleOptions} name="roleIds" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 5 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Index;
