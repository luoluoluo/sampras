import { useEffect, useState } from "react";
import { Button, Checkbox, CheckboxOptionType, Form, Input, message } from "antd";
import { gql } from "@apollo/client";
import { Staff, Role, RoleInput, PermissionPagination } from "@/generated/graphql";
import { apolloClient } from "@/utils/request";
import { useNavigate } from "react-router-dom";

const Index = ({ role }: { role?: Role }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const [permissionOptions, setPermissionOptions] = useState<CheckboxOptionType[]>([]);

  const loadPermissions = async () => {
    const res = await apolloClient.query<{ permissions: PermissionPagination }>({
      query: gql(/* GraphQL */ `
        query Permissions {
          permissions {
            edges {
              name
              value
            }
            totalCount
          }
        }
      `),
      errorPolicy: "all"
    });
    if (res.errors) {
      message.error(res.errors[0].message);
      return;
    }
    if (res.data.permissions.edges) {
      setPermissionOptions(res.data.permissions.edges.map(v => ({ label: v.name!, value: v.value! })));
    }
  };

  useEffect(() => {
    loadPermissions();
  }, []);

  const onFinish = async (data: RoleInput) => {
    try {
      setLoading(true);
      let roleGql = gql(/* GraphQL */ `
        mutation CreateRole($input: RoleInput!) {
          createRole(input: $input) {
            id
          }
        }
      `);

      let roleVariables: any = {
        input: {
          name: data.name,
          permissions: data.permissions
        }
      };

      if (role) {
        roleGql = gql(/* GraphQL */ `
          mutation UpdateRole($query: RoleQuery!, $input: RoleInput!) {
            updateRole(query: $query, input: $input) {
              id
            }
          }
        `);
        roleVariables.query = { id: role.id };
      }

      const userRes = await apolloClient.mutate<Staff>({
        mutation: roleGql,
        variables: roleVariables,
        errorPolicy: "all"
      });
      setLoading(false);
      if (userRes.errors) {
        message.error(userRes.errors[0].message);
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
      name="basic"
      labelCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      autoComplete="off"
    >
      <Form.Item
        name="name"
        label="Role name"
        rules={[{ required: true, message: "Please input role name" }]}
        initialValue={role?.name}
      >
        <Input placeholder="Please input role name" maxLength={80} />
      </Form.Item>
      <Form.Item
        name="permissions"
        label="Permissions"
        rules={[{ required: true, message: "Please select permissions" }]}
        initialValue={role?.rolePermissions?.map(rolePermission => rolePermission?.permission)}
      >
        <Checkbox.Group options={permissionOptions} name="permissions" />
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
