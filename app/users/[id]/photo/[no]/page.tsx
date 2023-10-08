import React from "react";
interface Props {
  params: { no: number; id: number };
}

const UserPhotoDetail = ({ params: { no, id } }: Props) => {
  return (
    <div>
      UserPhotoDetail{id}
      {no}
    </div>
  );
};

export default UserPhotoDetail;
