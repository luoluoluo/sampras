import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Category = {
  __typename?: "Category";
  childrens?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars["String"]["output"]>;
};

export type CategoryInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  parentId?: InputMaybe<Scalars["String"]["input"]>;
};

export type CategoryPagination = {
  __typename?: "CategoryPagination";
  edges?: Maybe<Array<Category>>;
  totalCount: Scalars["Int"]["output"];
};

export type CategoryQuery = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Collection = {
  __typename?: "Collection";
  collectionSpus?: Maybe<Array<CollectionSpu>>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CollectionInput = {
  collectionSpus?: InputMaybe<Array<CollectionSpuInput>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type CollectionPagination = {
  __typename?: "CollectionPagination";
  edges?: Maybe<Array<Collection>>;
  totalCount: Scalars["Int"]["output"];
};

export type CollectionQuery = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CollectionSpu = {
  __typename?: "CollectionSpu";
  collection?: Maybe<Collection>;
  collectionId?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  spu?: Maybe<Spu>;
  spuId?: Maybe<Scalars["String"]["output"]>;
};

export type CollectionSpuInput = {
  collcetionId?: InputMaybe<Scalars["String"]["input"]>;
  spuId?: InputMaybe<Scalars["String"]["input"]>;
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
  /** Create分类 */
  createCategory?: Maybe<Category>;
  /** Create产品集 */
  createCollection?: Maybe<Collection>;
  /** 创建角色 */
  createRole?: Maybe<Role>;
  /** Createsku */
  createSku?: Maybe<Sku>;
  /** Create规格名 */
  createSpecName?: Maybe<SpecName>;
  /** Create规格值 */
  createSpecValue?: Maybe<SpecValue>;
  /** Create产品 */
  createSpu?: Maybe<Spu>;
  /** 创建管理员 */
  createStaff?: Maybe<Staff>;
  /** Create客户 */
  createUser?: Maybe<User>;
  /** Delete分类 */
  deleteCategory?: Maybe<Category>;
  /** Delete产品集 */
  deleteCollection?: Maybe<Collection>;
  /** Delete文件 */
  deleteFile?: Maybe<File>;
  /** Delete角色 */
  deleteRole?: Maybe<Role>;
  /** Deletesku */
  deleteSku?: Maybe<Sku>;
  /** Delete规格名 */
  deleteSpecName?: Maybe<SpecName>;
  /** Delete规格值 */
  deleteSpecValue?: Maybe<SpecValue>;
  /** Delete产品 */
  deleteSpu?: Maybe<Spu>;
  /** Delete管理员 */
  deleteStaff?: Maybe<Staff>;
  /** Delete客户 */
  deleteUser?: Maybe<User>;
  /** 登录 */
  login?: Maybe<Token>;
  /** Edit分类 */
  updateCategory?: Maybe<Category>;
  /** Edit产品集 */
  updateCollection?: Maybe<Collection>;
  /** 修改我的密码 */
  updateMePassword?: Maybe<Staff>;
  /** Edit角色 */
  updateRole?: Maybe<Role>;
  /** Editsku */
  updateSku?: Maybe<Sku>;
  /** Edit规格名 */
  updateSpecName?: Maybe<SpecName>;
  /** Edit规格值 */
  updateSpecValue?: Maybe<SpecValue>;
  /** Edit产品 */
  updateSpu?: Maybe<Spu>;
  /** Edit管理员 */
  updateStaff?: Maybe<Staff>;
  /** Edit客户 */
  updateUser?: Maybe<User>;
};

export type MutationCreateCategoryArgs = {
  input: CategoryInput;
};

export type MutationCreateCollectionArgs = {
  input: CollectionInput;
};

export type MutationCreateRoleArgs = {
  input: RoleInput;
};

export type MutationCreateSkuArgs = {
  input: SkuInput;
};

export type MutationCreateSpecNameArgs = {
  input: SpecNameInput;
};

export type MutationCreateSpecValueArgs = {
  input: SpecValueInput;
};

export type MutationCreateSpuArgs = {
  input: SpuInput;
};

export type MutationCreateStaffArgs = {
  input: StaffInput;
};

export type MutationCreateUserArgs = {
  input: UserInput;
};

export type MutationDeleteCategoryArgs = {
  query: CategoryQuery;
};

export type MutationDeleteCollectionArgs = {
  query: CollectionQuery;
};

export type MutationDeleteFileArgs = {
  query: FileQuery;
};

export type MutationDeleteRoleArgs = {
  query: RoleQuery;
};

export type MutationDeleteSkuArgs = {
  query: SkuQuery;
};

export type MutationDeleteSpecNameArgs = {
  query: SpecNameQuery;
};

export type MutationDeleteSpecValueArgs = {
  query: SpecValueQuery;
};

export type MutationDeleteSpuArgs = {
  query: SpuQuery;
};

export type MutationDeleteStaffArgs = {
  query: StaffQuery;
};

export type MutationDeleteUserArgs = {
  query: UserQuery;
};

export type MutationLoginArgs = {
  code: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationUpdateCategoryArgs = {
  input: CategoryInput;
  query: CategoryQuery;
};

export type MutationUpdateCollectionArgs = {
  input: CollectionInput;
  query: CollectionQuery;
};

export type MutationUpdateMePasswordArgs = {
  input: UpdatePasswordInput;
};

export type MutationUpdateRoleArgs = {
  input: RoleInput;
  query: RoleQuery;
};

export type MutationUpdateSkuArgs = {
  input: SkuInput;
  query: SkuQuery;
};

export type MutationUpdateSpecNameArgs = {
  input: SpecNameInput;
  query: SpecNameQuery;
};

export type MutationUpdateSpecValueArgs = {
  input: SpecValueInput;
  query: SpecValueQuery;
};

export type MutationUpdateSpuArgs = {
  input: SpuInput;
  query: SpuQuery;
};

export type MutationUpdateStaffArgs = {
  input: StaffInput;
  query: StaffQuery;
};

export type MutationUpdateUserArgs = {
  input: UserInput;
  query: UserQuery;
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
  /** 分类列表 */
  categories?: Maybe<CategoryPagination>;
  /** 分类详情 */
  category?: Maybe<Category>;
  /** 产品集详情 */
  collection?: Maybe<Collection>;
  /** 产品集列表 */
  collections?: Maybe<CollectionPagination>;
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
  /** sku详情 */
  sku?: Maybe<Sku>;
  /** sku列表 */
  skus?: Maybe<SkuPagination>;
  /** 规格名详情 */
  specName?: Maybe<SpecName>;
  /** 规格名列表 */
  specNames?: Maybe<SpecNamePagination>;
  /** 规格值详情 */
  specValue?: Maybe<SpecValue>;
  /** 规格值列表 */
  specValues?: Maybe<SpecValuePagination>;
  /** 产品详情 */
  spu?: Maybe<Spu>;
  /** 产品列表 */
  spus?: Maybe<SpuPagination>;
  /** 管理员详情 */
  staff?: Maybe<Staff>;
  /** 管理员列表 */
  staffs?: Maybe<StaffPagination>;
  /** 客户详情 */
  user?: Maybe<User>;
  /** 客户列表 */
  users?: Maybe<UserPagination>;
};

export type QueryCategoriesArgs = {
  query: CategoryQuery;
};

export type QueryCategoryArgs = {
  query: CategoryQuery;
};

export type QueryCollectionArgs = {
  query: CollectionQuery;
};

export type QueryCollectionsArgs = {
  query: CollectionQuery;
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

export type QuerySkuArgs = {
  query: SkuQuery;
};

export type QuerySkusArgs = {
  query: SkuQuery;
};

export type QuerySpecNameArgs = {
  query: SpecNameQuery;
};

export type QuerySpecNamesArgs = {
  query: SpecNameQuery;
};

export type QuerySpecValueArgs = {
  query: SpecValueQuery;
};

export type QuerySpecValuesArgs = {
  query: SpecValueQuery;
};

export type QuerySpuArgs = {
  query: SpuQuery;
};

export type QuerySpusArgs = {
  query: SpuQuery;
};

export type QueryStaffArgs = {
  query: StaffQuery;
};

export type QueryStaffsArgs = {
  query: StaffQuery;
};

export type QueryUserArgs = {
  query: UserQuery;
};

export type QueryUsersArgs = {
  query: UserQuery;
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

export type Sku = {
  __typename?: "Sku";
  costPrice?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  skuMedias?: Maybe<Array<SkuMedia>>;
  skuSpecValues?: Maybe<Array<SkuSpecValue>>;
  spu?: Maybe<Spu>;
  spuId?: Maybe<Scalars["String"]["output"]>;
  staffPrice?: Maybe<Scalars["Int"]["output"]>;
  stock?: Maybe<Scalars["Int"]["output"]>;
};

export type SkuInput = {
  costPrice?: InputMaybe<Scalars["Int"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  skuMedias?: InputMaybe<Array<SkuMediaInput>>;
  skuSpecValues?: InputMaybe<Array<SkuSpecValueInput>>;
  spuId?: InputMaybe<Scalars["String"]["input"]>;
  staffPrice?: InputMaybe<Scalars["Int"]["input"]>;
  stock?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SkuMedia = {
  __typename?: "SkuMedia";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  file?: Maybe<File>;
  fileId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  sku?: Maybe<Sku>;
  skuId?: Maybe<Scalars["String"]["output"]>;
};

export type SkuMediaInput = {
  fileId?: InputMaybe<Scalars["String"]["input"]>;
  skuId?: InputMaybe<Scalars["String"]["input"]>;
};

export type SkuPagination = {
  __typename?: "SkuPagination";
  edges?: Maybe<Array<Sku>>;
  totalCount: Scalars["Int"]["output"];
};

export type SkuQuery = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  spuId?: InputMaybe<Scalars["String"]["input"]>;
};

export type SkuSpecValue = {
  __typename?: "SkuSpecValue";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  sku?: Maybe<Sku>;
  skuId?: Maybe<Scalars["String"]["output"]>;
  specValue?: Maybe<SpecValue>;
  specValueId?: Maybe<Scalars["String"]["output"]>;
};

export type SkuSpecValueInput = {
  skuId?: InputMaybe<Scalars["String"]["input"]>;
  specValueId?: InputMaybe<Scalars["String"]["input"]>;
};

export type SpecName = {
  __typename?: "SpecName";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  specValues?: Maybe<Array<SpecValue>>;
  spu?: Maybe<Spu>;
  spuId?: Maybe<Scalars["String"]["output"]>;
};

export type SpecNameInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  spuId?: InputMaybe<Scalars["String"]["input"]>;
};

export type SpecNamePagination = {
  __typename?: "SpecNamePagination";
  edges?: Maybe<Array<SpecName>>;
  totalCount: Scalars["Int"]["output"];
};

export type SpecNameQuery = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  spuId?: InputMaybe<Scalars["String"]["input"]>;
};

export type SpecValue = {
  __typename?: "SpecValue";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  specName?: Maybe<SpecName>;
  specNameId?: Maybe<Scalars["String"]["output"]>;
  spu?: Maybe<Spu>;
  spuId?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type SpecValueInput = {
  specNameId?: InputMaybe<Scalars["String"]["input"]>;
  spuId?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type SpecValuePagination = {
  __typename?: "SpecValuePagination";
  edges?: Maybe<Array<SpecValue>>;
  totalCount: Scalars["Int"]["output"];
};

export type SpecValueQuery = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Spu = {
  __typename?: "Spu";
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars["String"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  lowestSkuPrice?: Maybe<Scalars["Int"]["output"]>;
  maxSkuStock?: Maybe<Scalars["Int"]["output"]>;
  publishedAt?: Maybe<Scalars["String"]["output"]>;
  skus?: Maybe<Array<Sku>>;
  specNames?: Maybe<Array<SpecName>>;
  specValues?: Maybe<Array<SpecValue>>;
  spuMedias?: Maybe<Array<SpuMedia>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type SpuInput = {
  categoryId?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  spuMedias?: InputMaybe<Array<SpuMediaInput>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type SpuMedia = {
  __typename?: "SpuMedia";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  file?: Maybe<File>;
  fileId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  spu?: Maybe<Spu>;
  spuId?: Maybe<Scalars["String"]["output"]>;
};

export type SpuMediaInput = {
  fileId?: InputMaybe<Scalars["String"]["input"]>;
  spuId?: InputMaybe<Scalars["String"]["input"]>;
};

export type SpuPagination = {
  __typename?: "SpuPagination";
  edges?: Maybe<Array<Spu>>;
  totalCount: Scalars["Int"]["output"];
};

export type SpuQuery = {
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

export type User = {
  __typename?: "User";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
};

export type UserInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserPagination = {
  __typename?: "UserPagination";
  edges?: Maybe<Array<User>>;
  totalCount: Scalars["Int"]["output"];
};

export type UserQuery = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Category: ResolverTypeWrapper<Category>;
  CategoryInput: CategoryInput;
  CategoryPagination: ResolverTypeWrapper<CategoryPagination>;
  CategoryQuery: CategoryQuery;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionInput: CollectionInput;
  CollectionPagination: ResolverTypeWrapper<CollectionPagination>;
  CollectionQuery: CollectionQuery;
  CollectionSpu: ResolverTypeWrapper<CollectionSpu>;
  CollectionSpuInput: CollectionSpuInput;
  File: ResolverTypeWrapper<File>;
  FileInput: FileInput;
  FilePagination: ResolverTypeWrapper<FilePagination>;
  FileQuery: FileQuery;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Permission: ResolverTypeWrapper<Permission>;
  PermissionPagination: ResolverTypeWrapper<PermissionPagination>;
  Policy: ResolverTypeWrapper<Policy>;
  Query: ResolverTypeWrapper<{}>;
  Role: ResolverTypeWrapper<Role>;
  RoleInput: RoleInput;
  RolePagination: ResolverTypeWrapper<RolePagination>;
  RolePermission: ResolverTypeWrapper<RolePermission>;
  RoleQuery: RoleQuery;
  Sku: ResolverTypeWrapper<Sku>;
  SkuInput: SkuInput;
  SkuMedia: ResolverTypeWrapper<SkuMedia>;
  SkuMediaInput: SkuMediaInput;
  SkuPagination: ResolverTypeWrapper<SkuPagination>;
  SkuQuery: SkuQuery;
  SkuSpecValue: ResolverTypeWrapper<SkuSpecValue>;
  SkuSpecValueInput: SkuSpecValueInput;
  SpecName: ResolverTypeWrapper<SpecName>;
  SpecNameInput: SpecNameInput;
  SpecNamePagination: ResolverTypeWrapper<SpecNamePagination>;
  SpecNameQuery: SpecNameQuery;
  SpecValue: ResolverTypeWrapper<SpecValue>;
  SpecValueInput: SpecValueInput;
  SpecValuePagination: ResolverTypeWrapper<SpecValuePagination>;
  SpecValueQuery: SpecValueQuery;
  Spu: ResolverTypeWrapper<Spu>;
  SpuInput: SpuInput;
  SpuMedia: ResolverTypeWrapper<SpuMedia>;
  SpuMediaInput: SpuMediaInput;
  SpuPagination: ResolverTypeWrapper<SpuPagination>;
  SpuQuery: SpuQuery;
  Staff: ResolverTypeWrapper<Staff>;
  StaffInput: StaffInput;
  StaffPagination: ResolverTypeWrapper<StaffPagination>;
  StaffQuery: StaffQuery;
  StaffRole: ResolverTypeWrapper<StaffRole>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Token: ResolverTypeWrapper<Token>;
  UpdatePasswordInput: UpdatePasswordInput;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  UserPagination: ResolverTypeWrapper<UserPagination>;
  UserQuery: UserQuery;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  Category: Category;
  CategoryInput: CategoryInput;
  CategoryPagination: CategoryPagination;
  CategoryQuery: CategoryQuery;
  Collection: Collection;
  CollectionInput: CollectionInput;
  CollectionPagination: CollectionPagination;
  CollectionQuery: CollectionQuery;
  CollectionSpu: CollectionSpu;
  CollectionSpuInput: CollectionSpuInput;
  File: File;
  FileInput: FileInput;
  FilePagination: FilePagination;
  FileQuery: FileQuery;
  Int: Scalars["Int"]["output"];
  Mutation: {};
  Permission: Permission;
  PermissionPagination: PermissionPagination;
  Policy: Policy;
  Query: {};
  Role: Role;
  RoleInput: RoleInput;
  RolePagination: RolePagination;
  RolePermission: RolePermission;
  RoleQuery: RoleQuery;
  Sku: Sku;
  SkuInput: SkuInput;
  SkuMedia: SkuMedia;
  SkuMediaInput: SkuMediaInput;
  SkuPagination: SkuPagination;
  SkuQuery: SkuQuery;
  SkuSpecValue: SkuSpecValue;
  SkuSpecValueInput: SkuSpecValueInput;
  SpecName: SpecName;
  SpecNameInput: SpecNameInput;
  SpecNamePagination: SpecNamePagination;
  SpecNameQuery: SpecNameQuery;
  SpecValue: SpecValue;
  SpecValueInput: SpecValueInput;
  SpecValuePagination: SpecValuePagination;
  SpecValueQuery: SpecValueQuery;
  Spu: Spu;
  SpuInput: SpuInput;
  SpuMedia: SpuMedia;
  SpuMediaInput: SpuMediaInput;
  SpuPagination: SpuPagination;
  SpuQuery: SpuQuery;
  Staff: Staff;
  StaffInput: StaffInput;
  StaffPagination: StaffPagination;
  StaffQuery: StaffQuery;
  StaffRole: StaffRole;
  String: Scalars["String"]["output"];
  Token: Token;
  UpdatePasswordInput: UpdatePasswordInput;
  User: User;
  UserInput: UserInput;
  UserPagination: UserPagination;
  UserQuery: UserQuery;
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Category"] = ResolversParentTypes["Category"]
> = {
  childrens?: Resolver<
    Maybe<Array<ResolversTypes["Category"]>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes["Category"]>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CategoryPagination"] = ResolversParentTypes["CategoryPagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["Category"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"]
> = {
  collectionSpus?: Resolver<
    Maybe<Array<ResolversTypes["CollectionSpu"]>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CollectionPagination"] = ResolversParentTypes["CollectionPagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["Collection"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionSpuResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CollectionSpu"] = ResolversParentTypes["CollectionSpu"]
> = {
  collection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType
  >;
  collectionId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  spu?: Resolver<Maybe<ResolversTypes["Spu"]>, ParentType, ContextType>;
  spuId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["File"] = ResolversParentTypes["File"]
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilePaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FilePagination"] = ResolversParentTypes["FilePagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["File"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createCategory?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCategoryArgs, "input">
  >;
  createCollection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCollectionArgs, "input">
  >;
  createRole?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateRoleArgs, "input">
  >;
  createSku?: Resolver<
    Maybe<ResolversTypes["Sku"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSkuArgs, "input">
  >;
  createSpecName?: Resolver<
    Maybe<ResolversTypes["SpecName"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSpecNameArgs, "input">
  >;
  createSpecValue?: Resolver<
    Maybe<ResolversTypes["SpecValue"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSpecValueArgs, "input">
  >;
  createSpu?: Resolver<
    Maybe<ResolversTypes["Spu"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSpuArgs, "input">
  >;
  createStaff?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateStaffArgs, "input">
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "input">
  >;
  deleteCategory?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCategoryArgs, "query">
  >;
  deleteCollection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCollectionArgs, "query">
  >;
  deleteFile?: Resolver<
    Maybe<ResolversTypes["File"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteFileArgs, "query">
  >;
  deleteRole?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteRoleArgs, "query">
  >;
  deleteSku?: Resolver<
    Maybe<ResolversTypes["Sku"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSkuArgs, "query">
  >;
  deleteSpecName?: Resolver<
    Maybe<ResolversTypes["SpecName"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSpecNameArgs, "query">
  >;
  deleteSpecValue?: Resolver<
    Maybe<ResolversTypes["SpecValue"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSpecValueArgs, "query">
  >;
  deleteSpu?: Resolver<
    Maybe<ResolversTypes["Spu"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSpuArgs, "query">
  >;
  deleteStaff?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteStaffArgs, "query">
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, "query">
  >;
  login?: Resolver<
    Maybe<ResolversTypes["Token"]>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, "code" | "password">
  >;
  updateCategory?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCategoryArgs, "input" | "query">
  >;
  updateCollection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCollectionArgs, "input" | "query">
  >;
  updateMePassword?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateMePasswordArgs, "input">
  >;
  updateRole?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRoleArgs, "input" | "query">
  >;
  updateSku?: Resolver<
    Maybe<ResolversTypes["Sku"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSkuArgs, "input" | "query">
  >;
  updateSpecName?: Resolver<
    Maybe<ResolversTypes["SpecName"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSpecNameArgs, "input" | "query">
  >;
  updateSpecValue?: Resolver<
    Maybe<ResolversTypes["SpecValue"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSpecValueArgs, "input" | "query">
  >;
  updateSpu?: Resolver<
    Maybe<ResolversTypes["Spu"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSpuArgs, "input" | "query">
  >;
  updateStaff?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateStaffArgs, "input" | "query">
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, "input" | "query">
  >;
};

export type PermissionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Permission"] = ResolversParentTypes["Permission"]
> = {
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PermissionPagination"] = ResolversParentTypes["PermissionPagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["Permission"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PolicyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Policy"] = ResolversParentTypes["Policy"]
> = {
  accessid?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  dir?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  expire?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  policy?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  signature?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  categories?: Resolver<
    Maybe<ResolversTypes["CategoryPagination"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoriesArgs, "query">
  >;
  category?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryArgs, "query">
  >;
  collection?: Resolver<
    Maybe<ResolversTypes["Collection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCollectionArgs, "query">
  >;
  collections?: Resolver<
    Maybe<ResolversTypes["CollectionPagination"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCollectionsArgs, "query">
  >;
  file?: Resolver<
    Maybe<ResolversTypes["File"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFileArgs, "query">
  >;
  files?: Resolver<
    Maybe<ResolversTypes["FilePagination"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFilesArgs, "query">
  >;
  me?: Resolver<Maybe<ResolversTypes["Staff"]>, ParentType, ContextType>;
  permissions?: Resolver<
    Maybe<ResolversTypes["PermissionPagination"]>,
    ParentType,
    ContextType
  >;
  role?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType,
    RequireFields<QueryRoleArgs, "query">
  >;
  roles?: Resolver<
    Maybe<ResolversTypes["RolePagination"]>,
    ParentType,
    ContextType,
    RequireFields<QueryRolesArgs, "query">
  >;
  sku?: Resolver<
    Maybe<ResolversTypes["Sku"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySkuArgs, "query">
  >;
  skus?: Resolver<
    Maybe<ResolversTypes["SkuPagination"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySkusArgs, "query">
  >;
  specName?: Resolver<
    Maybe<ResolversTypes["SpecName"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySpecNameArgs, "query">
  >;
  specNames?: Resolver<
    Maybe<ResolversTypes["SpecNamePagination"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySpecNamesArgs, "query">
  >;
  specValue?: Resolver<
    Maybe<ResolversTypes["SpecValue"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySpecValueArgs, "query">
  >;
  specValues?: Resolver<
    Maybe<ResolversTypes["SpecValuePagination"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySpecValuesArgs, "query">
  >;
  spu?: Resolver<
    Maybe<ResolversTypes["Spu"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySpuArgs, "query">
  >;
  spus?: Resolver<
    Maybe<ResolversTypes["SpuPagination"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySpusArgs, "query">
  >;
  staff?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType,
    RequireFields<QueryStaffArgs, "query">
  >;
  staffs?: Resolver<
    Maybe<ResolversTypes["StaffPagination"]>,
    ParentType,
    ContextType,
    RequireFields<QueryStaffsArgs, "query">
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "query">
  >;
  users?: Resolver<
    Maybe<ResolversTypes["UserPagination"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, "query">
  >;
};

export type RoleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Role"] = ResolversParentTypes["Role"]
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  rolePermissions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["RolePermission"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolePaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RolePagination"] = ResolversParentTypes["RolePagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["Role"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolePermissionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RolePermission"] = ResolversParentTypes["RolePermission"]
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  permission?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  roleId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkuResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Sku"] = ResolversParentTypes["Sku"]
> = {
  costPrice?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  skuMedias?: Resolver<
    Maybe<Array<ResolversTypes["SkuMedia"]>>,
    ParentType,
    ContextType
  >;
  skuSpecValues?: Resolver<
    Maybe<Array<ResolversTypes["SkuSpecValue"]>>,
    ParentType,
    ContextType
  >;
  spu?: Resolver<Maybe<ResolversTypes["Spu"]>, ParentType, ContextType>;
  spuId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  staffPrice?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkuMediaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SkuMedia"] = ResolversParentTypes["SkuMedia"]
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  file?: Resolver<Maybe<ResolversTypes["File"]>, ParentType, ContextType>;
  fileId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes["Sku"]>, ParentType, ContextType>;
  skuId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkuPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SkuPagination"] = ResolversParentTypes["SkuPagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["Sku"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkuSpecValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SkuSpecValue"] = ResolversParentTypes["SkuSpecValue"]
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes["Sku"]>, ParentType, ContextType>;
  skuId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  specValue?: Resolver<
    Maybe<ResolversTypes["SpecValue"]>,
    ParentType,
    ContextType
  >;
  specValueId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecNameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SpecName"] = ResolversParentTypes["SpecName"]
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  specValues?: Resolver<
    Maybe<Array<ResolversTypes["SpecValue"]>>,
    ParentType,
    ContextType
  >;
  spu?: Resolver<Maybe<ResolversTypes["Spu"]>, ParentType, ContextType>;
  spuId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecNamePaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SpecNamePagination"] = ResolversParentTypes["SpecNamePagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["SpecName"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecValueResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SpecValue"] = ResolversParentTypes["SpecValue"]
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  specName?: Resolver<
    Maybe<ResolversTypes["SpecName"]>,
    ParentType,
    ContextType
  >;
  specNameId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  spu?: Resolver<Maybe<ResolversTypes["Spu"]>, ParentType, ContextType>;
  spuId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecValuePaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SpecValuePagination"] = ResolversParentTypes["SpecValuePagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["SpecValue"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpuResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Spu"] = ResolversParentTypes["Spu"]
> = {
  category?: Resolver<
    Maybe<ResolversTypes["Category"]>,
    ParentType,
    ContextType
  >;
  categoryId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  lowestSkuPrice?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  maxSkuStock?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  publishedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  skus?: Resolver<Maybe<Array<ResolversTypes["Sku"]>>, ParentType, ContextType>;
  specNames?: Resolver<
    Maybe<Array<ResolversTypes["SpecName"]>>,
    ParentType,
    ContextType
  >;
  specValues?: Resolver<
    Maybe<Array<ResolversTypes["SpecValue"]>>,
    ParentType,
    ContextType
  >;
  spuMedias?: Resolver<
    Maybe<Array<ResolversTypes["SpuMedia"]>>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpuMediaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SpuMedia"] = ResolversParentTypes["SpuMedia"]
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  file?: Resolver<Maybe<ResolversTypes["File"]>, ParentType, ContextType>;
  fileId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  spu?: Resolver<Maybe<ResolversTypes["Spu"]>, ParentType, ContextType>;
  spuId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpuPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SpuPagination"] = ResolversParentTypes["SpuPagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["Spu"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Staff"] = ResolversParentTypes["Staff"]
> = {
  code?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  staffRoles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StaffRole"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StaffPagination"] = ResolversParentTypes["StaffPagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["Staff"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffRoleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StaffRole"] = ResolversParentTypes["StaffRole"]
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["Role"]>, ParentType, ContextType>;
  roleId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  staffId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Token"] = ResolversParentTypes["Token"]
> = {
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  code?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPaginationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserPagination"] = ResolversParentTypes["UserPagination"]
> = {
  edges?: Resolver<
    Maybe<Array<ResolversTypes["User"]>>,
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  CategoryPagination?: CategoryPaginationResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionPagination?: CollectionPaginationResolvers<ContextType>;
  CollectionSpu?: CollectionSpuResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FilePagination?: FilePaginationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Permission?: PermissionResolvers<ContextType>;
  PermissionPagination?: PermissionPaginationResolvers<ContextType>;
  Policy?: PolicyResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RolePagination?: RolePaginationResolvers<ContextType>;
  RolePermission?: RolePermissionResolvers<ContextType>;
  Sku?: SkuResolvers<ContextType>;
  SkuMedia?: SkuMediaResolvers<ContextType>;
  SkuPagination?: SkuPaginationResolvers<ContextType>;
  SkuSpecValue?: SkuSpecValueResolvers<ContextType>;
  SpecName?: SpecNameResolvers<ContextType>;
  SpecNamePagination?: SpecNamePaginationResolvers<ContextType>;
  SpecValue?: SpecValueResolvers<ContextType>;
  SpecValuePagination?: SpecValuePaginationResolvers<ContextType>;
  Spu?: SpuResolvers<ContextType>;
  SpuMedia?: SpuMediaResolvers<ContextType>;
  SpuPagination?: SpuPaginationResolvers<ContextType>;
  Staff?: StaffResolvers<ContextType>;
  StaffPagination?: StaffPaginationResolvers<ContextType>;
  StaffRole?: StaffRoleResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPagination?: UserPaginationResolvers<ContextType>;
};
