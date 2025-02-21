"use client";
import { useState } from "react";

export default function VideoUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Please select a video to upload.");

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setVideoUrl(data.url);
      } else {
        alert("Upload failed: " + data.error);
      }
    } catch (error) {
      console.error("Error uploading video:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md w-full max-w-lg">
      <h2 className="text-lg font-semibold">Upload a Video</h2>
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="my-2"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {videoUrl && (
        <div className="mt-4">
          <h3 className="text-md font-semibold">Uploaded Video:</h3>
          <video
            src={videoUrl}
            controls
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      )}
    </div>
  );
}
