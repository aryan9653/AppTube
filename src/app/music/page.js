"use client";
import CategoryPage from "@/components/CategoryPage";
import { fetchMusicVideos } from "@/utils/youtubeApi";

export default function MusicPage() {
  return <CategoryPage title="Music" fetchVideos={fetchMusicVideos} />;
}
