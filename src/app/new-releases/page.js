"use client";
import CategoryPage from "@/components/CategoryPage";
import { fetchNewsVideos } from "@/utils/youtubeApi";

export default function NewsPage() {
  return <CategoryPage title="News" fetchVideos={fetchNewsVideos} />;
}
