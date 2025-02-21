const API_KEY = process.env.AIzaSyCgU2FX3mK7Fq1Zroj6gFF5MHP0VwwOuDE;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

/**
 * Fetch videos from YouTube API with pagination
 * @param {string} query - Search query or category ID
 * @param {string} pageToken - Token for next page (optional)
 */
async function fetchVideos(query, pageToken = "") {
  try {
    const url = new URL(`${BASE_URL}/search`);
    url.searchParams.append("part", "snippet");
    url.searchParams.append("maxResults", "10");
    url.searchParams.append("q", query);
    url.searchParams.append("type", "video");
    url.searchParams.append("key", API_KEY);

    if (pageToken) url.searchParams.append("pageToken", pageToken);

    const response = await fetch(url.toString());
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    // ✅ Ensure 'items' exists before returning
    return {
      videos: Array.isArray(data.items) ? data.items : [], // Prevents "items is not iterable" error
      nextPageToken: data.nextPageToken || null,
    };
  } catch (error) {
    console.error(`Error fetching videos for query: ${query}`, error);
    return { videos: [], nextPageToken: null }; // Prevents crash
  }
}

// 🟢 Export Category-Based Fetch Functions
export async function fetchTrendingVideos(pageToken = "") {
  return fetchVideos("trending", pageToken);
}

export async function fetchSubscriptionVideos(pageToken = "") {
  return fetchVideos("subscriptions", pageToken);
}

export async function fetchMusicVideos(pageToken = "") {
  return fetchVideos("music", pageToken);
}

export async function fetchGamingVideos(pageToken = "") {
  return fetchVideos("gaming", pageToken);
}

export async function fetchMovieTrailers(pageToken = "") {
  return fetchVideos("movies trailers", pageToken);
}

export async function fetchNewsVideos(pageToken = "") {
  return fetchVideos("latest news", pageToken);
}

export async function fetchNewReleaseVideos(pageToken = "") {
  return fetchVideos("new releases", pageToken);
}
