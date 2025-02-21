# AppTube 🎬

AppTube is a **YouTube-like video platform** built with **Next.js**, **Firebase**, and the **YouTube API**. It allows users to watch, upload, and interact with videos in an immersive experience, with **Google authentication** and a stunning aurora-themed UI.

## 🚀 Features
- 🌟 **User Authentication** (Google Sign-In via Firebase)
- 🎥 **Fetch Videos from YouTube API** (Trending, Music, Gaming, Movies, News, Subscriptions, New Releases)
- 🔗 **Like, Comment, and Subscribe** functionality
- 🔄 **Infinite Scrolling for Large Video Lists**
- 🏷 **Categories & Filtering** for personalized recommendations
- 📤 **Video Uploads** using Firebase Storage
- 🛠 **Fully Responsive & Optimized for Performance**

## 📦 Tech Stack
- **Frontend:** Next.js (React), TailwindCSS
- **Backend:** Firebase (Auth, Firestore, Storage)
- **API:** YouTube Data API v3
- **State Management:** React Hooks & Context API

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/apptube.git
cd apptube
```

### 2️⃣ Install Dependencies
```sh
yarn install  # or npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and add:
```env
NEXT_PUBLIC_YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
```

### 4️⃣ Run the Development Server
```sh
yarn dev  # or npm run dev
```
The app will be live at **http://localhost:3000** 🚀

## 🎬 Screenshots
| Light Mode | Dark Mode |
|-----------|-----------|
| ![Light Mode](screenshots/light-mode.png) | ![Dark Mode](screenshots/dark-mode.png) |

## 🌟 Contributing
Pull requests are welcome! Follow these steps:
1. **Fork** the repository.
2. **Create** a new branch: `git checkout -b feature-branch`.
3. **Commit** your changes: `git commit -m 'Add new feature'`.
4. **Push** to your branch: `git push origin feature-branch`.
5. **Submit** a pull request. 🚀

## 📜 License
This project is licensed under the **MIT License**.

---

