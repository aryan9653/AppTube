"use client";
import CategoryPage from "@/components/CategoryPage";
import { fetchSubscriptionVideos } from "@/utils/youtubeApi";

export default function SubscriptionsPage() {
  return <CategoryPage title="Subscriptions" fetchVideos={fetchSubscriptionVideos} />;
}
