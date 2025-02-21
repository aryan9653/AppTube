import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Ensure environment variables are loaded
if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error("❌ Cloudinary environment variables are missing!");
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const { resources } = await cloudinary.api.resources({
      type: "upload",
      resource_type: "video",
      max_results: 10,
    });

    return NextResponse.json({ videos: resources }, { status: 200 });
  } catch (error) {
    console.error("❌ Cloudinary API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
