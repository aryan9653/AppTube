"use client";
import { useEffect, useState } from "react";
import VideoList from "@/components/VideoList";

export default function CategoryPage({ title, fetchVideos }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof fetchVideos !== "function") {
      console.error(`❌ fetchVideos is not a function for ${title}.`);
      setError("Failed to load videos.");
      return;
    }

    async function loadVideos() {
      try {
        setLoading(true);
        const { videos: fetchedVideos } = await fetchVideos();
        setVideos(fetchedVideos || []);
      } catch (err) {
        console.error(`Error loading videos for ${title}:`, err);
        setError("Failed to load videos.");
      } finally {
        setLoading(false);
      }
    }
    loadVideos();
  }, [fetchVideos]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      {loading && <p>Loading videos...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {videos.length > 0 ? <VideoList videos={videos} /> : <p>No videos found.</p>}
    </div>
  );
}
