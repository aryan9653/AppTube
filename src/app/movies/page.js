"use client";
import CategoryPage from "@/components/CategoryPage";
import { fetchMovieTrailers } from "@/utils/youtubeApi";

export default function MoviesPage() {
  return <CategoryPage title="Movies" fetchVideos={fetchMovieTrailers} />;
}
