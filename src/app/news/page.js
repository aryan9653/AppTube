"use client";
import CategoryPage from "@/components/CategoryPage";
import { fetchNewsVideos } from "@/utils/youtubeApi";

export default function NewsPage() {
  return <CategoryPage fetchFunction={fetchNewsVideos} title="Latest News" />;
}
