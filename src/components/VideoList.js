"use client";
import Image from "next/image";
import Link from "next/link";

export default function VideoList({ videos }) {
  if (!videos || videos.length === 0) {
    return <p className="text-center text-gray-500">No videos found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {videos.map((video) => (
        <Link key={video.id.videoId || video.id} href={`https://www.youtube.com/watch?v=${video.id.videoId || video.id}`} target="_blank">
          <div className="rounded-lg overflow-hidden bg-gray-900 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            {/* Thumbnail */}
            <div className="relative">
              <Image
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width={320}
                height={180}
                className="w-full h-auto"
              />
              {/* Timestamp */}
              <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
              </span>
            </div>

            {/* Video Info */}
            <div className="p-3">
              <h2 className="text-md font-semibold text-white truncate">{video.snippet.title}</h2>
              <p className="text-sm text-gray-400 line-clamp-2">{video.snippet.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
