<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# ⏱️ 雙組競賽計時器 (Dual Competition Timer / Arena Dual Match)

一個專為雙人/雙組競賽、簡報對決或電競賽事設計的高精度、現代化 HUD 風格的網頁計時器。

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## 📖 專案簡介

本專案提供了一個直觀且具未來感的雙組計時介面，支援 A 組與 B 組獨立開始、暫停與重設時間。專案採用深色調設計（Slate-900）搭配紅藍對稱的高對比霓虹光暈，能夠在各類競爭場合（如黑客松、簡報 PK、運動競賽）為觀眾與參賽者帶來極佳的視覺張力。

🔗 **在 AI Studio 中檢視與部署此應用程式：** [AI Studio App 連結](https://ai.studio/apps/ed94c5d2-2ff0-40df-b2c7-17ed8171b06a)

---

## ✨ 核心特色

- **⚔️ 雙組獨立計時**：A 組（烈焰紅）與 B 組（冰霜藍）各自擁有獨立的控制面板，互不干擾。
- **⏱️ 高精度顯示**：支援至 **百分之一秒 (Centisecond)** 的高精度顯示，計時器每 50ms 更新，畫面流暢、運作穩定。
- **🎨 現代化 HUD 視覺**：
  - 深 slate-900 背景，搭配微透毛玻璃效果的 Header 與 Footer。
  - 當計時器運行時，會散發出對應主題色（紅/藍）的**外發光霓虹霓虹霓虹光暈**，強化比賽緊張感。
- **✨ 精緻微互動**：
  - 基於 Framer Motion 的卡片載入淡入與上升動畫。
  - 控制按鈕（START / PAUSE）的點擊微縮放回饋。
  - 重設按鈕（RESET）滑鼠懸停時的 180 度旋轉微動畫。
- **📱 響應式佈局 (Responsive Design)**：支援手機、平板與桌上型電腦，時間字型大小會隨螢幕寬度自動調節。

---

## 🛠️ 技術棧 (Tech Stack)

- **前端核心**：React 19.x & TypeScript
- **建置工具**：Vite 6.x
- **樣式處理**：Tailwind CSS v4 (使用 `@tailwindcss/vite` 進行最新一代編譯)
- **動畫效果**：Framer Motion (via `motion/react`)
- **圖標庫**：Lucide React
- **字型系統**：Google Fonts - Inter & 專用等寬字型（防止時間跳動）

---

## 📁 專案結構

```text
_2026_05_07_01_/
├── src/
│   ├── components/
│   │   └── TimerCard.tsx   # 單組計時器組件（含計時邏輯、外觀、動畫與時間格式化）
│   ├── App.tsx             # 主介面與佈局（定義標題、載入順序與雙組配色）
│   ├── main.tsx            # React 進入點
│   └── index.css           # 全域樣式、等寬字型導入與 Tailwind CSS 設定
├── index.html              # HTML 模板
├── vite.config.ts          # Vite 配置文件（集成 Tailwind 與開發伺服器 HMR 規則）
├── package.json            # 依賴包與指令定義
└── metadata.json           # AI Studio 的應用程式後設資料
```

---

## 🚀 本機運行指南

### 準備工作
請確保本機已安裝 [Node.js](https://nodejs.org/) (建議 v18 以上版本)。

### 1. 安裝依賴項目
```bash
npm install
```

### 2. 設定環境變數 (選用)
將專案根目錄下的 `.env.example` 複製一份並命名為 `.env.local`：
```bash
cp .env.example .env.local
```
*(如果需要使用 Gemini AI API 相關功能，請在內填入您的 `GEMINI_API_KEY`)*

### 3. 啟動開發伺服器
```bash
npm run dev
```
啟動後，在瀏覽器打開 [http://localhost:3000](http://localhost:3000) 即可使用！

---

## ⚙️ 部署與發布

本專案支援一鍵部署至 Google Cloud / AI Studio。當您在 AI Studio 平台中點擊部署時，它會讀取 `metadata.json` 設定，並自動在背後建立託管實例。
