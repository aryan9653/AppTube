"use client";
import CategoryPage from "@/components/CategoryPage";
import { fetchGamingVideos } from "@/utils/youtubeApi";

export default function GamingPage() {
  return <CategoryPage title="Gaming" fetchVideos={fetchGamingVideos} />;
}
