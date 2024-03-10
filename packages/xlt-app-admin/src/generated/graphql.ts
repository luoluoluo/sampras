/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type File = {
  __typename?: "File";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type FileInput = {
  key?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilePagination = {
  __typename?: "FilePagination";
  edges?: Maybe<Array<File>>;
  totalCount: Scalars["Int"]["output"];
};

export type FileQuery = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  me?: InputMaybe<Scalars["Boolean"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** 创建角色 */
  createRole?: Maybe<Role>;
  /** 创建管理员 */
  createStaff?: Maybe<Staff>;
  /** Delete文件 */
  deleteFile?: Maybe<File>;
  /** Delete角色 */
  deleteRole?: Maybe<Role>;
  /** Delete管理员 */
  deleteStaff?: Maybe<Staff>;
  /** 登录 */
  login?: Maybe<Token>;
  /** 修改我的密码 */
  updateMePassword?: Maybe<Staff>;
  /** Edit角色 */
  updateRole?: Maybe<Role>;
  /** Edit管理员 */
  updateStaff?: Maybe<Staff>;
};

export type MutationCreateRoleArgs = {
  input: RoleInput;
};

export type MutationCreateStaffArgs = {
  input: StaffInput;
};

export type MutationDeleteFileArgs = {
  query: FileQuery;
};

export type MutationDeleteRoleArgs = {
  query: RoleQuery;
};

export type MutationDeleteStaffArgs = {
  query: StaffQuery;
};

export type MutationLoginArgs = {
  code: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationUpdateMePasswordArgs = {
  input: UpdatePasswordInput;
};

export type MutationUpdateRoleArgs = {
  input: RoleInput;
  query: RoleQuery;
};

export type MutationUpdateStaffArgs = {
  input: StaffInput;
  query: StaffQuery;
};

export type Permission = {
  __typename?: "Permission";
  name?: Maybe<Scalars["String"]["output"]>;
  value: Scalars["String"]["output"];
};

export type PermissionPagination = {
  __typename?: "PermissionPagination";
  edges?: Maybe<Array<Permission>>;
  totalCount: Scalars["Int"]["output"];
};

export type Policy = {
  __typename?: "Policy";
  accessid?: Maybe<Scalars["String"]["output"]>;
  callback?: Maybe<Scalars["String"]["output"]>;
  dir?: Maybe<Scalars["String"]["output"]>;
  expire?: Maybe<Scalars["String"]["output"]>;
  host?: Maybe<Scalars["String"]["output"]>;
  policy?: Maybe<Scalars["String"]["output"]>;
  signature?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  /** 文件详情 */
  file?: Maybe<File>;
  /** 文件列表 */
  files?: Maybe<FilePagination>;
  /** 我的信息 */
  me?: Maybe<Staff>;
  /** 权限列表 */
  permissions?: Maybe<PermissionPagination>;
  /** 角色详情 */
  role?: Maybe<Role>;
  /** 角色列表 */
  roles?: Maybe<RolePagination>;
  /** 管理员详情 */
  staff?: Maybe<Staff>;
  /** 管理员列表 */
  staffs?: Maybe<StaffPagination>;
};

export type QueryFileArgs = {
  query: FileQuery;
};

export type QueryFilesArgs = {
  query: FileQuery;
};

export type QueryRoleArgs = {
  query: RoleQuery;
};

export type QueryRolesArgs = {
  query: RoleQuery;
};

export type QueryStaffArgs = {
  query: StaffQuery;
};

export type QueryStaffsArgs = {
  query: StaffQuery;
};

export type Role = {
  __typename?: "Role";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  rolePermissions?: Maybe<Array<Maybe<RolePermission>>>;
};

export type RoleInput = {
  name: Scalars["String"]["input"];
  permissions?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type RolePagination = {
  __typename?: "RolePagination";
  edges?: Maybe<Array<Role>>;
  totalCount: Scalars["Int"]["output"];
};

export type RolePermission = {
  __typename?: "RolePermission";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  permission: Scalars["String"]["output"];
  roleId: Scalars["String"]["output"];
};

export type RoleQuery = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Staff = {
  __typename?: "Staff";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  staffRoles?: Maybe<Array<Maybe<StaffRole>>>;
};

export type StaffInput = {
  code: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  roleIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type StaffPagination = {
  __typename?: "StaffPagination";
  edges?: Maybe<Array<Staff>>;
  totalCount: Scalars["Int"]["output"];
};

export type StaffQuery = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  me?: InputMaybe<Scalars["Boolean"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StaffRole = {
  __typename?: "StaffRole";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  role?: Maybe<Role>;
  roleId: Scalars["String"]["output"];
  staffId: Scalars["String"]["output"];
};

export type Token = {
  __typename?: "Token";
  id: Scalars["String"]["output"];
  token: Scalars["String"]["output"];
};

export type UpdatePasswordInput = {
  newPassword: Scalars["String"]["input"];
  oldPassword: Scalars["String"]["input"];
};
