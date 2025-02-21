"use client";

import { useState } from "react";
import { uploadImage } from "@/utils/cloudinary"; // Import the upload function

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Show preview before uploading
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image first.");
    setUploading(true);

    const imageUrl = await uploadImage(image); // Upload to Cloudinary

    if (imageUrl) {
      console.log("Uploaded Image URL:", imageUrl);
      alert("Upload successful! Image URL: " + imageUrl);
    } else {
      alert("Upload failed. Please try again.");
    }

    setUploading(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" className="w-32 h-32 rounded-full" />}
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {uploading ? "Uploading..." : "Upload to Cloudinary"}
      </button>
    </div>
  );
}
