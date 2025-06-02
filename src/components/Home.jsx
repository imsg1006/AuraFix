import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/enhanceImageApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setloading(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setloading(false);
    } catch (error) {
      alert("Error while loading the image. Please try again later.");
      setloading(false);
    }
  };

  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        upload={uploadImage}
        enhance={enhancedImage?.image}
      />
      {enhancedImage?.image && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <a
            href={enhancedImage.image}
            download="enhanced-image.png"
            style={{
              padding: "10px 20px",
              backgroundColor: "#CA68ED",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Download Enhanced Image
          </a>
        </div>
      )}
    </>
  );
};

export default Home;
