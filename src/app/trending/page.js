"use client";
import CategoryPage from "@/components/CategoryPage";
import { fetchTrendingVideos } from "@/utils/youtubeApi";

export default function TrendingPage() {
  return <CategoryPage title="Trending" fetchVideos={fetchTrendingVideos} />;
}
