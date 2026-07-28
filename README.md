# 🔍 GIF-Finder (Multi-Media Search App)

A modern, responsive React application that allows users to search, discover, and save high-quality Photos, Videos, and GIFs from across the web. Built with React, Redux Toolkit, and Tailwind CSS, this app integrates seamlessly with multiple external APIs to provide a unified media search experience.

**Live Demo:** [Add your Vercel URL here once deployed]

---

## ✨ Features

* **Multi-API Integration:** Fetches real-time data from Unsplash (Photos), Pexels (Videos), and Giphy (GIFs).
* **Tabbed Navigation:** Seamlessly switch between media types without losing your search context.
* **Persistent Collections:** Save your favorite media to a personal collection. State is managed by Redux Toolkit and persisted across sessions using the browser's `localStorage`.
* **Toast Notifications:** Beautiful, dark-themed UI feedback for user actions (saving, removing, clearing) using `react-toastify`.
* **Responsive Design:** Fully responsive masonry-style grid layout built with Tailwind CSS, ensuring the app looks great on both desktop and mobile devices.
* **Video Playback:** Native HTML5 video player integration for seamless video previews.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React (using Vite)
* **Routing:** React Router DOM
* **Global State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
* **Styling:** Tailwind CSS
* **Notifications:** React Toastify
* **APIs Used:** 
  * Unsplash API
  * Pexels API
  * Giphy API

---

## 🚀 Getting Started (Local Setup)

Follow these steps to run the project locally on your machine.

### 1. Clone the repository and install dependencies
Run these commands in your terminal:
```bash
git clone [https://github.com/RuDr8A/GIF-Finder.git](https://github.com/RuDr8A/GIF-Finder.git)
cd GIF-Finder
npm install
```

### 2. Configure Environment Variables
Create a new file named `.env` in the root folder of the project and paste in your API keys:
```env
VITE_UNSPLASH_KEY=your_unsplash_access_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

### 3. Run the development server
Run this command in your terminal:
```bash
npm run dev
```
The app will be available at `http://localhost:5173/`.

---

## 📂 Project Structure

```text
src/
├── api/                # External API fetching logic (mediaApi.js)
├── components/         # Reusable UI components (ResultCard, NavBar, etc.)
├── pages/              # Route views (HomePage, Collection)
├── redux/              # Redux store and slices (searchSlice, collectionSlice)
├── App.jsx             # Main application router and layout
└── main.jsx            # React application entry point
```
