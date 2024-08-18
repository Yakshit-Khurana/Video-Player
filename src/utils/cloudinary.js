import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const cloudinaryUpload = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const uploadResponse = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log(
      "File uploaded successfully on cloudinary!\n",
      uploadResponse.url
    );
    fs.unlinkSync(localFilePath);
    return uploadResponse;
  } catch (error) {
    console.log("ERROR! ", error);
    //unlink the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { cloudinaryUpload };
