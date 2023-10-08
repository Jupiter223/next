import React from "react";
import UserTable from "./UserTable";
import NewUserPage from "./new/page";
import Link from "next/link";
interface Props {
  searchParams: { sortOrder: String };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log();
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
