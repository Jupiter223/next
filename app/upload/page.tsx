"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <div>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="a image" />
      )}
      <CldUploadWidget
        uploadPreset="j9tgr8fv"
        options={{
          sources: ["local"],
        }}
        onUpload={(result, widget) => {
          console.log(result);
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <button className="btn btn-primary" onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
