import React from "react";
interface Props {
  params: { id: number };
}

const UserPageDetail = ({ params: { id } }: Props) => {
  return <div>UserpageDetail {id}</div>;
};

export default UserPageDetail;
