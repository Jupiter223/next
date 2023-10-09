import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: { id: number };
}

const UserPageDetail = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserpageDetail {id}</div>;
};

export default UserPageDetail;
