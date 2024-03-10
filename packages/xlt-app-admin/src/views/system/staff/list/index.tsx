import { can } from "@/utils/auth";
import { Table, Button, Space, message, Tag, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { apolloClient } from "@/utils/request";
import { Staff, StaffPagination, StaffQuery } from "@/generated/graphql";
import { FileAddOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  // const [offset, setOffset] = useState(0);
  // const limit = 10;
  const [staffQuery, setStaffQuery] = useState<StaffQuery>({
    offset: 0,
    limit: 5
  });
  const [staffPagination, setStaffPagination] = useState<StaffPagination>();
  const loadStaffData = async () => {
    console.log("loadStaffData");
    const staffRes = await apolloClient.query<{ staffs: StaffPagination }>({
      query: gql(/* GraphQL */ `
        query Staffs($query: StaffQuery!) {
          staffs(query: $query) {
            edges {
              code
              id
              name
              password
              staffRoles {
                id
                role {
                  name
                  id
                }
              }
              createdAt
            }
            totalCount
          }
        }
      `),
      variables: { query: staffQuery },
      fetchPolicy: "no-cache",
      errorPolicy: "all"
    });
    if (staffRes.errors) {
      message.error(staffRes.errors[0].message);
      return;
    }
    setStaffPagination(staffRes.data.staffs);
  };
  useEffect(() => {
    loadStaffData();
  }, [staffQuery]);

  const columns: any[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center"
    },
    {
      title: "Account",
      dataIndex: "code",
      key: "code",
      align: "center"
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
      align: "center",
      render: (_: any, { staffRoles }: Staff) => (
        <>
          {(staffRoles || []).map(staffRole => {
            return <Tag key={staffRole?.role?.id}>{staffRole?.role?.name}</Tag>;
          })}
        </>
      )
    },
    {
      title: "Create date",
      dataIndex: "createdAt",
      className: "ant-table-cell-ellipsis",
      key: "createdAt",
      align: "center",
      render: (_: any, item: Staff) => <>{dayjs(Number(item.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</>
    },
    {
      title: "Actions",
      key: "action",
      render: (_: any, staff: Staff) => (
        <Space size="small" direction="vertical">
          {can("mutation.updateStaff") ? (
            <Button
              size="small"
              onClick={() => {
                navigate(`/system/staff/edit?id=${staff.id}`);
              }}
            >
              Edit
            </Button>
          ) : null}
          {can("mutation.deleteStaff") ? (
            <Popconfirm
              title="Delete"
              description="Confirm delete?"
              onConfirm={async () => {
                const deleteStaffRes = await apolloClient.mutate({
                  mutation: gql(/* GraphQL */ `
                    mutation DeleteStaff($query: StaffQuery!) {
                      deleteStaff(query: $query) {
                        id
                      }
                    }
                  `),
                  variables: {
                    query: {
                      id: staff.id
                    }
                  },
                  errorPolicy: "all"
                });
                if (deleteStaffRes.errors) {
                  message.error(deleteStaffRes.errors[0].message);
                  return;
                }
                loadStaffData();
              }}
            >
              <Button danger size="small">
                Delete
              </Button>
            </Popconfirm>
          ) : null}
        </Space>
      )
    }
  ];
  return (
    <div className="card content-box">
      <div className="flex justify-end">
        {can("mutation.createStaff") ? (
          <Button
            icon={<FileAddOutlined />}
            type="primary"
            onClick={() => {
              navigate(`/system/staff/add`);
            }}
          >
            Create
          </Button>
        ) : null}
      </div>
      <Table
        className="mt-4"
        bordered={true}
        pagination={{
          current: staffQuery.offset! / staffQuery.limit! + 1,
          pageSize: staffQuery.limit!,
          total: staffPagination?.totalCount,
          onChange: page => {
            setStaffQuery({ ...staffQuery, offset: (page - 1) * staffQuery.limit! });
          }
        }}
        rowKey="id"
        dataSource={staffPagination?.edges || []}
        columns={columns}
      />
    </div>
  );
};

export default Index;
